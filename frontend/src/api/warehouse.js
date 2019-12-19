import request from "./request";
import store from '@/store'

const login_info = store.getters.login_info;

export function package_scan(input) {
  const data = Object.assign(input, login_info);
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function get_pici_info() {
  const data = Object.assign({action: 'get_pici_info'}, login_info);
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function get_main_plate_info() {
  const data = Object.assign({action: 'get_main_plate_info'}, login_info);
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function change_pici_code(new_pici_code, old_pici_code) {
  const data = Object.assign({action: 'change_pici_code', new_pici_code: new_pici_code, old_pici_code: old_pici_code}, login_info);
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}
