import http from "@/utils/http";

export const loginAPI = ({ account, password }) => {
  return http({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
//猜你喜欢数据
export const getLikeListAPI = ({ limit = 4 }) => {
  return http({
    url: "goods/relevant",
    params: {
      limit,
    },
  });
};
