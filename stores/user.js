import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/api/user";
import { useCartStore } from "./cartStore";

export const userStore = defineStore(
  "user",
  () => {
    //1.定义管理用户数据的state
    const userInfo = ref({});
    //2.定义获取接口数据的acion函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };
    //退出登陆是清除用户信息
    const cartStore = useCartStore();
    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
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
