<template>
  <div>
    <div class="swiper-container HeaderSwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for=" (data,index) in dataList"
          :key="data.page_id"
          @click="check(index)"
        >
          <p :class="{color:iscolor===index}">{{data.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  data () {
    return {
      dataList: [],
      iscolor: 0
    }
  },
  methods: {
    check (el) {
      // console.log(el);
      this.$emit('lzcindex', el)
      this.iscolor = el
    },
    isChange () {}
  },
  mounted () {
    axios({
      method: 'post',
      url: '/v1/home/page',
      data: {
        client_id: '180100031051',
        channel_id: '0',
        webp: '1',
        page_type: 'recommend',
        recommend_tag: 'XMGUEST-4E017660-9F8B-11E9-8EF2-E7ECC66E4982'
      }
    }).then(resp => {
      //   console.log(resp.data.data);
      this.dataList = resp.data.data.tabs
      this.$nextTick(() => {
        new Swiper('.HeaderSwiper', {
          // loop: true,
          slidesPerView: 5
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
p {
  height: 100%;
}
.color {
  color: #ff6600;
  box-sizing: border-box;
  border-bottom: 0.05rem solid #ff6600;
}
.swiper-wrapper {
  display: flex;
  //   justify-content: flex-start;
}
.swiper-slide {
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 0.75rem !important;
  // padding: 0 0.13rem;
  color: #3c3c3c;
  font-size: 0.14rem;
}
.HeaderSwiper {
  overflow: hidden;
  //   width: 80%;
  height: 0.3rem;
  display: flex;
  justify-content: flex-start;
}
</style>
