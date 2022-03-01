<template>
  <div
    class="el-alert"
    :class="[typeClass]"
  >
    <div class="el-alert__content">
      <span>
        <slot name="title">{{ title }}</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
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
