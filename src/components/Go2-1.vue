<template>
  <div>
    <span class="iconfont" @click="check">&#xe66d;</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    check () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  position: fixed;
  top: .2rem;
  left: .2rem;
  width: .3rem;
  height: .3rem;
  line-height: .3rem;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, .5);
  color:#fff;
  font-weight: bold;
  z-index: 999;
}
</style>
