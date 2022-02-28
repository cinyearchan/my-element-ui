<template>
 <button>
   size: {{size}}
 </button>
</template>

<script>
module.exports = {
  name: 'ElButton',
  props: {
    size: {
      type: String,
      default: 'default'
    }
  }
}
</script>
