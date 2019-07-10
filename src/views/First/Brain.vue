<template>
  <div>
    <Swi :key="dataList.length">
      <div class="swiper-slide" v-for="data in dataList" :key="data.material_id">
        <img :src="data.img_url" />
      </div>
    </Swi>

    <div
      v-for="(data,index1) in shopList"
      :key="index1+'lzc'"
      :class="'cells_auto_fill__father_'+index1"
    >
      <div v-for="(item,index) in data.body.items" :key="'item'+index">
        <div :class="'cells_auto_fill__'+index1" @click="toDetail(item.product_id)">
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
      shopList: []
    };
  },
  methods: {
    toDetail(data) {
      this.$router.push(`Detail/${data}`);
    }
  },
  mounted() {
    axios({
      method: "post",
      url: "/v1/home/page",
      data:
        "client_id=180100031051&channel_id=0&webp=1&page_type=activity&page_id=10288"
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
img {
  display: block;
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

.cells_auto_fill__father_1,
.cells_auto_fill__father_2 {
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 20%;
    img {
      height: 0.7916rem;
      width: 100%;
    }
  }
}

.cells_auto_fill__father_6,
.cells_auto_fill__father_8,
.cells_auto_fill__father_10,
.cells_auto_fill__father_12,
.cells_auto_fill__father_14,
.cells_auto_fill__father_20,
.cells_auto_fill__father_22,
.cells_auto_fill__father_24,
.cells_auto_fill__father_26,
.cells_auto_fill__father_28,
.cells_auto_fill__father_32,
.cells_auto_fill__father_34,
.cells_auto_fill__father_36,
.cells_auto_fill__father_40,
.cells_auto_fill__father_42,
.cells_auto_fill__father_44,
.cells_auto_fill__father_48,
.cells_auto_fill__father_50,
.cells_auto_fill__father_52,
.cells_auto_fill__father_58,
.cells_auto_fill__father_56,
.cells_auto_fill__father_60,
.cells_auto_fill__father_64,
.cells_auto_fill__father_66,
.cells_auto_fill__father_68,
.cells_auto_fill__father_72,
.cells_auto_fill__father_74,
.cells_auto_fill__father_76,
.cells_auto_fill__father_80,
.cells_auto_fill__father_82,
.cells_auto_fill__father_84,
.cells_auto_fill__father_90,
.cells_auto_fill__father_88,
.cells_auto_fill__father_92,
.cells_auto_fill__father_95,
.cells_auto_fill__father_97,
.cells_auto_fill__father_99,
.cells_auto_fill__father_100 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  > div {
    box-sizing: border-box;
    padding: 0 1%;
    width: 32%;
    height: 2.14rem;
    img {
      width: 100%;
      height: 1.1509rem;
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

.cells_auto_fill__p1_6,
.cells_auto_fill__p1_8,
.cells_auto_fill__p1_10,
.cells_auto_fill__p1_12,
.cells_auto_fill__p1_14,
.cells_auto_fill__p1_20,
.cells_auto_fill__p1_22,
.cells_auto_fill__p1_24,
.cells_auto_fill__p1_26,
.cells_auto_fill__p1_28,
.cells_auto_fill__p1_32,
.cells_auto_fill__p1_34,
.cells_auto_fill__p1_36,
.cells_auto_fill__p1_40,
.cells_auto_fill__p1_42,
.cells_auto_fill__p1_44,
.cells_auto_fill__p1_48,
.cells_auto_fill__p1_50,
.cells_auto_fill__p1_52,
.cells_auto_fill__p1_56,
.cells_auto_fill__p1_58,
.cells_auto_fill__p1_60,
.cells_auto_fill__p1_64,
.cells_auto_fill__p1_66,
.cells_auto_fill__p1_68,
.cells_auto_fill__p1_72,
.cells_auto_fill__p1_74,
.cells_auto_fill__p1_76,
.cells_auto_fill__p1_80,
.cells_auto_fill__p1_82,
.cells_auto_fill__p1_84,
.cells_auto_fill__p1_90,
.cells_auto_fill__p1_88,
.cells_auto_fill__p1_92,
.cells_auto_fill__p1_95,
.cells_auto_fill__p1_97,
.cells_auto_fill__p1_99,
.cells_auto_fill__p1_100 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.16rem;
  text-align: center;
  text-overflow: ellipsis;
}
.cells_auto_fill__p2_6,
.cells_auto_fill__p2_8,
.cells_auto_fill__p2_10,
.cells_auto_fill__p2_12,
.cells_auto_fill__p2_14,
.cells_auto_fill__p2_20,
.cells_auto_fill__p2_22,
.cells_auto_fill__p2_26,
.cells_auto_fill__p2_24,
.cells_auto_fill__p2_28,
.cells_auto_fill__p2_32,
.cells_auto_fill__p2_34,
.cells_auto_fill__p2_36,
.cells_auto_fill__p2_40,
.cells_auto_fill__p2_42,
.cells_auto_fill__p2_44,
.cells_auto_fill__p2_48,
.cells_auto_fill__p2_52,
.cells_auto_fill__p2_50,
.cells_auto_fill__p2_56,
.cells_auto_fill__p2_58,
.cells_auto_fill__p2_60,
.cells_auto_fill__p2_64,
.cells_auto_fill__p2_66,
.cells_auto_fill__p2_68,
.cells_auto_fill__p2_72,
.cells_auto_fill__p2_74,
.cells_auto_fill__p2_76,
.cells_auto_fill__p2_80,
.cells_auto_fill__p2_82,
.cells_auto_fill__p2_84,
.cells_auto_fill__p2_88,
.cells_auto_fill__p2_90,
.cells_auto_fill__p2_92,
.cells_auto_fill__p2_95,
.cells_auto_fill__p2_97,
.cells_auto_fill__p2_99,
.cells_auto_fill__p2_100 {
  text-align: center;
  color: #777;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cells_auto_fill__p3_6,
.cells_auto_fill__p3_8,
.cells_auto_fill__p3_10,
.cells_auto_fill__p3_12,
.cells_auto_fill__p3_14,
.cells_auto_fill__p3_20,
.cells_auto_fill__p3_22,
.cells_auto_fill__p3_24,
.cells_auto_fill__p3_26,
.cells_auto_fill__p3_28,
.cells_auto_fill__p3_32,
.cells_auto_fill__p3_34,
.cells_auto_fill__p3_36,
.cells_auto_fill__p3_40,
.cells_auto_fill__p3_42,
.cells_auto_fill__p3_44,
.cells_auto_fill__p3_48,
.cells_auto_fill__p3_50,
.cells_auto_fill__p3_56,
.cells_auto_fill__p3_58,
.cells_auto_fill__p3_60,
.cells_auto_fill__p3_64,
.cells_auto_fill__p3_66,
.cells_auto_fill__p3_68,
.cells_auto_fill__p3_72,
.cells_auto_fill__p3_74,
.cells_auto_fill__p3_76,
.cells_auto_fill__p3_80,
.cells_auto_fill__p3_82,
.cells_auto_fill__p3_84,
.cells_auto_fill__p3_88,
.cells_auto_fill__p3_90,
.cells_auto_fill__p3_92,
.cells_auto_fill__p3_95,
.cells_auto_fill__p3_97,
.cells_auto_fill__p3_99,
.cells_auto_fill__p3_100 {
  text-align: center;
  color: red;
  span {
    text-decoration: line-through;
    color: #777;
  }
}

.cells_auto_fill__4,
.cells_auto_fill__18,
.cells_auto_fill__30,
.cells_auto_fill__38,
.cells_auto_fill__46,
.cells_auto_fill__54,
.cells_auto_fill__62,
.cells_auto_fill__70,
.cells_auto_fill__78,
.cells_auto_fill__86,
.cells_auto_fill__94 {
  img {
    width: 100%;
    height: 0.4166rem;
  }
}

.cells_auto_fill__father_0,
.cells_auto_fill__father_3,
.cells_auto_fill__father_5,
.cells_auto_fill__father_7,
.cells_auto_fill__father_9,
.cells_auto_fill__father_11,
.cells_auto_fill__father_13,
.cells_auto_fill__father_15,
.cells_auto_fill__father_17,
.cells_auto_fill__father_19,
.cells_auto_fill__father_21,
.cells_auto_fill__father_23,
.cells_auto_fill__father_25,
.cells_auto_fill__father_27,
.cells_auto_fill__father_31,
.cells_auto_fill__father_33,
.cells_auto_fill__father_35,
.cells_auto_fill__father_37,
.cells_auto_fill__father_39,
.cells_auto_fill__father_41,
.cells_auto_fill__father_43,
.cells_auto_fill__father_45,
.cells_auto_fill__father_47,
.cells_auto_fill__father_49,
.cells_auto_fill__father_51,
.cells_auto_fill__father_53,
.cells_auto_fill__father_55,
.cells_auto_fill__father_57,
.cells_auto_fill__father_59,
.cells_auto_fill__father_61,
.cells_auto_fill__father_63,
.cells_auto_fill__father_65,
.cells_auto_fill__father_67,
.cells_auto_fill__father_69,
.cells_auto_fill__father_71,
.cells_auto_fill__father_73,
.cells_auto_fill__father_75,
.cells_auto_fill__father_77,
.cells_auto_fill__father_79,
.cells_auto_fill__father_81,
.cells_auto_fill__father_83,
.cells_auto_fill__father_85,
.cells_auto_fill__father_87,
.cells_auto_fill__father_89,
.cells_auto_fill__father_91,
.cells_auto_fill__father_93,
.cells_auto_fill__father_96,
.cells_auto_fill__father_98 {
  background: #f5f5f5;
  height: 0.08rem;
  width: 100%;
}

.cells_auto_fill__father_100 {
  margin-bottom: 0.52rem;
}

.cells_auto_fill__father_16 {
  img {
    height: 1.049rem;
    width: 100%;
  }
}
</style>
