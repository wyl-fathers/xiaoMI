<template>
  <div>
    <span class="iconfont" @click="check">&#xe66d;</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    check() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>