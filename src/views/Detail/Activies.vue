<template>
  <div class="sell">
    <div v-for="(data,index) in dataList" :key="index" @click="handleClick" class="pad">
      <span class="type">{{data.type_desc}}</span>
      <span class="title">{{data.title}}</span>
    </div>
    <div class="cover" v-if="isShow"></div>
    <div class="popup" v-if="isShow">
      <div class="disapper" @click="handleDisapper">X</div>
      <div v-for="(data,index) in dataList" :key="index" class="con">
        <span class="popup-type">{{data.type_desc}}</span>
        <span class="popup-title">{{data.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dataList: [],
      isShow: false
    };
  },
  methods: {
    handleClick() {
      this.isShow = !this.isShow;
    },
    handleDisapper() {
      this.isShow = false;
    }
  },
  mounted() {
    axios({
      method: "post",
      url: "/v1/miproduct/activity_info",
      data:
        "client_id=180100031051&channel_id=0&webp=1&commodity_ids=1191900041%2C1191900050%2C1191900053%2C1191900040%2C1191900039%2C1191900049%2C1191900048%2C1191900051%2C1191900052%2C1191900047%2C1191900045%2C1191900046&goods_id=2191900023%2C2191900032%2C2191900035%2C2191900022%2C2191900021%2C2191900031%2C2191900030%2C2191900033%2C2191900034%2C2191900029%2C2191900027%2C2191900028&is_batched=false"
    }).then(resp => {
      // console.log(resp.data.data.activies[0].canJoinActs)
      this.dataList = resp.data.data.activies[0].canJoinActs;
    });
  }
};
</script>

<style lang="scss" scoped>
.sell {
  .pad {
    margin-bottom: 0.1rem;
  }
  margin: 0.15rem 0 0 0.02rem;
  height: 0.6054rem;
  width: 3.4185rem;
  background: #e5e5e5;
  border-radius: 0.1rem;
  padding: 0.15rem;
  .type {
    border: 1px solid #f56600;
    color: #f56600;
    margin: 0.2rem 0.05rem 0.2rem 0.35rem;
    padding: 0rem;
  }
  .title {
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.87);
  }
}
.cover {
  height: 6.67rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.popup {
  width: 100%;
  display: block !important;
  height: 5.1694rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10001;
  border-radius: 0.2rem 0.2rem 0 0rem;
  .disapper {
    text-align: right;
    font-size: 0.2rem;
    color: #111;
    margin: 0.2rem 0.2rem 0 0;
  }
  .con {
    margin-bottom: 0.3rem;
    .popup-type {
      color: #f56600;
      margin: 0.2rem 0.05rem 0.2rem 0.35rem;
      padding: 0rem;
    }
    .popup-title {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
</style>
