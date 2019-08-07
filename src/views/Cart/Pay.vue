<template>
  <div :class="isFixed?'fixed':''" id="sj">
    <div class="HeaderDown" ref="myswiper1">
      <span class="iconfont" @click="back">&#xe66d;</span>
      <p>
        <span>用户结算</span>
      </p>
    </div>

    <div class="dizhi">
      <p>添加收货地址</p>
      <span class="iconfont">&#xe66e;</span>
    </div>

    <ul class="zhifu">
      <li>
        <div>
          <img src="https://s1.mi.com/m/images/m/pay_zfb2.png" />
          <span>支付宝</span>
        </div>
        <div :class="isbianse === 1?`red yuan iconfont`:'yuan iconfont'" @click="check1">&#xe65d;</div>
      </li>
      <li>
        <div>
          <img src="https://s1.mi.com/m/images/m/pay_wx.png" />
          <span>微信</span>
        </div>
        <div :class="isbianse === 2?`red yuan iconfont`:'yuan iconfont'" @click="check2">&#xe65d;</div>
      </li>
      <li>
        <div>
          <img src="https://s1.mi.com/m/images/m/micash_wap.png" />
          <span>小米钱包</span>
        </div>
        <div :class="isbianse === 3?`red yuan iconfont`:'yuan iconfont'" @click="check3">&#xe65d;</div>
      </li>
      <li>
        <div>
          <img src="https://s1.mi.com/m/images/m/pay_yl1.png" />
          <span>银联支付</span>
        </div>
        <div :class="isbianse === 4?`red yuan iconfont`:'yuan iconfont'" @click="check4">&#xe65d;</div>
      </li>
      <li>
        <div>
          <img src="https://s1.mi.com/m/images/m/pay_yzf.png" />
          <span>翼支付</span>
        </div>
        <div :class="isbianse === 5?`red yuan iconfont`:'yuan iconfont'" @click="check5">&#xe65d;</div>
      </li>
      <li>
        <div>
          <img src="https://s1.mi.com/m/images/m/pay_mifinanceinstal.png" />
          <span>小米分期</span>
        </div>
        <div :class="isbianse === 6?`red yuan iconfont`:'yuan iconfont'" @click="check6">&#xe65d;</div>
      </li>
      <li>
        <div>
          <img src="https://s1.mi.com/m/images/m/pay_antinstalment.png" />
          <span>花呗分期</span>
        </div>
        <div :class="isbianse === 7?`red yuan iconfont`:'yuan iconfont'" @click="check7">&#xe65d;</div>
      </li>
      <li class="shouqi">
        <p class="iconfont">收起其他支付方式&#xe694;</p>
      </li>
    </ul>

    <ul class="detail">
      <li>
        <div>
          <strong>运费</strong>
          <span>包邮</span>
        </div>
      </li>
      <li>
        <div>
          <strong>电子发票</strong>
          <span class="iconfont">&#xe66a;</span>
        </div>
      </li>
      <li>
        <div>
          <strong>优惠券</strong>
          <span class="iconfont">&#xe66a;</span>
        </div>
      </li>
      <li></li>
    </ul>

    <div id="getsum">
      <div class="price">
        <span>合计：{{this.$route.query.sum}}</span>
        <strong></strong>
      </div>

      <div class="payall" @click="handlePay()">去付款</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      isbianse: 1,
    };
  },
  methods: {

      handlePay(){
          this.$router.push('/Shoukuan')
      },

    check1() {
      this.isbianse = 1;

    },

    check2() {
      this.isbianse = 2;
    },

    check3() {
      this.isbianse = 3;
    },

    check4() {
      this.isbianse = 4;
    },

    check5() {
      this.isbianse = 5;
    },

    check6() {
      this.isbianse = 6;
    },

    check7() {
      this.isbianse = 7;
    },

    Scroll() {
      if (
        document.documentElement.scrollTop >= this.$refs.myswiper1.offsetHeight
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },

    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    window.onscroll = this.Scroll;
  },
  beforeDestroy() {
    window.onscroll = null;
  }
};
</script>

<style lang="scss" scoped>
#sj {
  background-color: #f2f2f2;
}

.HeaderDown {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f2f2f2;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.786rem;

    span {
      font-size: 0.16rem;
      margin-right: 0.6rem;
    }
  }
  span {
    font-size: 0.26rem;
    color: #777;
  }
}

.fixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}

.dizhi {
  display: flex;
  height: 0.5145rem;
  width: 100%;
  background: url("../../../public/img/bd1.png") 0 0 repeat-x;
  background-size: 8%;
  border-bottom: 0.01rem solid #e1e1e1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  p {
    width: 80%;
    font-size: 0.14rem;
    font-weight: bolder;
  }

  span {
    font-size: 0.24rem;
  }
}

.zhifu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.1rem;
  width: 100%;
  border-bottom: 0.01rem solid #e1e1e1;
  border-top: 0.01rem solid #e1e1e1;
  flex-direction: column;
  background-color: #fff;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 0.4681rem;
    border-bottom: 0.01rem solid #e1e1e1;
    div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 0.28rem;
        width: 0.3rem;
      }
      span {
        font-size: 0.14rem;
        display: block;
        margin-left: 0.1rem;
      }
    }

    div.red {
      background: #ff6700;
    }

    .yuan {
      border-radius: 50%;
      height: 0.2rem;
      width: 0.2rem;
      border: 0.01rem solid #e1e1e1;
      text-align: center;
      line-height: 0.2rem;
      color: white;
      font-weight: bolder;
    }
  }

    .shouqi{
        display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-size:.14rem;
        color:#e1e1e1;
    }
    }

}

#getsum {
  height: 0.5208rem;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  border-top: 0.02rem solid #f2f2f2;
  z-index: 8888;

  .price {
    flex: 1;
    background-color: #fff;
    color: #ff6700;
    text-align: center;
    height: 0.5208rem;
    line-height: 0.5208rem;
    font-size: 0.16rem;
  }
  .payall {
    flex: 1;
    background-color: #ff6700;
    color: #fff7f2;
    text-align: center;
    height: 0.5208rem;
    line-height: 0.5208rem;
    font-size: 0.16rem;
  }
}

.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.1rem;
  width: 100%;
  border-bottom: 0.01rem solid #e1e1e1;
  border-top: 0.01rem solid #e1e1e1;
  flex-direction: column;
  background-color: #fff;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 0.3681rem;
    border-bottom: 0.01rem solid #e1e1e1;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      }

  }
}



</style>
