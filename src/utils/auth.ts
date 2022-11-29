/*
 * @Descripttion: 
 * @Date: 2022-10-26 21:42:54
 * @LastEditTime: 2022-11-22 15:01:44
 */
import Cookies from 'js-cookie';

// const TokenKey = import.meta.env.TOKEN_KEY;
const TokenKey = "token"

export function getCookie(key: string) {
  // if (key === undefined) {
  //   // return Cookies.get(TokenKey);
  //   return
  // } else {
  return Cookies.get(key);
  // }
}
//dsfsd
export function setCookie(key: string, token: string) {
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome) {
    //html iframe调用，Cookie保存需要浏览器 sameSite: 'none',secure: true参数支持
    return Cookies.set(key, token, {
      sameSite: 'none',
      secure: true
    });

  } else {
    return Cookies.set(key, token);
  }

}

export function removeCookie(key: string) {
  if (key === undefined) {
    return Cookies.remove(TokenKey);
  } else {
    return Cookies.remove(key);
  }
}
