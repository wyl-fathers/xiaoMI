<template>
  <div>
    <div class="swiper-container swiper2">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  props: ['perView', 'myClass'],
  mounted () {
    new Swiper('.swiper2', {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
