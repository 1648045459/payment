/*
 * @Descripttion: 
 * @Date: 2022-04-28 15:37:23
 * @LastEditTime: 2022-11-23 15:56:45
 */

import { getCookie } from "@/utils/auth"; // get token from cookie
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import router from "./router";
import store from "./store";


NProgress.configure({ showSpinner: false }); // NProgress Configuration
const whiteList = [
  "RegisterPhone",
  "RegisterVerCode",
  "RegisterPassword",
  "RegisterSuccess",
  "RegisterWarn",
  "RegisterWarn3",
  "ProduceMnemonics",
  "InputMnemonics",
  "Login",
  "RetrievePhone",
  "RetrieveVerCode",
  "RetrieveSuccess",
  "RetrievePassword",
  "RetrieveMnemonics",
]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {


  window.onmessage = async function (event) {
    if (event.data && event.data.type === 'dapp-connect-chain-wallet') {
      console.warn("wallet get dapp data = ", event.data)
      if (event.data.params && event.data.params.dapp_params) {
        sessionStorage.setItem('dapp_params', JSON.stringify(event.data.params.dapp_params))
        router.push({ name: 'WindowOpenConnect' });
      } else if (event.data.params && event.data.params.dappTradeId) {
        // await useInitialization()
        // await subscribeToEvents();
        // sessionStorage.setItem('dappTradeId', event.data.params.dappTradeId)

      }
    }
  };

  // start progress bar
  // determine whether the user has logged in
  const token = getCookie("token");
  if (token) {
    if (to.path === "/") {
      // if is logged in, redirect to the home page
      next({ path: "/main", query: to.query });
      NProgress.done();
    } else {
      const hasGetUserInfo = store.state.user.user;
      if (JSON.stringify(hasGetUserInfo) !== "{}") {
        next();
      } else {
        try {
          // get user info
          let userData = getCookie("user")
          const user = userData ? JSON.parse(userData) : {};
          const token = getCookie("token");
          await store.commit("user/batchUpdateState", {
            token: token,
            user: user
          });
          next();
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetUserInfo");
          // Message.error(error || "Has Error");
          next(`/`); // 退出登录
          NProgress.done();
        }
      }
    }
  } else {
    // 跳出未登录
    const name = to.name?.toString()
    if (name && whiteList.indexOf(name) !== -1) {
      // /!* has no token*!/;
      // in the free login whitelist, go directly
      // await store.dispatch("user/resetUserInfo");

      next();
    } else {
      next(`/`);
      await store.dispatch("user/resetUserInfo");
      NProgress.done();
    }
  }
});

router.afterEach((to, from, next) => {

  // dapp connect wallet



  // finish progress bar
  NProgress.done();
});
