<template>
  <div>
    <header class="hd">
      <div class="user ui-flex align-center">
        <router-link to="/pass" tag="div"  class="img">
          <img src="../../public/img/avatar.png" />
        </router-link>
        <router-link to="/pass" tag="div"  class="name">登录/注册</router-link>
      </div>
    </header>
    <div class="b1 ui-flex align-center justify-space-between">
      <div class="cite">我的订单</div>
      <div class="span ui-flex align-center">
        <router-link to="/pass" tag="div" >
          全部订单
          <span class="iconfont">&#xe66e;</span>
        </router-link>
      </div>
    </div>
    <ul class="b2 ui-flex align-center justify-space-between">
      <li class="dfk">
       <div @click="ccc">
          <div class="iconfont"></div>
          <span>待付款</span>
       </div>
      </li>
      <li class="dah">
        <router-link to="/pass" tag="div" >
          <div class="iconfont"></div>
          <span>待收货</span>
          <!---->
        </router-link>
      </li>
      <li class="thx">
        <router-link to="/pass" tag="div" >
          <div class="iconfont"></div>
          <span>退换修</span>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-member">
        <router-link to="/mpointsmall" tag="div" activeClass="myactive">
          <cite>会员中心</cite>
        </router-link >
      </li>
      <li class="i-wallet">
        <router-link to="/pass" tag="div" >
          <cite>我的优惠</cite>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-service">
        <router-link to="/services" tag="div" >
          <cite>服务中心</cite>
        </router-link>
      </li>
      <li class="i-mihome">
        <router-link to="/Maplocation" tag="div" >
          <cite>小米之家</cite>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-fcode">
        <router-link to="/pass" tag="div" >
          <cite>F码通道</cite>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-setting">
        <router-link to="/pass" tag="div" >
          <cite>设置</cite>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods:{
    ccc(){
      // console.log(213)
      this.$router.push('/Pass')
    }
  }
};
</script>

