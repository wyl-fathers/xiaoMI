<template>
  <div>
    <HeaderDown>
      <div class="btn iconfont" @click="SS">&#xe66f;</div>
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
    <div
      class="search_shop_father"
      v-for="(data,index) in dataList"
      :class="data.view_type"
      :key="'shop_'+index"
      @click="toDetail(data.body.product_id)"
    >
      <div v-if="(data.view_type==='view_search_product')" class="search_nom">
        <div class="search_flex_left">
          <img :src="data.body.image" alt />
        </div>
        <div class="search_flex_right">
          <p class="search_shop_name">{{data.body.name}}</p>
          <p v-html="data.body.desc" class="search_shop_desc"></p>
          <p class="search_shop_price">￥{{data.body.market_price}}</p>
        </div>
      </div>

      <div v-if="(data.view_type==='view_recommend_class')" class="search_nav">
        <div class="search_title">
          <p class="search_shop_title">{{data.body.recommend_title}}</p>
        </div>
        <div class="flex_father">
          <div
            class="search_box"
            v-for="(item,index) in data.body.recommend_class"
            :key="index+'shop_search'"
            @click="check(item.name)"
          >
            <div class="search_body">
              <h5 class="search_shop_body">{{item.name}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cnxh></Cnxh>
  </div>
</template>

<script>
import axios from "axios";
import Cnxh from "@/components/Cnxh.vue";
import HeaderDown from "@/components/HeaderDown.vue";

export default {
  data() {
    return {
      icon: `\ue66f  搜索商品名称 `,
      searchname: null,
      dataList: null,
      input: ``,
      searchList: null
    };
  },
  methods: {
    toDetail(el) {
      this.$router.push(`/Detail/${el}`);
    },

    check(el) {
      this.$router.push(`/About/list${el}`);
      location.reload();
      // this.redirect(`/About/list${el}`);
    },
    sousuo() {
      this.searchList = null;
      axios({
        method: "post",
        url: "/v1/hisearch/suggestion_v3",
        data: `client_id=180100031051&channel_id=0&webp=1&query=${this.input}`
      }).then(resp => {
        console.log(resp.data);
        console.log(resp.data.data);
        if (
          resp.data.data == "null" ||
          resp.data.data == null ||
          resp.data.data == "undefined" ||
          resp.data.data.data == "undefined" ||
          resp.data.data.list == undefined
        ) {
          return;
        } else {
          this.searchList = resp.data.data.list;
          console.log(this.searchList);
        }
      });
    },
    tosearchlist(data) {
      // console.log(data);
      this.$router.push(`/About/list${data}`);
      location.reload();
    },
    SS() {
      console.log(this.input);
      console.log(11111111);
    }
  },
  mounted() {
    this.searchname = this.$route.params.searchname;
    axios({
      method: "post",
      url: "/v1/hisearch/query_v3",
      data: `client_id=180100031051&channel_id=0&webp=1&query=${this.searchname}&version=2&page_index=1&page_size=20`
    }).then(resp => {
      console.log(resp.data.data.list_v2);
      this.dataList = resp.data.data.list_v2;
    });
  },
  components: {
    HeaderDown,
    Cnxh
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
input {
  width: 100%;
  border-radius: 1%;
  border: solid #ccc 0.01rem;
  height: 0.3rem;
  width: 2.7rem;
  font-size: 0.175rem;
}
img {
  display: inline-block;
}

.search_shop_father {
  width: 100%;
  height: 1.61rem;
  .search_nom {
    height: 1.61rem;

    border-bottom: 0.01rem solid #ccc;
    padding: 0.14583rem 0.14583rem 0.14583rem 0;
    display: flex;
    .search_flex_left {
      img {
        height: 1.3177rem;
        width: 1.3177rem;
      }
    }
    .search_flex_right {
      margin-left: 0.12rem;
      .search_shop_name {
        height: 0.19rem;
        font-size: 0.18rem;
        margin-bottom: 12.5%;
      }
      .search_shop_desc {
        height: 0.3rem;
        white-space: pre-line;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
      }
      .search_shop_price {
        color: #ff6700;
        font-size: 0.2rem;
        padding: 10% 0;
      }
    }
  }
  .search_nav {
    display: flex;
    flex-direction: column;
  }
}
.view_search_class_tip {
  display: none;
}

.flex_father {
  display: flex;
  flex-wrap: wrap;

  align-items: center; //   padding: 0 1%;
  .search_box {
    width: 25%;
    height: 0.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // display: flex;

    h5.search_shop_body {
      text-align: center;
      line-height: 0.3rem;
      background: #f5f5f5;
      height: 0.3rem;
      width: 0.79rem;
      border-radius: 5%;
      font-weight: normal;
    }
  }
}
.search_shop_title {
  line-height: 0.5rem;
  font-size: 0.16rem;
  height: 0.5rem;
  padding-left: 0.2rem;
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
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.29rem;
  position: absolute;
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

HeaderDown {
  position: relative;
}
</style>