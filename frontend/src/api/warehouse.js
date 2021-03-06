import request from "./request";
import store from "@/store";

const login_info = store.getters.login_info;

export function packhouse_action(input) {
  const data = Object.assign(input, login_info);
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function get_pici_info() {
  const data = Object.assign({ action: "get_pici_info" }, login_info);
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function get_main_plate_info() {
  const data = Object.assign({ action: "get_main_plate_info" }, login_info);
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function change_pici_code(new_pici_code, old_pici_code) {
  const data = Object.assign(
    {
      action: "change_pici_code",
      new_pici_code: new_pici_code,
      old_pici_code: old_pici_code
    },
    login_info
  );
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function exchange_pici_code_to_main_plate_code(
  main_plate_code,
  pici_code
) {
  const data = Object.assign(
    {
      action: "exchange_pici_code_to_main_plate_code",
      pici_code: pici_code,
      main_plate_code: main_plate_code
    },
    login_info
  );
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function del_pici_code(pici_code) {
  const data = Object.assign(
    { action: "del_pici_code", pici_code: pici_code },
    login_info
  );
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}
export function update_main_plate_code(
  new_main_plate_code,
  old_main_plate_code
) {
  const data = Object.assign(
    {
      action: "update_main_plate_code",
      new_main_plate_code: new_main_plate_code,
      old_main_plate_code: old_main_plate_code
    },
    login_info
  );
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function del_main_plate_code(main_plate_code) {
  const data = Object.assign(
    { action: "del_main_plate_code", main_plate_code: main_plate_code },
    login_info
  );
  return request({
    url: "/packhouse_action",
    method: "post",
    data
  });
}

export function getPackagesInMainPlateCode(mainplatecode) {
  const data = Object.assign(
    { action: "getPackagesInMainPlateCode", main_plate_code: mainplatecode },
    login_info
  );
  return request({
    url: "packhouse_action",
    method: "post",
    data
  });
}

export function getPackagesInPiciCode(picicode) {
  const data = Object.assign(
    { action: "getPackagesInPiciCode", picicode: picicode },
    login_info
  );
  return request({
    url: "packhouse_action",
    method: "post",
    data
  });
}
