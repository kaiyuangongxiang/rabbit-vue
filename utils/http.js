import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { userStore } from "@/stores/user";
import router from "@/router";
const http = axios.create({
  baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    const myStore = userStore();
    const token = myStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
http.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const myStore = userStore();
    // 统一错误提示
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    //401 token 失效处理
    if (e.response.status === 401) {
      myStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(e);
  }
);

export default http;
