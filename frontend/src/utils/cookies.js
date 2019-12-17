import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getUsername() {
  return Cookies.get('user');
}

export function setUsername(username) {
  return Cookies.set('user', username);
}

export function removeUsername() {
  return Cookies.remove('user');
}

export function getScanSuccessed() {
  return Cookies.get('scansuccessed');
}

export function setScanSuccessed(scansuccessed) {
  return Cookies.set('scansuccessed', scansuccessed);
}

export function getScanFailed() {
  return Cookies.get('scanfailed');
}

export function setScanFailed(scanfailed) {
  return Cookies.set('scanfailed', scanfailed);
}
