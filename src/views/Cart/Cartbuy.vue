<template>
  <div class="cartbuy">
    <div class="goods" v-for="(data,index) in datalist" :key="data.id">
      <div class="choose"></div>
      <img />
      <div class="gright">
        <div class="name">{{data.name}}</div>
        <span>售价：  {{data.price}}元</span>
        <div class="num">
          <div class="del" @click="handleDelClick(data)">-</div>
          <div class="n">{{data.number}}</div>
          <div class="add" @click="data.number++">+</div>
          <div class="iconfont delall" @click="handledelAll(index)">&#xe663;</div>
        </div>
      </div>
    </div>

    <div class="sum">
      <div class="price">
        <span>金额：</span>
        <strong>{{}}</strong>
      </div>
      <div class="gohome">继续购物</div>
      <div class="getsum" @click="handlePay()">去结算</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      datalist: []
    };
  },
  mounted() {
    this.datalist =this.$store.state.goodslist
  },
  methods: {
    handleDelClick(data) {
      data.number--;
      if (data.number === 0) {
        data.number = 1;
      }
    },

    handledelAll(index) {
      console.log(index);
      console.log(this.datalist);
      this.datalist.splice(index, 1)
      this.$store.commit('delshop',index)
      this.datalist.length?this.$store.commit('changdu',false):this.$store.commit('changdu',true);

    },
handlePay(){
    this.$router.push("/Pay");
}

  }

  //   mounted() {
  //     axios({
  //       method: "post",
  //       url: "v1/cart/index",
  //       data: "client_id=180100031051&channel_id=0&webp=1&access_code="
  //     }).then(res => {
  //       console.log(res.data);
  //     });
  //   }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

.cartbuy{
    background-color:#f5f5f5;
}

.goods {
  width: 100%;
  height: 1.1875rem;
  margin-bottom: 0.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#fff;
  .choose {
    width: 0.3125rem;
    height: 0.9375rem;
    background-color: black;
  }
  img {
    height: 0.915rem;
    width: 0.915rem;
  }
  .gright {
    width: 2.3958rem;
    height: 0.9025rem;
    padding-left: 0.1rem;

    .name {
      width: 2.2395rem;
      height: 0.32rem;
      font-size: 0.15rem;
      line-height: 0.32rem;
      color: #666;
      text-align: left;
    }
    span {
      width: 2.3958rem;
      height: 0.125rem;
      padding: 0.0625rem 0;
      font-size: 0.12rem;
      color: #999;
      margin-bottom: 0.06rem;
      text-align: left;
    }

    .num {
      height: 0.3325rem;
      width: 2.3958rem;
      margin-top: 0.08rem;

      .add {
        height: 0.3125rem;
        width: 0.3125rem;
        border: 0.01rem solid #ccc;
        float: left;
        background-color:#f5f5f5;
        font-size:0.30rem;
        text-align:center;
        line-height:0.28rem;
      }
      .n {
        height: 0.3125rem;
        width: 0.3125rem;
        border-top: 0.01rem solid #ccc;
        border-bottom: 0.01rem solid #ccc;
        float: left;
        text-align: center;
        line-height: 0.24rem;
        font-size: 0.2rem;
      }
      .del {
        height: 0.3125rem;
        width: 0.3125rem;
        border: 0.01rem solid #ccc;
        float: left;
        background-color:#f5f5f5;
        font-size:0.31rem;
        text-align:center;
        line-height:0.26rem;
      }

      .delall {
        height: 0.3125rem;
        width: 0.3125rem;
        float: right;
        font-size: 0.25rem;
        color: #666;
        margin-right: 0.1rem;
        padding-top: 0.04rem;
      }
    }
  }
}

.sum {
  height: 0.5208rem;
  width: 100%;
  display: flex;
  position:fixed;
  bottom:0;
  .price {
    flex: 1;
        background-color:#fff;

  }
  .gohome {
    flex: 1;
    background-color: #f4f4f4;
    text-align: center;
    height: 0.5208rem;
    line-height: 0.5208rem;
    font-size: 0.16rem;
  }
  .getsum {
    flex: 1;
    background-color: #ff6700;
    color: #fff7f2;
    text-align: center;
    height: 0.5208rem;
    line-height: 0.5208rem;
    font-size: 0.16rem;
  }
}
</style>


