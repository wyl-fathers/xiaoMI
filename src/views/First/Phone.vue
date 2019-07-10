<template>
  <div>
    <Swi :key="dataList.length">
      <div class="swiper-slide" v-for="data in dataList" :key="data.material_id">
        <img :src="data.img_url" />
      </div>
    </Swi>

    <div
      v-for="(data,index1) in shopList"
      :key="index1+'asd'"
      :class="'cells_auto_fill__father_'+index1"
    >
      <div v-for="(item,index) in data.body.items" :key="'item'+index">
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
          <div v-show="item.product_price" class="button_father">
            <button :class="'cells_auto_fill__btn_'+index1" v-show="item.product_price">立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Lazyload } from "mint-ui";

import axios from "axios";
import Swi from "@/components/Swiper.vue";

export default {
  data() {
    return {
      dataList: [],
      shopList: null
    };
  },
  mounted() {
    axios({
      method: "post",
      url: "/v1/home/page",
      data:
        "client_id=180100031051&channel_id=0&webp=1&page_type=activity&page_id=8235"
    }).then(resp => {
      this.dataList = resp.data.data.data.sections[0].body.items;
      this.shopList = resp.data.data.data.sections.filter((el, index) => {
        return index > 0;
      });
    });
  },
  components: {
    Swi
  }
};
</script>

<style lang="scss" scoped>
button {
  font-size: 0.14rem;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  img {
    height: 1.88rem;
    width: 100%;
    display: block;
  }
}

.cells_auto_fill__father_0 {
  width: 100%;
  img {
    width: 100%;
    display: block;
    height: 0.7916rem;
  }
}

.cells_auto_fill__father_38 {
  img {
    width: 100%;
    height: 1.0416rem;
    display: block;
  }
  margin-bottom: 0.52rem;
}

.cells_auto_fill__father_18,
.cells_auto_fill__father_24,
.cells_auto_fill__father_28,
.cells_auto_fill__father_34 {
  img {
    width: 100%;
    // height: 1.0416rem;
    height: 0.7916rem;

    display: block;
  }
}

.cells_auto_fill__father_1,
.cells_auto_fill__father_19,
.cells_auto_fill__father_25,
.cells_auto_fill__father_35 {
  img {
    width: 100%;
    height: 2.2708rem;
    display: block;
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

//通用格式

.cells_auto_fill__father_3,
.cells_auto_fill__father_5,
.cells_auto_fill__father_7,
.cells_auto_fill__father_9,
.cells_auto_fill__father_11,
.cells_auto_fill__father_13,
.cells_auto_fill__father_15,
.cells_auto_fill__father_17,
.cells_auto_fill__father_21,
.cells_auto_fill__father_23,
.cells_auto_fill__father_27,
.cells_auto_fill__father_29,
.cells_auto_fill__father_31,
.cells_auto_fill__father_33,
.cells_auto_fill__father_37 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  > div {
    box-sizing: border-box;
    padding: 0 0%;
    width: 49%;
    height: 2.54rem;
    img {
      width: 100%;
      height: 1.4583rem;
      display: block;
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

.cells_auto_fill__p1_3,
.cells_auto_fill__p1_1,
.cells_auto_fill__p1_5,
.cells_auto_fill__p1_7,
.cells_auto_fill__p1_9,
.cells_auto_fill__p1_11,
.cells_auto_fill__p1_13,
.cells_auto_fill__p1_15,
.cells_auto_fill__p1_17,
.cells_auto_fill__p1_19,
.cells_auto_fill__p1_21,
.cells_auto_fill__p1_23,
.cells_auto_fill__p1_24,
.cells_auto_fill__p1_25,
.cells_auto_fill__p1_27,
.cells_auto_fill__p1_29,
.cells_auto_fill__p1_31,
.cells_auto_fill__p1_33,
.cells_auto_fill__p1_37,
.cells_auto_fill__p1_35 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.16rem;
  text-align: center;
  text-overflow: ellipsis;
}

.cells_auto_fill__p2_1,
.cells_auto_fill__p2_3,
.cells_auto_fill__p2_5,
.cells_auto_fill__p2_7,
.cells_auto_fill__p2_9,
.cells_auto_fill__p2_11,
.cells_auto_fill__p2_13,
.cells_auto_fill__p2_15,
.cells_auto_fill__p2_17,
.cells_auto_fill__p2_19,
.cells_auto_fill__p2_21,
.cells_auto_fill__p2_23,
.cells_auto_fill__p2_24,
.cells_auto_fill__p2_25,
.cells_auto_fill__p2_27,
.cells_auto_fill__p2_29,
.cells_auto_fill__p2_31,
.cells_auto_fill__p2_33,
.cells_auto_fill__p2_35,
.cells_auto_fill__p2_37 {
  text-align: center;
  color: #777;
}

.cells_auto_fill__p3_1,
.cells_auto_fill__p3_3,
.cells_auto_fill__p3_5,
.cells_auto_fill__p3_7,
.cells_auto_fill__p3_9,
.cells_auto_fill__p3_11,
.cells_auto_fill__p3_13,
.cells_auto_fill__p3_15,
.cells_auto_fill__p3_17,
.cells_auto_fill__p3_19,
.cells_auto_fill__p3_21,
.cells_auto_fill__p3_23,
.cells_auto_fill__p3_24,
.cells_auto_fill__p3_25,
.cells_auto_fill__p3_27,
.cells_auto_fill__p3_29,
.cells_auto_fill__p3_31,
.cells_auto_fill__p3_33,
.cells_auto_fill__p3_35,
.cells_auto_fill__p3_37 {
  text-align: center;
  color: red;
  span {
    text-decoration: line-through;
    color: #777;
  }
}
</style>
