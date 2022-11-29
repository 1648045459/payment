<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :href="'#icon-' + icon" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps<{
  iconClass: string;
  className?: string;
}>();
const icon = computed(() => {
  return props.iconClass;
});

const svgClass = computed(() => {
  if (props.className) {
    return props.className;
  } else {
    return 'svg-icon';
  }
});
const req = require.context('@/assets/svg', false, /\.svg$/);
//解析
const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};
requireAll(req);
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  /* color: rgba(255, 255, 255, 0) !important ; */
  background: rgba(255, 255, 255, 0) !important ;
}
</style>