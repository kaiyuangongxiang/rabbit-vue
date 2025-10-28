import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  //1.定义cartList
  const cartList = ref([]);
  //2.定义action -addCart
  const addCart = async (goods) => {
    //添加购物车操作
    //已经添加 count+1
    //没有添加 直接push
    const item = cartList.value.find((item) => goods.skuId == item.skuId);
    if (item) {
      item.count++;
    } else {
      cartList.value.push(goods);
    }
  };
  const delCart = async (skuId) => {
    //1.找到要删除的下标
    //2.使用数组过滤的方法
    const idx = cartList.value.findIndex((item) => skuId === item.skuId);
    cartList.value.splice(idx, 1);
  };
  //清空购物车
  const clearCart = () => {
    cartList.value = {};
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
  return {
    cartList,
    addCart,
    delCart,
    clearCart,
    allCount,
    allPrice,
  };
});
