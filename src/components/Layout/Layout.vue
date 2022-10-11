<template>
  <div class="layout"></div>
</template>
.<script>
export default {
  name: "Layout",
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.layout {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: $Layout;
  opacity: 0.9;
  top: 0px;
}
</style>