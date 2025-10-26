import http from "@/utils/http";

/**
 *@description: 获取商品详情
 *@param {*} id
 *@return {*}
 */
export const getDetailAPI = (id) => {
  return http({
    url: "/goods",
    params: {
      id,
    },
  });
};
