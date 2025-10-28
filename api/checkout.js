import http from "@/utils/http";

//获取详情接口
export const getCheckInfoAPI = () => {
  return http({
    url: "/member/order/pre",
  });
};
