<template>
  <div>管理员首页{{name}}</div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  beforeMount() {
    this.name=this.$cookies.get("username")
  }
};
</script>

<style scoped>
</style>
