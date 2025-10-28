import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/api/user";
import { useCartStore } from "./cartStore";
import {mergeCartAPI} from "@/api/cart";

export const userStore = defineStore(
  "user",
  () => {
    //1.定义管理用户数据的state
    const userInfo = ref({});
    const cartStore = useCartStore();
    //2.定义获取接口数据的acion函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      //合并本地购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      //获取最新列表
      cartStore.updateNewList();
    };
    //退出登陆时清除用户信息
    //const cartStore = useCartStore();
    const clearUserInfo = () => {
      userInfo.value = {};
      //清除购物车
      //cartStore.clearCart();
    };
    //3.以对象的形式返回
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
