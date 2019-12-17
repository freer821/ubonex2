import request from "./request";
export function package_scan(data) {
  data.action = "parckage_scan";
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}


export function get_pici_info(data) {
  data.action = "get_pici_info";
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}
