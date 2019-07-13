<template>
  <div>
    <div class="swiper-container Swiper1">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  mounted() {
    this.$nextTick(() => {
      new Swiper(".Swiper1", {
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
</style>
