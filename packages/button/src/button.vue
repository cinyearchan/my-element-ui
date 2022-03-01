<template>
  <button>size: {{ size }}</button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    size: {
      type: String,
      default: 'default'
    }
  }
}
</script>
