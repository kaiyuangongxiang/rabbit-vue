import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import { createRouter, createWebHistory } from "vue-router";
import SubCategory from "@/views//SubCategory/index.vue";
import Datail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";
import CheckOut from "@/views/CheckOut/index.vue";
import Pay from "@/views/Pay/index.vue";
import PayBack from "@/views/Pay/PayBack.vue";
import Member from "@/views/Member/index.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          //Home：默认在首页展示，二级路由为空
          path: "",
          component: Home,
        },
        {
          path: "category/:id",
          component: Category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
        {
          path: "detail/:id",
          component: Datail,
        },
        {
          path: "cartList",
          component: CartList,
        },
        {
          path: "checkout",
          component: CheckOut,
        },
        {
          path: "pay",
          component: Pay,
        },
        {
          path: "paycallback",
          component: PayBack,
        },
        {
          path: "member",
          component: Member,
          children: [
            {
              path: "",
              component: UserInfo,
            },
            {
              path: "order",
              component: UserOrder,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
