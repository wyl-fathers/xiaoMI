<template>
  <div>
    <!-- <Head></Head> -->
    <BestHead></BestHead>
    <BestList class="BestList">
      <div v-for="data in AllList[1]" :key="data.ad_position_id">
        <img :src="data.img_url" alt />
      </div>
      <div v-for="data in AllList[2]" :key="data.ad_position_id">
        <img :src="data.img_url" alt />
      </div>
    </BestList>
    <div
      class="divider_line"
      v-for="data in AllList[3]"
      :key="data.ad_position_id?data.ad_position_id:Math.random()"
    ></div>
    <div class="cell_fill">
      <div
        v-for="(data,index) in AllList[4]"
        :key="data.ad_position_id?data.ad_position_id:Math.random()"
        class="cells_auto_fill"
      >
        <img :src="data.img_url" :class="'cells'+index" />
      </div>
    </div>
    <div
      class="divider_line"
      v-for="data in AllList[5]"
      :key="data.ad_position_id?data.ad_position_id:Math.random()"
    ></div>

    <div class="cells_auto_fill_1_father">
      <div
        v-for="(data,index) in AllList[6]"
        :key="data.ad_position_id?data.ad_position_id:Math.random()"
        class="cells_auto_fill_1"
      >
        <img :src="data.img_url" :class="'cells_1'+index" />
      </div>
    </div>
    <div
      class="divider_line"
      v-for="data in AllList[7]"
      :key="data.ad_position_id?data.ad_position_id:Math.random()"
    ></div>

    <div
      v-for="(data) in AllList[8]"
      :key="data.ad_position_id?data.ad_position_id:Math.random()"
      class="cells_auto_fill_8"
    >
      <img :src="data.img_url" />
    </div>

    <div
      class="divider_line"
      v-for="data in AllList[9]"
      :key="data.ad_position_id?data.ad_position_id:Math.random()"
    ></div>

    <!-- <div
      v-for="(data) in AllList[10]"
      :key="data.ad_position_id?data.ad_position_id:Math.random()"
      class="cells_auto_fill_10"
    >
      <img :src="data.img_url" />
    </div>-->

    <div
      class="divider_line"
      v-for="data in AllList[11]"
      :key="data.ad_position_id?data.ad_position_id:Math.random()"
    ></div>

    <div v-for="(data,index1) in dataList" :key="index1" :class="'cells_auto_fill__father_'+index1">
      <div v-for="(item,index) in data.body.items" :key="'item'+index">
        <div :class="'cells_auto_fill__'+index1">
          <p v-show="item.action_title">{{item.action_title}}&gt;</p>
          <img :src="item.img_url" alt />
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
import axios from "axios";
// import Head from "@/views/Head.vue";
import BestHead from "@/views/Best/BestHead.vue";
import BestList from "@/views/Best/BestList.vue";
export default {
  data() {
    return {
      dataList: [],
      sections: [],
      AllList: []
    };
  },
  mounted() {
    axios({
      method: "post",
      url: "/v1/home/page",
      data: {
        client_id: "180100031051",
        channel_id: "0",
        webp: "1",
        page_type: "recommend",
        recommend_tag: "XMGUEST-4E017660-9F8B-11E9-8EF2-E7ECC66E4982"
      }
    }).then(resp => {
      this.sections = resp.data.data.data.sections;
      this.sections.forEach(el => {
        if (el.body.items) {
          this.AllList.push(el.body.items);
        } else {
          this.AllList.push(1);
        }
      });
      this.dataList = this.sections.filter((el, index) => {
        return index > 11;
      });
      console.log(this.dataList);
    });
  },
  components: {
    BestHead,
    BestList
    // Head
  }
};
</script>

<style lang="scss" scoped>
.divider_line {
  background: #f5f5f5;
  height: 0.08rem;
}
.cells_auto_fill {
  position: relative;
  img {
    position: absolute;
  }
}

.cells0 {
  left: 0;
  top: 0;
  width: 49.5%;
  height: 2.65rem;
}
.cells1 {
  right: 0;
  top: 0;
  width: 49.5%;
  height: 1.315rem;
}
.cells2 {
  right: 0;
  bottom: -2.65rem;
  width: 49.5%;
  height: 1.315rem;
}
.cell_fill {
  height: 2.65rem;
}
.cells_auto_fill_1 {
  height: 1.3125rem;
  width: 100%;
}
.cells_auto_fill_1_father {
  display: flex;
  justify-content: space-between;
  img {
    width: 100%;
    height: 1.3125rem;
  }
}

.cells_auto_fill_8 {
  width: 100%;
  // height: 1.4583rem;
  height: 2.2916rem;

  img {
    width: 100%;
    // height: 1.4583rem;
    height: 2.2916rem;
  }
}
.cells_auto_fill_10 {
  width: 100%;
  height: 2.2916rem;

  img {
    width: 100%;
    height: 2.2916rem;
  }
}

