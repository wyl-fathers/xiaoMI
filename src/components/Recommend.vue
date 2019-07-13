<template>
  <div class="cartlist">
    <div class="cnxh">
        <h1 v-if="imgList">
          {{imgList.title}}
        </h1>
    </div>

    <ul class="nmb">
      <li v-for="data in dataList" :key="data.path" @click="handledetail(data.path)">
        <img :src="data.image_url" />
        <div class="good">
          <div class="name">{{data.name}}</div>
          <div class="price">
            ￥{{data.price}}
            <span
              v-show="! (data.price === data.market_price)"
            >￥{{data.market_price}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imgList: null,
      dataList: []
    };
  },

  methods: {
    handlehome() {
      this.$router.push("/Best");
    },
    handledetail() {
      console.log(1111);
      this.$router.push("");
    }
  },

 beforeMount() {
    this.id = this.$route.params.commodity_id;
  },

  mounted() {
    axios({
      method: "post",
      url: "/v1/miproduct/recommend",
      data:
        `client_id=180100031051&channel_id=0&webp=1&product_id=${this.id}`
    }).then(res => {
      this.imgList = res.data.data
      this.dataList = res.data.data.recommend_list;
      console.log('这数据拿不回来啊',this.dataList);
    });
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
}
.cartlist {
  background-color: #f2f2f2;
  width: 100%;
  height: 0.6181rem;

  .box {
    margin: 0 auto;
    display: flex;
    height: 0.6181rem;
    // line-height: 0.6181rem;
    // width: 2.6rem;
    color: #777777;
    justify-content: center;
    align-items: center;
    #jiada {
      font-size: 0.3rem;
    }
    #qgg {
      border: 0.01rem solid #777777;
      margin-left: 0.1rem;
      height: 0.25rem;
      width: 0.44rem;
      color: black;
      line-height: 0.25rem;
      display: block;
    }
  }
}

.cnxh {
  width: 100%;
  height: 0.625rem;
  text-align: center;
  h1{
    height: 0.625rem;
    line-height: 0.625rem;
    color: #ff6700;
  }
}

.nmb {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1.5rem;
  li {
    box-sizing: border-box;
    padding: 1% 0;
    width: 49%;
    height: 2.54rem;
    img {
      width: 1.8563rem;
      height: 1.8563rem;
      box-sizing: border-box;
    }
    .good {
      width: 100%;
      height: 0.41rem;
      .name {
        text-indent: 0.15rem;
        font-size: 0.14rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0.05rem 0;
      }
      .price {
        text-indent: 0.14rem;
        font-size: 0.18rem;
        color: #ff6700;
        //   margin-left:0.1rem;
        span {
          margin-left: 0.05rem;
          color: #777777;
          font-size: 0.13rem;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>

