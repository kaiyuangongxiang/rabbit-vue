import http from "@/utils/http";
/**
 * @description: 获取轮播图
 * @param {*}
 * @returns {*}
 */
export function getBannerAPI() {
  return http({
    url: "home/banner",
  });
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @returns {*}
 */
export function getNewAPI() {
  return http({
    url: "home/new",
  });
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @returns {*}
 */
export function getHotAPI() {
  return http({
    url: "home/hot",
  });
}

export function getGoodsAPI() {
  return http({
    url: "home/goods",
  });
}
