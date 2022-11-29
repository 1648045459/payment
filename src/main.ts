/*
 * @Descripttion: 
 * @Date: 2022-05-30 10:56:33
 * @LastEditTime: 2022-11-23 16:41:12
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/permission";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "./style/index.css"; //全局样式
import vueI18n from './locales/index'
// svg component
import SvgIcon from './components/SvgIcon/index.vue'
import { registerComponents } from '@/utils/RegisterComponents'
import VConsole from "vconsole";
try {
  const hardCode = require('@/assets/constant/index')
  const index = hardCode.HOST.findIndex((it: any) => it === window.location.hostname)
  if (index > -1) {
    new VConsole();
  }
  const HOST = require('/Users/Administrator/host.json')
  for (let k in HOST) {
    if (window.location.hostname === HOST[k]) {
      new VConsole();
      (window as any).isDebugger = true
    }
  }
} catch (error) {
  // console.log("VConsole error = ", error)
}


const app = createApp(App);


// 注册全局组件
registerComponents(app);

// 全局设置 svg 组件
app.component('svg-icon', SvgIcon)

app.use(Antd)
app.use(vueI18n);
app.use(store)
app.use(router)
app.mount("#app");
