import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { userStore } from "./user";
import { findNewCartListAPI, insertCartAPI, delCartAPI } from "@/api/cart";

export const useCartStore = defineStore(
  "cart",
  () => {
    const myStore = userStore();
    const isLogin = computed(() => myStore.userInfo.token);

    //1.定义cartList
    const cartList = ref([]);
    // const updateNewList = async () => {
    //   const res = await findNewCartListAPI();
    //   cartList.value = res.result;
    // };
    //2.定义action -addCart
    const addCart = async (goods) => {
      if (isLogin.value) {
        //添加接口购物车
        const { skuId, count } = goods;
        await insertCartAPI(skuId, count);
        const res = await findNewCartListAPI();
        console.log(res);

        //cartList.value = res.result;
      } else {
        //添加本地购物车操作
        //已经添加 count+1
        //没有添加 直接push
        const item = cartList.value.find((item) => goods.skuId == item.skuId);
        if (item) {
          item.count++;
        } else {
          cartList.value.push(goods);
        }
      }
    };
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId]);
        const res = await findNewCartListAPI();
        console.log(res);
        //cartList.value = res.result;
      } else {
        //1.找到要删除的下标
        //2.使用数组过滤的方法
        const idx = cartList.value.findIndex((item) => skuId === item.skuId);
        cartList.value.splice(idx, 1);
      }
    };
    //清空购物车
    const clearCart = () => {
      cartList.value = [];
    };
    //计算属性
    //1.总的数量
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    //2.总价格
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );
    //单选功能
    const singCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };
    //全选功能
    const allCheck = (selected) => {
      //把cartList中每一项selected都设置为全选状态
      cartList.value.forEach((item) => (item.selected = selected));
    };
    //计算是否全选属性
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    //已经选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );
    //已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    );

    return {
      cartList,
      addCart,
      delCart,
      clearCart,
      allCount,
      allPrice,
      singCheck,
      allCheck,
      isAll,
      selectedCount,
      selectedPrice,
    };
  },
  {
    persist: true,
  }
);
