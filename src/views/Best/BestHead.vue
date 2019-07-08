<template>
  <div>
    <Swipercon :key="this.dataList.length">
      <div class="swiper-slide" v-for="data in dataList" :key="data.material_id">
        <img :src="data.img_url" />
      </div>
    </Swipercon>
  </div>
</template>

<script>
import Swipercon from "@/components/Swiper.vue";

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
      this.dataList = resp.data.data.data.sections[0].body.items;
    });
  },
  components: {
    Swipercon
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
    height: 1.88rem;
  }
}
</style>