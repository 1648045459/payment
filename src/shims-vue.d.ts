/*
 * @Descripttion: 
 * @Date: 2022-04-02 10:39:23
 * @LastEditTime: 2022-11-23 15:50:58
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'csprng';
declare module 'nprogress';
declare module 'lodash/upperFirst';
declare module 'lodash/camelCase';