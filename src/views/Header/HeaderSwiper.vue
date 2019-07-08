<template>
  <div>
    <div class="swiper-container HeaderSwiper">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide" v-for=" data in dataList" :key="data.page_id"></div> -->
        <router-link
          class="swiper-slide"
          v-for=" (data,index) in dataList"
          :key="data.page_id"
          tag="div"
          :to="'/Best/Recommend'+index"
        >{{data.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    axios({
      method: "post",
      url: "/v1/home/page",
      data: {
        client_id: "180100031051",
        channel_id: "0",
        webp: "1",
        page_type: "recommend",
        recommend_tag: "XMGUEST-4E017660-9F8B-11E9-8EF2-E7ECC66E4982"
      }
    }).then(resp => {
      //   console.log(resp.data.data);
      this.dataList = resp.data.data.tabs;
      this.$nextTick(() => {
        new Swiper(".HeaderSwiper", {
          slidesPerView: 12,
          spaceBetween: 0,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  display: flex;
  //   justify-content: flex-start;
}
.swiper-slide {
  height: 0.3rem;
  font-size: 0.16rem;
  text-align: center;
  padding: 0 0.13rem;
}
.HeaderSwiper {
  overflow: hidden;
  //   width: 80%;
  height: 0.3rem;
  display: flex;
  justify-content: flex-start;
}
</style>