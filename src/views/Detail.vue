<template>
  <div>
    <Go></Go>
    <SwiperDetail v-if="dataList.length" :key="dataList.length">
      <div
        class="swiper-slide first-swiper"
        v-for="(data,index) in dataList[0].gallery_v3"
        :key="'sqm'+index"
      >
        <img :src="data.img_url" v-lazy="data.img_url"/>
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
        <img :src="data.icon" v-lazy="data.icon"/>
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
          <img :src="data.image_url" v-lazy="data.image_url"/>
          <div class="marketPrice">￥{{data.market_price}}</div>
          <div class="relatedName">{{data.name}}</div>
        </div>
      </DetailSwiper>
    </div>
    <div v-if="lzc">
      <div class="bg-img" v-for="(data,index) in lzc.sections" :key="index+'asd'">
        <img :src="data.body.img_url" v-lazy="data.body.img_url" v-if="data.body.img_url"/>
      </div>
    </div>
    <div class="float">
      <div class="home" @click="handleHome">
        <span class="iconfont">&#xe620;</span><br>
        <span>首页</span>
      </div>
      <div class="cart" @click="handleCart">
        <span class="iconfont">&#xe65f;</span><br>
        <span>购物车</span>
      </div>
      <a @click="handleClick(productName,marketPrice,)">加入购物车</a>
    </div>
    <Recommend></Recommend>
  </div>
</template>

<script>
import SwiperDetail from "@/components/Swiper.vue";
import DetailSwiper from "@/views/Detail/DetailSwiper";
import Activies from "@/views/Detail/Activies";
import Go from '@/components/Go2-1';
import Recommend from '@/components/Recommend';
import axios from "axios";
import { Lazyload } from "mint-ui";

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
      lzc: null,
    }
  },
  components: {
    SwiperDetail,
    DetailSwiper,
    Activies,
    Go,
    Recommend,
  },
  methods:{
    handleHome(){
      this.$router.push('/Best')
    },
    handleCart(){
      this.$router.push('/Cart')
    },
    handleClick(name,price){
      var toCart = {
        name,
        price,
        number:1,
        id:this.id,
        img_url:this.dataList[0].img_url
      }
       this.$store.commit('addshop',toCart)
      // console.log(toCart)
    }
  },
  beforeMount() {
    this.$store.commit("NavHide", false);
    this.id = this.$route.params.commodity_id;
  },
  mounted() {
    // console.log(this.id);
    axios({
      method: "post",
      url: "/v1/miproduct/view",
      data: `client_id=180100031051&channel_id=0&webp=1&commodity_id=${this.id}&pid=${this.id}`
    }).then(resp => {
      this.dataList = resp.data.data.goods_info;

// if(!dataList.length){

// }




      this.productName = resp.data.data.product_info.name;
      this.productDesc = resp.data.data.product_info.product_desc;
      this.marketPrice = resp.data.data.goods_info[0].market_price;
      if (resp.data.data.goods_info[0].class_parameters.list) {
        this.parametersList =
          resp.data.data.goods_info[0].class_parameters.list;
      } else {
        this.parametersList = [];
      }
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
      console.log(resp.data.data);
      console.log(resp.data.data.goods_info[0]);
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
  margin: 0.2rem 0 0 .16rem;
  width: 3.4185rem;
  height: 1.1548rem;
  background: #e5e5e5;
  border-radius: .1rem;

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
.float{
  width: 3.5853rem;
  height: .6253rem;
  position: fixed;
  z-index: 999;
  left: .09rem;
  bottom: .1rem;
  display: flex;
  background: rgba(255,255,255,0.96);
  border-radius: .1rem;
  text-align: center;
  font-size: .12rem;
  .home{
    height: 100%;
    width: .27rem;
    margin: .1rem 0 0 .26rem;
  }
  .cart{
    height: 100%;
    width: .36rem;
    margin: .1rem 0 0 .26rem;
  }
  a{
    margin-left: .80844rem;
    margin-top: .1rem;
    width: 1.2295rem;
    height: .3335rem;
    line-height: .3335rem;
    background: #ff6700;
    border-radius:1.2295rem;
    font-size: .14rem;
    text-decoration: none;
    color: #fff;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 
                   0 4px 5px rgba(0,0,0,.14),
                  0 1px 10px rgba(0,0,0,.12);
  }
}
</style>
