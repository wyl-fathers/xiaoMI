<template>
  <div id="app">
    <HeaderDown class="go2"><span>会员中心</span></HeaderDown>
    <div class="text">
      <p class="fz-m">请前往小米商城App查看会员福利</p>
    </div>
    <div class="action">
      <div class="btn">立即下载小米商城App</div>
    </div>
  </div>
</template>
<script>
import HeaderDown from '@/components/HeaderDown.vue'
export default {
  beforeMount () {
    this.$store.commit('NavHide', false)
  },
  beforeDestroy () {
    this.$store.commit('NavHide', true)
  },
  components: { HeaderDown },
  methods: {}
}
</script>

<style lang="scss" scoped>
.go2{
  display: flex;
  left: .3rem;
  top: .35rem
}
.text {
  padding: 0.75rem 0.2rem 0.5rem;
  .fz-m {
    font-size: 0.16rem !important;
    text-align: center;
  }
}
.action {
    margin: 0 .2rem;
    .btn {
    display: block;
    outline: 0;
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    font-size: .14rem;
}
}
</style>
