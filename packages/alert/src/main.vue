<template>
  <div
    class="el-alert"
    :class="[typeClass, 'is-' + effect]"
  >
    <div class="el-alert__content">
      <span>
        <slot name="title">{{ title }}</slot>
      </span>
    </div>
  </div>
</template>

<script>

module.exports = {
  name: 'ElAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    effect: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    typeClass() {
      return `el-alert--${this.type}`;
    },
    iconClass() {
      return `el-alert__icon--${this.type}`;
    },
    isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : '';
    }
  }
}
</script>
