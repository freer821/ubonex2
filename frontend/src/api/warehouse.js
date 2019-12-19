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
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function get_main_plate_info(data) {
  let request_data = Object.assign({}, data);
  request_data.action = "get_main_plate_info";
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}
