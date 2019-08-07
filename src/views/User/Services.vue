<template>
  <div>
    <HeaderDown class="go2"><span>服务</span></HeaderDown>
    <div class="servicesNav">
      <h4>自助服务</h4>
      <div v-for="(data,index) in iconList" :key="index">
        <div>
          <img :src="data.img_url" alt />
        </div>
      </div>
    </div>
    <div class="online-customer-service">
      <div class="warp">
        <div>
          <img src="../../../public/img/icon.png" />
          <span>7x24小时在线客服</span>
        </div>
      </div>
      <div class="tel">
        <ul>
          <li>
            <div>
              <img src="../../../public/img/blue.png" />
              <h3>商城热线</h3>
              <p class="hl">400-100-5678</p>
              <p>8:00 - 18:00</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/lv.png" />
              <h3>金融热线</h3>
              <p class="hl">400-100-3399</p>
              <p>9:00 - 19:00</p>
            </div>
          </li>
          <li>
            <div>
              <img src="../../../public/img/hong.png" />
              <h3>小米移动</h3>
              <p class="hl">400-922-3838</p>
              <p>8:00 - 18:00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderDown from '@/components/HeaderDown.vue'
import axios from 'axios'
export default {
  beforeMount () {
    this.$store.commit('NavHide', false)
  },
  beforeDestroy () {
    this.$store.commit('NavHide', true)
  },
  data () {
    return {
      iconList: []
    }
  },
  mounted () {
    axios({
      method: 'post',
      url: '/v1/service/list',
      data: 'client_id=180100031051&channel_id=0&webp=1'
    }).then(resp => {
      console.log(resp.data)
      this.iconList = resp.data.data.service_icon_list.data_json
    })
  },
  components: { HeaderDown },
  methods: {}
}
</script>

<style lang="scss" scoped>
.go2{
  display: flex;
  left: .3rem;
  top: .35rem
}
.servicesNav {
  border-bottom: 0.08rem solid #f6f6f6;
  h4 {
    margin: 0;
    margin-left: 0.16rem;
    font-size: 0.12rem;
    line-height: 0.36rem;
    border-bottom: 1px solid #f6f6f6;
    color: #919191;
    font-weight: 400;
    text-align: left;
  }
  div {
    width: 100%;
    display: inline;
    div {
      width: 25%;
      display: inline-block;
      img {
        height: 0.75rem;
        width: auto;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
.online-customer-service {
  text-align: center;
  .warp {
    border-bottom: 1px solid #f6f6f6;
    div {
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      padding: 0.15rem 0;
      font-size: 0.11rem;
      color: #333;
      cursor: pointer;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
      span {
        margin-left: 0.14rem;
        align-self: center;
      }
    }
  }
  .tel {
    padding: 0.15rem 0;
    ul {
      overflow: hidden;
      list-style: none;
      li {
        float: left;
        width: 33.333333333333336%;
        div {
          display: block;
          img {
            width: 0.31rem;
            height: 0.31rem;
          }
          h3 {
            font-size: 0.12;
            font-weight: 400;
            margin: 0.1 0 0;
            color: #333;
            line-height: 1.5em;
          }
          .hl {
            color: #ff6700;
          }
          p {
            font-size: 0.1rem;
            color: #969696;
            line-height: 1.5em;
          }
        }
      }
    }
  }
}
</style>
