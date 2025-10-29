import { ref, computed, onUnmounted } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
  //初始化定时器对象
  let timer = null;
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  const time = ref(0);
  //2.开启倒计时逻辑
  const start = (currentTime) => {
    //每隔一秒就减一
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };
  //组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer);
  });
  return {
    formatTime,
    start,
  };
};
