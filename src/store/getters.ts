/*
 * @Descripttion: 
 * @Date: 2022-10-31 17:13:44
 * @LastEditTime: 2022-11-23 15:48:33
 */
const getters = {
  token: (state: any) => state.token,
  user: (state: any) => state.user.user,
  lang: (state: any) => state.user.lang,
};
export default getters;
