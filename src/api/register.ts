/*
 * @Descripttion: 
 * @Date: 2022-08-10 11:28:44
 * @LastEditTime: 2022-10-27 18:20:49
 */
import request from "@/utils/request";
/**
 * @Descripttion: 注册手机号获取验证码
 * @param {*}
 * @return {*}
 */
export function getVerCode(data: any) {
  return request({
    url: `/v1/user/sms`,
    method: "post",
    data: data
  });
}
/**
 * @Descripttion: 检查验证码是否正确
 * @param {*}
 * @return {*}
 */
export function checkVerCode(data: any) {
  return request({
    url: `/v1/user/sms/verification`,
    method: "post",
    data: data
  });
}
/**
 * @Descripttion: 发送注册信息
 * @param {*}
 * @return {*}
 */

export function sendRegisterData(data: any) {
  return request({
    url: `/v1/register`,
    method: "post",
    data: data
  });
}


/**
 * @Descripttion: 验证手机号是否已经注册
 * @param {*}
 * @return {*}
 */
export function checkPhone(data: any) {
  return request({
    url: `/v1/verifyMobile`,
    method: "post",
    data: data
  });
}