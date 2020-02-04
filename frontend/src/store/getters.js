const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  errorLog: state => state.errorLog.logs,
  permission_routes: state => state.permission.permission_routes,
  login_info: state => {
    return {
      'user': state.user.name,
      'sign': state.user.token
    }
  },
  scan_type: state => state.parcelscan.scan_type,
  scan_successed: state => state.parcelscan.scan_successed,
  scan_failed: state => state.parcelscan.scan_failed,
  scan_main_plate_code: state => state.parcelscan.scan_main_plate_code
};
export default getters;
