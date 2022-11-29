/*
 * @Descripttion:  test
 * @Date: 2022-04-19 11:49:36
 * @LastEditTime: 2022-11-23 15:56:35
 */
import {
  login,
  logout,
  getUsrInfo
} from "@/api/user";
import { getCookie, removeCookie, setCookie } from "@/utils/auth";
import { useCookies } from '@vueuse/integrations';
import { batchUpdateState } from "@/utils";

import { Module } from 'vuex';

import router from '../../router/index'

const TOKEN_KEY = (window as any).TOKEN_KEY;

const token = useCookies().get(TOKEN_KEY as string);
import { AnyObject } from "@/utils/types";
interface StoreUser {
  token: string;
  accounts: string;
  user: AnyObject;
}
const updateUserInfo = (commit: any, data: any) => {
  const { token, user } = data;

  if (token) {
    setCookie("token", token);
  }
  setCookie("user", JSON.stringify(user));
  commit("batchUpdateState", data);
};
const store: Module<StoreUser, unknown> = {
  namespaced: true,
  state() {
    return {
      token: token,
      accounts: '',
      user: {}
    };
  },
  mutations: {
    batchUpdateState: (state, payload) => {
      batchUpdateState(state, payload);
    }
  },
  actions: {
    // user login
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        commit("batchUpdateState", {
          token: "",
          lang: "",
          user: {}
        });
        removeCookie("token"); // token
        removeCookie("user");

        removeCookie("AIPortal_Res_Account");
        login(userInfo)
          .then(result => {
            resolve(result);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // user logout 
    logoutMth({ dispatch }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(async result => {
            await dispatch("resetUserInfo").then(() => {
              router.push("/login");
            });
            resolve(result);
          })
          .catch(async error => {
            await dispatch("resetUserInfo").then(() => {
              router.push("/login");
            });
            reject(error);
          });
      });
    },
    // 获取用户资料
    async getUsrInfoMth({ commit }, payload) {
      return new Promise(async (resolve, reject) => {
        const result = await getUsrInfo();

        const user = result.data;
        const token = getCookie("token");
        updateUserInfo(commit, { token, user });
        resolve(result);
      });
    },
    // remove token
    resetUserInfo({ commit }) {
      return new Promise(async (resolve, reject) => {
        commit("batchUpdateState", {
          token: "",
          lang: "",
          user: {}
        });
        removeCookie("token"); // token
        removeCookie("user");
        Object.keys(localStorage).forEach(item => {
          item.indexOf("hist-") === -1 ? localStorage.removeItem(item) : ""
        });
        resolve('');
      });
    },
  }
};

export default store;
