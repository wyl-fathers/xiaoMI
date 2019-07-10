<template>
  <div>
    <SwiperDetail v-if="dataList.length" :key="dataList.length">
      <div
        class="swiper-slide first-swiper"
        v-for="(data,index) in dataList[0].gallery_v3"
        :key="'sqm'+index"
      >
        <img :src="data.img_url" />
      </div>
    </SwiperDetail>
    <div class="msg">
      <h1 v-if="productName">{{productName}}</h1>
      <div class="description" v-if="productDesc" v-html="productDesc">{{productDesc}}</div>
      <h1 class="price" v-if="marketPrice">￥{{marketPrice}}</h1>
    </div>
    <DetailSwiper
      :key="parametersList.length"
      perView
      class="parameterSwiper"
      myClass="parameterSwiper"
    >
      <div
        class="swiper-slide sec-swiper"
        v-for="data in parametersList"
        :key="data.name"
        v-if="data.icon"
      >
        <img :src="data.icon" alt />
        <div class="parameterName">{{data.name}}</div>
        <div class="parameterValue">{{data.value}}</div>
      </div>
    </DetailSwiper>
    <Activies></Activies>
    <div class="section">
      <div class="info"></div>
      <div class="adds"></div>
      <div class="serive"></div>
    </div>
    <div class="related" v-if="relatedRecommend">
      <h2>{{relatedRecommend.title}}</h2>
      <DetailSwiper
        :key="relatedRecommendData.length"
        perView="4"
        class="relatedSwiper"
        myClass="relatedSwiper"
      >
        <div
          class="swiper-slide thrid-swiper"
          v-for="data in relatedRecommendData"
          :key="data.product_id"
        >
          <img :src="data.image_url" />
          <div class="marketPrice">￥{{data.market_price}}</div>
          <div class="relatedName">{{data.name}}</div>
        </div>
      </DetailSwiper>
    </div>
    <div v-if="lzc">
      <div class="bg-img" v-for="(data,index) in lzc.sections" :key="index+'asd'">
        <img :src="data.body.img_url" alt />
      </div>
    </div>
  </div>
</template>

<script>
import SwiperDetail from "@/components/Swiper.vue";
import DetailSwiper from "@/views/Detail/DetailSwiper";
import Activies from "@/views/Detail/Activies";
import axios from "axios";

export default {
  data() {
    return {
      dataList: [],
      productName: null,
      productDesc: null,
      marketPrice: null,
      parametersList: [],
      relatedRecommend: null,
      relatedRecommendData: [],
      imgList: [],
      id: null,
      lzc: null
    };
  },
  components: {
    SwiperDetail,
    DetailSwiper,
    Activies
  },
  beforeMount() {
    this.$store.commit("NavHide", false);
    this.id = this.$route.params.commodity_id;
  },
  mounted() {
    console.log(this.id);
    axios({
      method: "post",
      url: "/v1/miproduct/view",
      data: `client_id=180100031051&channel_id=0&webp=1&commodity_id=${this.id}&pid=${this.id}`
    }).then(resp => {
      this.dataList = resp.data.data.goods_info;
      this.productName = resp.data.data.product_info.name;
      this.productDesc = resp.data.data.product_info.product_desc;
      this.marketPrice = resp.data.data.goods_info[0].market_price;
      this.parametersList = resp.data.data.goods_info[0].class_parameters.list;
      this.relatedRecommend = resp.data.data.related_recommend;
      if (resp.data.data.related_recommend.data) {
        this.relatedRecommendData = resp.data.data.related_recommend.data;
      } else {
        this.relatedRecommendData = [];
      }
      this.imgList = resp.data.data.goods_tpl_datas;

      for (var i in this.imgList) {
        this.lzc = this.imgList[i];
      }
    });
  },
  beforeDestroy() {
    this.$store.commit("NavHide", true);
  }
};
</script>

<style lang="scss" scoped>
.first-swiper {
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
.description {
  width: 3.4185rem;
  word-break: break-all;
  margin-left: 0.16575rem;
}
.sec-swiper {
  width: 0.8754rem;
  height: 0.5396rem;
  text-align: center;
  img {
    width: 0.2084rem !important;
    height: 0.2084rem !important;
    // margin: 0 0.291875rem;
  }
  .parameterName {
    font-size: 0.125067rem;
    color: #3c3c3c;
  }
  .parameterValue {
    font-size: 0.104222rem;
    color: #676767;
  }
}
.section {
  margin-top: 0.2rem;
  width: 3.4185rem;
  height: 1.1548rem;
  background: #e5e5e5;
  border-radius: 5.12px;
}
.related {
  height: 2rem;
}
.thrid-swiper {
  text-align: center;
}
.bg-img {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
