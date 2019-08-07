<template>
  <div>
    <div class="btn" @click="SS">
      <div>
        <span class="iconfont">&#xe66f;</span>
      </div>
    </div>
    <HeaderDown>
      <input
        type="text"
        name="sousuo"
        class="iconfont"
        :placeholder="icon"
        v-model="input"
        @input="sousuo"
      />
      <ul v-if="searchList" id="lzc_search">
        <li
          v-for="(data,index) in searchList"
          :key="index+'ss'"
          @click="tosearchlist(data.title)"
        >{{data.title}}</li>
      </ul>
    </HeaderDown>
    <div class="search_title">
      <div>热门搜索</div>
    </div>
    <div class="search_img" v-if="src">
      <img :src="this.src" alt />
    </div>
    <div class="search_key">
      <div
        v-for="(data,index ) in dataList"
        :key="data+index+'ccc'"
        :style="`background:${data.back_n};color:${data.font_n};border:0.01rem solid ${data.border_n}`"
        @click="toList(data.word)"
      >
        <div>{{data.word}}</div>
      </div>
    </div>
    <div class="search_title">
      <div>常用分类</div>
    </div>
    <div class="search_list">
      <div v-for="item in shopList" :key="item.name">
        <div>{{item.name}}</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import HeaderDown from '@/components/HeaderDown.vue'
import axios from 'axios'

export default {
  data () {
    return {
      icon: `\ue66f  搜索商品名称 `,
      src: null,
      dataList: [],
      shopList: [],
      searchList: null,
      input: ``
    }
  },
  methods: {
    toList (el) {
      this.$router.push(`/About/list${el}`)
    },
    tosearchlist (data) {
      // console.log(data);
      this.$router.push(`/About/list${data}`)
    },
    SS () {
      this.$router.push(`/About/list${this.input}`)
    },
    sousuo () {
      this.searchList = null
      axios({
        method: 'post',
        url: '/v1/hisearch/suggestion_v3',
        data: `client_id=180100031051&channel_id=0&webp=1&query=${this.input}`
      }).then(resp => {
        console.log(resp.data)
        console.log(resp.data.data)
        if (
          resp.data.data == 'null' ||
          resp.data.data == null ||
          resp.data.data == 'undefined' ||
          resp.data.data.data == 'undefined' ||
          resp.data.data.list == undefined
        ) {

        } else {
          this.searchList = resp.data.data.list
          console.log(this.searchList)
        }
      })
    }
  },
  beforeMount () {
    this.$store.commit('NavHide', false)
    Indicator.open('加载中...')
  },

  mounted () {
    axios({
      method: 'post',
      url: '/v1/hisearch/se_default',
      data: 'client_id=180100031051&channel_id=0&webp=1'
    }).then(resp => {
      // console.log(resp.data.data);
      this.src = resp.data.data.ad_list[0].body.items[0].img_url

      this.shopList = resp.data.data.hot_class.filter((el, index) => {
        return index < 13
      })
      this.dataList = resp.data.data.keywords
      setTimeout(() => {
        Indicator.close()
      }, 300)
      // console.log(this.shopList);
    })
  },

  beforeDestroy () {
    this.$store.commit('NavShow', true)
  },
  components: {
    HeaderDown
  }
}
</script>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
img {
  display: block;
}
input {
  width: 100%;
  border-radius: 1%;
  border: solid #ccc 0.01rem;
  height: 0.3rem;
  width: 2.7rem;
  font-size: 0.175rem;
}
.search_title {
  height: 0.41rem;
  width: 100%;
  line-height: 0.41rem;
  padding: 0 0.15625rem;
  font-size: 0.14rem;
}
.search_img {
  width: 100%;
  height: 1.0416rem;
  img {
    width: 100%;
    height: 1.0416rem;
  }
}
.search_key {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.05208rem;

  > div {
    padding: 0.073rem 0.10417rem;
    margin: 0.05208rem;
  }
}
.search_list {
  height: 0.625rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  padding-left: 0.166667rem;
  > div {
    margin: 0 0.07813rem 0.05208rem 0;
    padding: 0.07813rem;
    background: #f5f5f5;
    color: rgba(0, 0, 0, 0.54);
  }
}
.btn {
  position: fixed;
  right: 0.1rem;
  top: 0.1rem;
  height: 0.29rem;
  width: 0.26rem;
  background: #f5f5f5;
  div {
    border: 0 transparent solid;
    background: #f5f5f5;

    span {
      display: block;
      height: 0.29rem;
      width: 0.26rem;
      font-size: 0.26rem;
      background: #f5f5f5;
    }
  }
}
#lzc_search {
  position: fixed;
  top: 0.52rem;
  left: 0;
  background: rgba(0, 0, 0, 0.54);
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  border-bottom: 0.03rem solid black;
  li {
    padding-left: 0.25rem;
    box-sizing: border-box;
    width: 100%;
    height: 0.4rem;
    background: white;
    line-height: 0.4rem;
    font-size: 0.18rem;
    border-bottom: 0.01rem solid #ccc;
  }
}
</style>
