/*
 * @Descripttion: 
 * @Date: 2022-10-31 17:13:44
 * @LastEditTime: 2022-11-23 15:48:37
 */
import user from "./modules/user";

import getters from "./getters";
import { createStore, createLogger } from "vuex";
export interface State {
  [key: string]: any;
}
const store = createStore<State>({
  modules: {
    user,
  },
  getters,
  strict: true,
  plugins: [createLogger()]
});

export default store;
