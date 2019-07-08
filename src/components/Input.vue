<template>
  <div>
    <div class="Input">
      <i class="iconfont i1">&#xe661;</i>
      <input type="text" name="sousuo" class="iconfont" :placeholder="icon" />
      <i class="iconfont">&#xe686;</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: `\ue66f  搜索商品名称 `
    };
  }
};
</script>

<style lang="scss" scoped>
.Input {
  height: 0.4375rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    height: 0.3rem;
    width: 2.7rem;
  }
  i {
    font-size: 0.24rem;
  }
  .i1{
    color: #fa6d09;
  }
}
</style>