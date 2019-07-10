<template>
  <div>
    <div>
      <mt-index-list ref="scrollList" id="zlzc" :height="aaa">
        <mt-index-section
          :index="data.category_name"
          v-for="(data,indexc) in dataList"
          :key="indexc"
          style="text-align:center;"
        >
          <mt-cell>
            <!-- //:title="data.category_name" -->
            <div
              v-if="item.body.items"
              v-for="(item,index) in data.category_list"
              :key="item+index"
              :class="'div_father'+indexc+index"
            >
              <div
                v-if="ccc.img_url"
                v-for=" ( ccc, index1 ) in item.body.items"
                :key="ccc.action.path"
                :class="'div_'+indexc+index+index1+' '+'lzcOwn'"
                @click="check(ccc)"
              >
                <img :src="ccc.img_url" :class="'box'+index+'img_'+index1" v-lazy="ccc.img_url" />
                <p v-if="ccc.product_name">{{ccc.product_name}}</p>
              </div>
            </div>
          </mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { IndexList, IndexSection, Lazyload } from "mint-ui";

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
  data() {
    return {
      nameList: [],
      dataList: [],
      aaa: 0
    };
  },
  methods: {
    check(data) {
      this.$router.push(`/Detail/${data.action.path}`);
    }
  },
  mounted() {
    axios({
      method: "post",
      url: "/v1/home/category_v2",
      data: "client_id=180100031051&channel_id=0&webp=1"
    }).then(resp => {
      console.log(resp.data);
      this.dataList = resp.data.data;
      console.log(resp.data.data[1].category_list[1].body);
      //   console.log(this.$refs.scrollList);

      // 写定Countent的高度
      this.$refs.scrollList.$el.style.height =
        document.documentElement.clientHeight / 100 - 1.02 + "rem";
      this.aaa =
        (document.documentElement.clientHeight / 100 - 1.02) *
        document.documentElement.style.fontSize.substring(0, 3);
      //   console.log(document.documentElement.style.fontSize.substring(0, 3));
      //   console.log(
      //     (document.documentElement.clientHeight / 100 - 2) *
      //       document.documentElement.style.fontSize.substring(0, 3)
      //   );
    });
  }
};
</script>

<style lang="scss" >
.mint-indexsection-index {
  font-size: 0.16rem;
}
ul.mint-indexlist-content {
  margin-left: 0.76rem;
  margin-right: 0 !important;
}
div.mint-indexlist-nav {
  overflow: scroll;
  // position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: initial;
  border-right: 0.01rem #ddd solid;
  //   height: 543.25px !important;
  ul {
    height: 5.65rem;
    overflow: scroll;
    li {
      // height: 0.6rem !important;
      padding: 0.1rem 0.06rem;
      font-size: 0.16rem;
    }
    li:hover {
      color: #f60;
      // font-size: 0.17rem;
    }
  }
}

#zlzc {
  overflow: scroll;
}
.mint-cell-wrapper {
  display: flex;
  flex-direction: column;
}

img {
  height: 0.52rem;
  width: 0.52rem;
}

.box0img_0 {
  width: 100%;
  height: 1.04rem;
}

.mint-cell-value {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    // border: 1px solid red;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 33.33%;
      // background: yellow;
    }
  }
}

// .div_father0 {
//   width: 100%;
//   > div {
//     width: 100%;
//     img {
//       width: 100%;
//     }
//   }
// }
.div_father00,
.div_father02,
.div_father04,
.div_father06,
.div_father28,
.div_father11,
.div_father13,
.div_father21,
.div_father23,
.div_father25,
.div_father27,
.div_father28,
.div_father31,
.div_father32,
.div_father34,
.div_father36,
.div_father38,
.div_father61,
.div_father62,
.div_father42,
.div_father51,
.div_father52,
.div_father71,
.div_father81,
.div_father83,
.div_father91,
.div_father93,
.div_father94,
.div_father101,
.div_father112,
.div_father121,
.div_father123,
.div_father124,
.div_father131,
.div_father132,
.div_father134,
.div_father136,
.div_father141,
.div_father143,
.div_father151,
.div_father153,
.div_father154,
.div_father171,
.div_father172,
.div_father161,
.div_father181,
.div_father191,
.div_father193,
.div_father194,
.div_father201,
.div_father202,
.div_father210,
.div_father211,
.div_father221,
.div_father231,
.div_father241,
.div_father251,
.div_father261,
.div_father103,
.div_father105,
.div_father315,
.div_father41,
.div_father44 {
  width: 100%;
  height: auto;
}

.div_father00 {
  div.div_000 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father28 {
  div.div_280 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father32 {
  div.div_320 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father42 {
  div.div_420 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father52 {
  div.div_520 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father62 {
  div.div_620 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father94 {
  div.div_940 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father106 {
  div.div_1060 {
    padding: 0;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father112 {
  div.div_1120 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father124 {
  div.div_1240 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father132 {
  div.div_1320 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father154 {
  div.div_1540 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father172 {
  div.div_1720 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father181 {
  div.div_1720 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father194 {
  div.div_1940 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.div_father202 {
  div.div_2020 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}

.lzcOwn {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.1rem;
  p {
    padding: 0.1rem 0;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.13rem;
    text-align: center;
  }
}
// li.mint-indexlist-navitem {
//   height: 0.5rem !important;
// }
</style>
