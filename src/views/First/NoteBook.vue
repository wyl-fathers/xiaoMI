<template>
  <div>
    <div class="Fir_pic_1" v-if="src">
      <img :src="src" alt />
    </div>

    <div
      v-for="(data,index1) in dataList"
      :key="index1+'asd'"
      :class="'cells_auto_fill__father_'+index1"
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
          <div v-show="item.product_price" class="button_father">
            <button :class="'cells_auto_fill__btn_'+index1" v-show="item.product_price">立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui'

import axios from 'axios'
export default {
  data () {
    return {
      dataList: [],
      src: null
    }
  },
  methods: {
    toDetail (data) {
      this.$router.push(`/Detail/${data}`)
    }
  },
  mounted () {
    axios({
      method: 'post',
      url: '/v1/home/page',
      data:
        'client_id=180100031051&channel_id=0&webp=1&page_type=activity&page_id=9770'
    }).then(resp => {
      this.src = resp.data.data.data.sections[0].body.items[0].img_url
      this.dataList = resp.data.data.data.sections.filter((el, index) => {
        return index > 0
      })
      console.log(resp.data.data.data)
    })
  }
}
</script>

<style lang="scss" scoped>
button {
  font-size: 0.14rem;
}

img {
  display: block;
}
div.Fir_pic_1 {
  img {
    width: 100%;
    height: 2.6667rem;
  }
}

.cells_auto_fill__father_0 {
  display: flex;
  flex-wrap: wrap;
  height: 0.7916rem;
  > div {
    width: 20%;
    img {
      width: 100%;
      height: 0.7916rem;
    }
  }
}

.cells_auto_fill__father_1,
.cells_auto_fill__father_14,
.cells_auto_fill__father_19,
.cells_auto_fill__father_25,
.cells_auto_fill__father_31,
.cells_auto_fill__father_37,
.cells_auto_fill__father_40 {
  img {
    width: 100%;
    // height: 1.0416rem;
    height: 0.8333rem;

    display: block;
  }
}

.cells_auto_fill__father_12 {
  img {
    height: 1.4583rem;
    width: 100%;
  }
}
.cells_auto_fill__father_2,
.cells_auto_fill__father_8,
.cells_auto_fill__father_15,
.cells_auto_fill__father_17,
.cells_auto_fill__father_21,
.cells_auto_fill__father_23,
.cells_auto_fill__father_27,
.cells_auto_fill__father_33,
.cells_auto_fill__father_35,
.cells_auto_fill__father_42,
.cells_auto_fill__father_46 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: #2870bb;
  > div {
    box-sizing: border-box;
    background: white;
    padding: 0 0%;
    width: 99%;
    height: 3.2108rem;
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
}

//通用

.cells_auto_fill__father_4,
.cells_auto_fill__father_6,
.cells_auto_fill__father_10,
.cells_auto_fill__father_24,
.cells_auto_fill__father_29,
.cells_auto_fill__father_38,
.cells_auto_fill__father_44 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: #2870bb;
  > div {
    box-sizing: border-box;
    background: white;
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

.cells_auto_fill__p1_2,
.cells_auto_fill__p1_4,
.cells_auto_fill__p1_6,
.cells_auto_fill__p1_8,
.cells_auto_fill__p1_10,
.cells_auto_fill__p1_15,
.cells_auto_fill__p1_17,
.cells_auto_fill__p1_21,
.cells_auto_fill__p1_23,
.cells_auto_fill__p1_24,
.cells_auto_fill__p1_26,
.cells_auto_fill__p1_27,
.cells_auto_fill__p1_29,
.cells_auto_fill__p1_33,
.cells_auto_fill__p1_35,
.cells_auto_fill__p1_38,
.cells_auto_fill__p1_42,
.cells_auto_fill__p1_44,
.cells_auto_fill__p1_46 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.16rem;
  text-align: center;
  text-overflow: ellipsis;
}

.cells_auto_fill__p2_2,
.cells_auto_fill__p2_4,
.cells_auto_fill__p2_6,
.cells_auto_fill__p2_8,
.cells_auto_fill__p2_10,
.cells_auto_fill__p2_21,
.cells_auto_fill__p2_23,
.cells_auto_fill__p2_15,
.cells_auto_fill__p2_17,
.cells_auto_fill__p2_24,
.cells_auto_fill__p2_26,
.cells_auto_fill__p2_27,
.cells_auto_fill__p2_29,
.cells_auto_fill__p2_33,
.cells_auto_fill__p2_35,
.cells_auto_fill__p2_38,
.cells_auto_fill__p2_42,
.cells_auto_fill__p2_44,
.cells_auto_fill__p2_46 {
  text-align: center;
  color: #777;
}

.cells_auto_fill__p3_2,
.cells_auto_fill__p3_4,
.cells_auto_fill__p3_6,
.cells_auto_fill__p3_8,
.cells_auto_fill__p3_10,
.cells_auto_fill__p3_21,
.cells_auto_fill__p3_23,
.cells_auto_fill__p3_15,
.cells_auto_fill__p3_17,
.cells_auto_fill__p3_24,
.cells_auto_fill__p3_26,
.cells_auto_fill__p3_27,
.cells_auto_fill__p3_29,
.cells_auto_fill__p3_13,
.cells_auto_fill__p3_15,
.cells_auto_fill__p3_33,
.cells_auto_fill__p3_35,
.cells_auto_fill__p3_38,
.cells_auto_fill__p3_42,
.cells_auto_fill__p3_44,
.cells_auto_fill__p3_46 {
  text-align: center;
  color: red;
  span {
    text-decoration: line-through;
    color: #777;
  }
}

.cells_auto_fill__father_3,
.cells_auto_fill__father_5,
.cells_auto_fill__father_7,
.cells_auto_fill__father_9,
.cells_auto_fill__father_11,
.cells_auto_fill__father_13,
.cells_auto_fill__father_16,
.cells_auto_fill__father_18,
.cells_auto_fill__father_20,
.cells_auto_fill__father_22,
.cells_auto_fill__father_26,
.cells_auto_fill__father_28,
.cells_auto_fill__father_30,
.cells_auto_fill__father_24,
.cells_auto_fill__father_37,
.cells_auto_fill__father_39,
.cells_auto_fill__father_32,
.cells_auto_fill__father_41,
.cells_auto_fill__father_45,
.cells_auto_fill__father_34,
.cells_auto_fill__father_36,
.cells_auto_fill__father_43,
.cells_auto_fill__father_47 {
  background: #2870bb;
  height: 0.055rem;
  width: 100%;
}

.cells_auto_fill__father_47 {
  margin-bottom: 0.52rem;
}
</style>