<style lang="scss" scoped>
.items li:after {
  content: "";
  position: absolute;
  // right: 5.12px;
  right: 0.16rem;
  top: 50%;
  // width: 3.2px;
  width: 0.1rem;
  // height: 3.2px;
  height: 0.1rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
}
.items li:last-child {
  border-bottom-color: #fff;
}
.ui-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.hd {
  background: url(../../public/img/bg.png) center 0 #f37d0f;
  background-size: auto 100%;
  padding: 0.16667rem 0;
  .align-center {
    align-items: center;
    .img {
      margin-left: 0.15rem;
      width: 0.5rem;
      height: 0.5rem;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 100%;
      border: 3px solid hsla(0, 0%, 100%, 0.4);
      text-align: center;
      img {
        width: auto;
        height: 100%;
        margin: 0 auto;
      }
    }
    .name {
      margin-left: 0.1rem;
      color: #fff;
      font-size: 0.14rem;
      text-align: left;
    }
  }
}
.b1 {
  background-color: #fff;
  height: 0.4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  padding-right: 0.08rem;
  .cite {
    font-size: 0.14rem;
    padding: 0 0 0 0.16rem;
    color: rgba(0, 0, 0, 0.87);
  }
  .span {
    font-size: 0.12rem;
    color: rgba(0, 0, 0, 0.87);
    div {
      padding-left: 2.2rem;
    }
  }
  span {
    font-size: 0.12rem;
    color: rgba(0, 0, 0, 0.87);
  }
}
ul.b2 {
  // padding: 0 0.4rem;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  li {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-content: space-between;
    align-content: space-between;
    position: relative;
    padding: 0.2rem 0;
    flex: 1;
    div {
      width: 100%;

      div.iconfont {
        flex: 1;
        width: 0.24rem;
        height: 0.24rem;
        margin: 0 auto 0.1rem;
        background: url(../../public/img/b.png) no-repeat center 0;
        background-size: 100% auto;
      }
      span {
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
  .dah {
    flex: 1;
    div {
      .iconfont {
        background-image: url(../../public/img/c.png);
        flex: 1;
      }
    }
  }
  .thx {
    flex: 1;

    div {
      .iconfont {
        background-image: url(../../public/img/navf.png);
        flex: 1;
      }
    }
  }
}
.ui-line {
  height: 0.1rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.items {
  background: #fff;
  li.i-member {
    background-image: url(../../public/img/m.png);
    position: relative;
    color: rgba(0, 0, 0, 0.54);
    background: url(../../public/img/m.png) no-repeat 0.16rem;
    background-size: 0.24rem auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 0;
    list-style: none;
    > div {
      display: block;
      padding-right: 0.28rem;
      padding-left: 0.56rem;
      height: 0.52rem;
      display: box;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center;
      box-pack: justify;
      -webkit-box-pack: justify;
      color: currentColor;
      cite {
        font-size: 0.14rem;
        font-style: normal;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }

  li.i-wallet {
    background-image: url(../../public/img/l.png);
    position: relative;
    color: rgba(0, 0, 0, 0.54);
    background: url(../../public/img/l.png) no-repeat 0.16rem;
    background-size: 0.24rem auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 0;
    list-style: none;
    > div {
      display: block;
      padding-right: 0.28rem;
      padding-left: 0.56rem;
      height: 0.52rem;
      display: box;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center;
      box-pack: justify;
      -webkit-box-pack: justify;
      color: currentColor;
      cite {
        font-size: 0.14rem;
        font-style: normal;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
  li.i-service {
    background-image: url(../../public/img/xin.png);
    position: relative;
    color: rgba(0, 0, 0, 0.54);
    background: url(../../public/img/xin.png) no-repeat 0.16rem;
    background-size: 0.24rem auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 0;
    list-style: none;
    > div {
      display: block;
      padding-right: 0.28rem;
      padding-left: 0.56rem;
      height: 0.52rem;
      display: box;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center;
      box-pack: justify;
      -webkit-box-pack: justify;
      color: currentColor;
      cite {
        font-size: 0.14rem;
        font-style: normal;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
  li.i-mihome {
    background-image: url(../../public/img/fa.png);
    position: relative;
    color: rgba(0, 0, 0, 0.54);
    background: url(../../public/img/fa.png) no-repeat 0.16rem;
    background-size: 0.24rem auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 0;
    list-style: none;
    > div {
      display: block;
      padding-right: 0.28rem;
      padding-left: 0.56rem;
      height: 0.52rem;
      display: box;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center;
      box-pack: justify;
      -webkit-box-pack: justify;
      color: currentColor;
      cite {
        font-size: 0.14rem;
        font-style: normal;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
  li.i-fcode {
    background-image: url(../../public/img/ff.png);
    position: relative;
    color: rgba(0, 0, 0, 0.54);
    background: url(../../public/img/ff.png) no-repeat 0.16rem;
    background-size: 0.24rem auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 0;
    list-style: none;
    > div {
      display: block;
      padding-right: 0.28rem;
      padding-left: 0.56rem;
      height: 0.52rem;
      display: box;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center;
      box-pack: justify;
      -webkit-box-pack: justify;
      color: currentColor;
      cite {
        font-size: 0.14rem;
        font-style: normal;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
  li.i-setting {
    background-image: url(../../public/img/i.png);
    position: relative;
    color: rgba(0, 0, 0, 0.54);
    background: url(../../public/img/i.png) no-repeat 0.16rem;
    background-size: 0.24rem auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 0;
    list-style: none;
    > div {
      display: block;
      padding-right: 0.28rem;
      padding-left: 0.56rem;
      height: 0.52rem;
      display: box;
      display: -webkit-box;
      box-align: center;
      -webkit-box-align: center;
      box-pack: justify;
      -webkit-box-pack: justify;
      color: currentColor;
      cite {
        font-size: 0.14rem;
        font-style: normal;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
}
</style>