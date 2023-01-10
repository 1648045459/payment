<!--
 * @Descripttion: 
 * @Date: 2022-08-02 14:55:16
 * @LastEditTime: 2023-01-10 17:51:42
-->

<template>
  <div class="main">
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>

    <div>
      <WeiXin></WeiXin>
    </div>
    <div>
      <ZhiFuBao></ZhiFuBao>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
// import Darkmode from 'darkmode-js';

onMounted(() => {
  // const options = {
  //   bottom: '64px', // default: '32px'
  //   right: 'unset', // default: '32px'
  //   left: '32px', // default: 'unset'
  //   time: '0.5s', // default: '0.3s'
  //   mixColor: '#fff', // default: '#fff'
  //   backgroundColor: '#fff', // default: '#fff'
  //   buttonColorDark: '#100f2c', // default: '#100f2c'
  //   buttonColorLight: '#fff', // default: '#fff'
  //   saveInCookies: false, // default: true,
  //   label: '🌓', // default: ''
  //   autoMatchOsTheme: true, // default: true
  // };
  // const darkmode = new Darkmode(options);
  // darkmode.showWidget();
});
</script>
<style scoped>
/* @media (dark-mode: true) {
  .main {
    background: red;
  }
} */
</style>
