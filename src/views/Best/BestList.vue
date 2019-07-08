<template>
  <div>
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" >
.box {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 20%;
    height: 0.8rem;
    display: flex;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>