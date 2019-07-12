<template>
  <div>
    <HeaderDown style="background: transparent">
      <input type="text" name="sousuo" class="iconfont" :placeholder="icon" v-model="input" />
    </HeaderDown>
    <Swi :key="dataList.length">
      <div class="swiper-slide" v-for="data in dataList" :key="data.material_id">
        <img :src="data.img_url" />
      </div>
    </Swi>

    <div
      v-for="(data,index1) in shopList"
      :key="index1+'father'"
      :class="`cells_auto_fill__father_${index1} ${data.view_type}`"
    >
      <div
        v-for="(item,index) in data.body.items"
        :key="'item'+index"
        @click="toDetail(item.product_id)"
      >
        <div :class="'cells_auto_fill__'+index1">
          <p v-show="item.action_title">{{item.action_title}}&gt;</p>
          <img :src="item.img_url" alt v-lazy="item.img_url" />
          <p :class="'cells_auto_fill__p1_'+index1">{{item.product_name}}</p>
          <p :class="'cells_auto_fill__p2_'+index1">{{item.product_brief}}</p>
          <p :class="'cells_auto_fill__p3_'+index1">
            <b v-show="item.product_price">￥</b>
            {{item.product_price}}
            <span
              v-show="! (item.product_org_price === item.product_price)"
            >{{item.product_org_price}}</span>
          </p>
          <div v-show="item.product_price" class="button_father"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDown from "@/components/HeaderDown.vue";
import Swi from "@/components/Swiper.vue";

import axios from "axios";
export default {
  data() {
    return {
      icon: `\ue66f  搜索商品名称 `,
      input: ``,
      dataList: [],
      shopList: null
    };
  },
  beforeMount() {
    this.$store.commit("NavHide", false);
  },
  mounted() {
    axios({
      method: "post",
      url: "/v1/home/recommendChannel",
      data: "client_id=180100031051&channel_id=0&webp=1&id=1852"
    }).then(resp => {
      this.dataList = resp.data.data.sections[0].body.items;
      this.shopList = resp.data.data.sections.filter((el, index) => {
        return index > 0;
      });
      console.log(this.shopList);
    });
  },
  methods: {
    toDetail(data) {
      this.$router.push(`/Detail/${data}`);
    }
  },
  components: {
    HeaderDown,
    Swi
  },
  beforeDestroy() {
    this.$store.commit("NavHide", true);
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;

  border-radius: 1%;
  border: solid #ccc 0.01rem;
  height: 0.3rem;
  width: 2.7rem;
  font-size: 0.175rem;
}

.swiper-container {
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  img {
    height: 2.6666rem;
    width: 100%;
    display: block;
  }
}

.divider_line {
  height: 0.08rem;
  background: white;
}

.cells_auto_fill {
  img {
    height: 0.4166rem;
    width: 100%;
  }
}

.list_two_type1 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  > div {
    box-sizing: border-box;
    padding: 0 1%;
    width: 49%;
    height: 2.54rem;
    img {
      width: 100%;
      height: 1.4583rem;
    }
    p:nth-of-type(2) {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.16rem;
      text-align: center;
      text-overflow: ellipsis;
    }

    p:nth-of-type(3) {
      text-align: center;
      color: #777;
    }
    p:nth-of-type(4) {
      text-align: center;
      color: red;
      span {
        text-decoration: line-through;
        color: #777;
      }
    }
    .button_father {
      width: 100%;
      height: 0.41rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      width: 1rem;
      height: 0.3rem;
      background: #ea625b;
      color: white;
      border: 1px solid white;
      border-radius: 0.05rem;
    }
  }
}
</style>