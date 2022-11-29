<!--
 * @Descripttion: 
 * @Date: 2022-04-02 10:39:23
 * @LastEditTime: 2022-11-23 15:57:29
-->
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component
        v-if="route.meta && route.meta.keepAlive"
        :is="Component"
        :key="key"
      />
    </keep-alive>
    <component
      v-if="!(route.meta && route.meta.keepAlive)"
      :is="Component"
      :key="key"
    />
  </router-view>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue';
// 基础配置
import { useRoute } from 'vue-router';
const route = useRoute();

const key = computed(() => {
  const name: any = route.name;
  return route.name ? `${name}${new Date()}` : `${route}${new Date()}`;
});

onMounted(() => {});
</script>
<style lang="scss">
</style>
