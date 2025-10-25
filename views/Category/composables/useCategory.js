import { getCategoryAPI } from "@/api/category";
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    //console.log(res);
    categoryData.value = res.result;
  };
  onMounted(() => {
    getCategory();
  });

  //目标：路由参数变化的时候重新请求接口数据4
  onBeforeRouteUpdate((to) => {
    console.log("路由变化了");
    //通过to目标路由对象获取路由参数
    //console.log(to);
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
