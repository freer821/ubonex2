import request from "./request";

export function login(data) {
  return request({
    url: "/packhouse_login",
    method: "post",
    data
  });
}
