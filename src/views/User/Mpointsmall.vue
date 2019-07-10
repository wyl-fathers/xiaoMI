<template>
  <div id="app">
    <div class="text">
      <p class="fz-m">请前往小米商城App查看会员福利</p>
    </div>
    <div class="action">
      <div class="btn">立即下载小米商城App</div>
    </div>
  </div>
</template>
<script>
import headerDown from "@/components/HeaderDown.vue";
export default {
  components: { headerDown },
  methods: {}
};
</script>

<style lang="scss" scoped>
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