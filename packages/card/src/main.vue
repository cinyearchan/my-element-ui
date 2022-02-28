<template>
  <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="el-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'ElCard',
  props: {
    bodyStyle: {},
    shadow: {
      type: String
    },
  }
}
</script>

<style scoped>
@import "../../theme-chalk/lib/card.css";
</style>