.cells_auto_fill__father_54,
.cells_auto_fill__father_56,
.cells_auto_fill__father_58 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  > div {
    box-sizing: border-box;
    width: 49%;
    height: 2.54rem;
    img {
      width: 100%;
      height: 2.5rem;
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

.cells_auto_fill__father_0,
.cells_auto_fill__father_2,
.cells_auto_fill__father_4,
.cells_auto_fill__father_6,
.cells_auto_fill__father_14,
.cells_auto_fill__father_16,
.cells_auto_fill__father_18,
.cells_auto_fill__father_26,
.cells_auto_fill__father_28,
.cells_auto_fill__father_30,
.cells_auto_fill__father_38,
.cells_auto_fill__father_39,
.cells_auto_fill__father_40,
.cells_auto_fill__father_48,
.cells_auto_fill__father_49,
.cells_auto_fill__father_50 {
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

.cells_auto_fill__p1_0,
.cells_auto_fill__p1_2,
.cells_auto_fill__p1_4,
.cells_auto_fill__p1_6,
.cells_auto_fill__p1_14,
.cells_auto_fill__p1_16,
.cells_auto_fill__p1_18,
.cells_auto_fill__p1_26,
.cells_auto_fill__p1_28,
.cells_auto_fill__p1_30,
.cells_auto_fill__p1_38,
.cells_auto_fill__p1_39,
.cells_auto_fill__p1_40,
.cells_auto_fill__p1_48,
.cells_auto_fill__p1_49,
.cells_auto_fill__p1_50 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.16rem;
  text-align: center;
  text-overflow: ellipsis;
}
.cells_auto_fill__p2_0,
.cells_auto_fill__p2_2,
.cells_auto_fill__p2_4,
.cells_auto_fill__p2_6,
.cells_auto_fill__p2_14,
.cells_auto_fill__p2_16,
.cells_auto_fill__p2_18,
.cells_auto_fill__p2_26,
.cells_auto_fill__p2_28,
.cells_auto_fill__p2_30,
.cells_auto_fill__p2_38,
.cells_auto_fill__p2_39,
.cells_auto_fill__p2_40,
.cells_auto_fill__p2_48,
.cells_auto_fill__p2_49,
.cells_auto_fill__p2_50 {
  text-align: center;
  color: #777;
}
.cells_auto_fill__p3_0,
.cells_auto_fill__p3_2,
.cells_auto_fill__p3_4,
.cells_auto_fill__p3_6,
.cells_auto_fill__p3_14,
.cells_auto_fill__p3_16,
.cells_auto_fill__p3_18,
.cells_auto_fill__p3_26,
.cells_auto_fill__p3_28,
.cells_auto_fill__p3_30,
.cells_auto_fill__p3_38,
.cells_auto_fill__p3_39,
.cells_auto_fill__p3_40,
.cells_auto_fill__p3_48,
.cells_auto_fill__p3_49,
.cells_auto_fill__p3_50 {
  text-align: center;
  color: red;
  span {
    text-decoration: line-through;
    color: #777;
  }
}

.cells_auto_fill__father_8,
.cells_auto_fill__father_20,
.cells_auto_fill__father_32,
.cells_auto_fill__father_42,
.cells_auto_fill__father_52 {
  //   border-top: 0.01rem solid #ccc;
  width: 100%;
  height: 0.52rem;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    height: 0.52rem;
  }
  p {
    font-size: 0.16rem;
    line-height: 0.52rem;
  }
}

.cells_auto_fill__father_10,
.cells_auto_fill__father_22,
.cells_auto_fill__father_34,
.cells_auto_fill__father_44,
.cells_auto_fill__father_60 {
  img {
    height: 1.4583rem;
    width: 100%;
  }
}

.cells_auto_fill__father_12,
.cells_auto_fill__father_24,
.cells_auto_fill__father_36,
.cells_auto_fill__father_46 {
  img {
    height: 2.2916rem;
    width: 100%;
  }
}

.cells_auto_fill__father_11,
.cells_auto_fill__father_9,
.cells_auto_fill__father_3,
.cells_auto_fill__father_15,
.cells_auto_fill__father_13,
.cells_auto_fill__father_21,
.cells_auto_fill__father_23,
.cells_auto_fill__father_25,
.cells_auto_fill__father_27,
.cells_auto_fill__father_29,
.cells_auto_fill__father_37,
.cells_auto_fill__father_41,
.cells_auto_fill__father_43,
.cells_auto_fill__father_45,
.cells_auto_fill__father_47,
.cells_auto_fill__father_51,
.cells_auto_fill__father_59 {
  height: 0.08rem;
  background: #f5f5f5;
}

.cells_auto_fill__father_61 {
  img {
    width: 100%;
    height: 0.552rem;
  }
  margin-bottom: 0.52rem;
}
</style>