/*
 * @Descripttion: 
 * @Date: 2022-04-26 17:06:51
 * @LastEditTime: 2022-10-21 16:04:39
 */
import request from "@/utils/request";
/**
 * @description: 用户登录
 * @param {type}
 * @return: Promise
 */
export function login(data: any) {
  return request({
    url: "/v1/login",
    method: "post",
    data: data
  });
}

/**
 * @description: 退出登陆
 * @param {type}
 * @return: Promise
 */
export function logout() {
  return request({
    url: "/v1/logout",
    method: "post"
  });
}

/**
 * @description: 改密码
 * @param {type}
 * @return: Promise
 */
export function changepassword(data: any) {
  return request({
    url: "/v1/user/password",
    method: "put",
    data: data
  });
}

/**
 * @description: 获取用户信息
 * @param {type}
 * @return: Promise
 */
export function getUsrInfo() {
  return request({
    url: "/v1/user/information",
    method: "get"
  });
}

/**
 * @description: 找回密码
 * @param {type}
 * @return: Promise
 */
export function retrievePassword(data: any) {
  return request({
    url: "/v1/user/password/retrieve",
    method: "post",
    data: data
  });
}
/**
 * @Descripttion: 获取随机数
 * @param {*} data
 * @return {*}
 */
export function getSaltByPhoneNum(data: any) {
  return request({
    url: `/v1/user/phoneNumber/${data.phoneNumber}/saltrandom`,
    method: "get"
  });
}

/**
 * @Descripttion: 设置用户信息
 * @param {*} data
 * @return {*}
 */
export function setUserInfo(data: any) {
  return request({
    url: `/v1/user/information`,
    method: "put",
    data: data
  });
}

/**
 * @Descripttion: 校验authkey
 * @param {*} data
 * @return {*}
 */
export function checkAuthKey(data: any) {
  return request({
    url: `/v1/user/authkey/check`,
    method: "post",
    data: data
  });
}

/**
 * @Descripttion: 检查当前密码输入是否正确
 * @param {*} data
 * @return {*}
 */
export function checkOldPass(data: any) {
  return request({
    url: `/v1/callback/${data.callbackCode}`,
    method: "get"
  });
}
