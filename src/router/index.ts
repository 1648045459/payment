/*
 * @Descripttion: 
 * @Date: 2022-05-24 13:08:42
 * @LastEditTime: 2022-11-23 15:40:58
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/home/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
