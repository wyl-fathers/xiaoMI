<template>
  <div>
    <div :class="isFixed?'fixed':''" id="wyl">
      <Input1></Input1>
      <HeaderSwiper @lzcindex="geiindex" ref="myswiper"></HeaderSwiper>
    </div>
    <component :is="'Recommend'+ccc" @towhitch="geiindex"></component>
  </div>
</template>

<script>
// import axios from "axios";
import Input1 from '@/components/Input.vue'
import HeaderSwiper from '@/views/Header/HeaderSwiper.vue'

import Recommend1 from '@/views/First/Phone.vue'
import Recommend2 from '@/views/First/Brain.vue'
import Recommend5 from '@/views/First/HouseEle.vue'
import Recommend6 from '@/views/First/Live.vue'
import Recommend3 from '@/views/First/TV.vue'
import Recommend4 from '@/views/First/NoteBook.vue'
import Recommend0 from '@/views/First/Recommend.vue'

// import BestHead from "@/views/Best/BestHead.vue";
// import BestList from "@/views/Best/BestList.vue";
export default {
  data () {
    return {
      ccc: 0,
      isFixed: false
    }
  },
  methods: {
    geiindex (data) {
      this.ccc = data
    },

    Scroll () {
      if (
        document.documentElement.scrollTop >=
        this.$refs.myswiper.$el.offsetHeight
      ) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  components: {
    Input1,
    HeaderSwiper,
    Recommend1,
    Recommend2,
    Recommend5,
    Recommend6,
    Recommend3,
    Recommend4,
    Recommend0
  },
  mounted () {
    window.onscroll = this.Scroll
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>

<style lang="scss" >
#wyl {
  width: 100%;
  background: #f2f2f2;
}
.color11 {
  color: #f60;
}

.fixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  background: #f2f2f2;
}
// .divider_line {
//   background: #f5f5f5;
//   height: 0.08rem;
// }
// .cells_auto_fill {
//   position: relative;
//   img {
//     position: absolute;
//   }
// }

// .cells0 {
//   left: 0;
//   top: 0;
//   width: 49.5%;
//   height: 2.65rem;
// }
// .cells1 {
//   right: 0;
//   top: 0;
//   width: 49.5%;
//   height: 1.315rem;
// }
// .cells2 {
//   right: 0;
//   bottom: -2.65rem;
//   width: 49.5%;
//   height: 1.315rem;
// }
// .cell_fill {
//   height: 2.65rem;
// }
// .cells_auto_fill_1 {
//   height: 1.3125rem;
//   width: 100%;
// }
// .cells_auto_fill_1_father {
//   display: flex;
//   justify-content: space-between;
//   img {
//     width: 100%;
//     height: 1.3125rem;
//   }
// }

// .cells_auto_fill_8 {
//   width: 100%;
//   // height: 1.4583rem;
//   height: 2.2916rem;

//   img {
//     width: 100%;
//     // height: 1.4583rem;
//     height: 2.2916rem;
//   }
// }
// .cells_auto_fill_10 {
//   width: 100%;
//   height: 2.2916rem;

//   img {
//     width: 100%;
//     height: 2.2916rem;
//   }
// }

// .cells_auto_fill__father_54,
// .cells_auto_fill__father_56,
// .cells_auto_fill__father_58 {
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: space-around;
//   > div {
//     box-sizing: border-box;
//     width: 49%;
//     height: 2.54rem;
//     img {
//       width: 100%;
//       height: 2.5rem;
//     }
//     .button_father {
//       width: 100%;
//       height: 0.41rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//     button {
//       width: 1rem;
//       height: 0.3rem;
//       background: #ea625b;
//       color: white;
//       border: 1px solid white;
//       border-radius: 0.05rem;
//     }
//   }
// }

// .cells_auto_fill__father_0,
// .cells_auto_fill__father_2,
// .cells_auto_fill__father_4,
// .cells_auto_fill__father_6,
// .cells_auto_fill__father_14,
// .cells_auto_fill__father_16,
// .cells_auto_fill__father_18,
// .cells_auto_fill__father_26,
// .cells_auto_fill__father_28,
// .cells_auto_fill__father_30,
// .cells_auto_fill__father_38,
// .cells_auto_fill__father_39,
// .cells_auto_fill__father_40,
// .cells_auto_fill__father_48,
// .cells_auto_fill__father_49,
// .cells_auto_fill__father_50 {
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: space-around;
//   > div {
//     box-sizing: border-box;
//     padding: 0 1%;
//     width: 49%;
//     height: 2.54rem;
//     img {
//       width: 100%;
//       height: 1.4583rem;
//     }
//     .button_father {
//       width: 100%;
//       height: 0.41rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//     button {
//       width: 1rem;
//       height: 0.3rem;
//       background: #ea625b;
//       color: white;
//       border: 1px solid white;
//       border-radius: 0.05rem;
//     }
//   }
// }

// .cells_auto_fill__p1_0,
// .cells_auto_fill__p1_2,
// .cells_auto_fill__p1_4,
// .cells_auto_fill__p1_6,
// .cells_auto_fill__p1_14,
// .cells_auto_fill__p1_16,
// .cells_auto_fill__p1_18,
// .cells_auto_fill__p1_26,
// .cells_auto_fill__p1_28,
// .cells_auto_fill__p1_30,
// .cells_auto_fill__p1_38,
// .cells_auto_fill__p1_39,
// .cells_auto_fill__p1_40,
// .cells_auto_fill__p1_48,
// .cells_auto_fill__p1_49,
// .cells_auto_fill__p1_50 {
//   width: 100%;
//   overflow: hidden;
//   white-space: nowrap;
//   font-size: 0.16rem;
//   text-align: center;
//   text-overflow: ellipsis;
// }
// .cells_auto_fill__p2_0,
// .cells_auto_fill__p2_2,
// .cells_auto_fill__p2_4,
// .cells_auto_fill__p2_6,
// .cells_auto_fill__p2_14,
// .cells_auto_fill__p2_16,
// .cells_auto_fill__p2_18,
// .cells_auto_fill__p2_26,
// .cells_auto_fill__p2_28,
// .cells_auto_fill__p2_30,
// .cells_auto_fill__p2_38,
// .cells_auto_fill__p2_39,
// .cells_auto_fill__p2_40,
// .cells_auto_fill__p2_48,
// .cells_auto_fill__p2_49,
// .cells_auto_fill__p2_50 {
//   text-align: center;
//   color: #777;
// }
// .cells_auto_fill__p3_0,
// .cells_auto_fill__p3_2,
// .cells_auto_fill__p3_4,
// .cells_auto_fill__p3_6,
// .cells_auto_fill__p3_14,
// .cells_auto_fill__p3_16,
// .cells_auto_fill__p3_18,
// .cells_auto_fill__p3_26,
// .cells_auto_fill__p3_28,
// .cells_auto_fill__p3_30,
// .cells_auto_fill__p3_38,
// .cells_auto_fill__p3_39,
// .cells_auto_fill__p3_40,
// .cells_auto_fill__p3_48,
// .cells_auto_fill__p3_49,
// .cells_auto_fill__p3_50 {
//   text-align: center;
//   color: red;
//   span {
//     text-decoration: line-through;
//     color: #777;
//   }
// }

// .cells_auto_fill__father_8,
// .cells_auto_fill__father_20,
// .cells_auto_fill__father_32,
// .cells_auto_fill__father_42,
// .cells_auto_fill__father_52 {
//   //   border-top: 0.01rem solid #ccc;
//   width: 100%;
//   height: 0.52rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   > div {
//     height: 0.52rem;
//   }
//   p {
//     font-size: 0.16rem;
//     line-height: 0.52rem;
//   }
// }

// .cells_auto_fill__father_10,
// .cells_auto_fill__father_22,
// .cells_auto_fill__father_34,
// .cells_auto_fill__father_44,
// .cells_auto_fill__father_60 {
//   img {
//     height: 1.4583rem;
//     width: 100%;
//   }
// }

// .cells_auto_fill__father_12,
// .cells_auto_fill__father_24,
// .cells_auto_fill__father_36,
// .cells_auto_fill__father_46 {
//   img {
//     height: 2.2916rem;
//     width: 100%;
//   }
// }

// .cells_auto_fill__father_11,
// .cells_auto_fill__father_9,
// .cells_auto_fill__father_3,
// .cells_auto_fill__father_15,
// .cells_auto_fill__father_13,
// .cells_auto_fill__father_21,
// .cells_auto_fill__father_23,
// .cells_auto_fill__father_25,
// .cells_auto_fill__father_27,
// .cells_auto_fill__father_29,
// .cells_auto_fill__father_37,
// .cells_auto_fill__father_41,
// .cells_auto_fill__father_43,
// .cells_auto_fill__father_45,
// .cells_auto_fill__father_47,
// .cells_auto_fill__father_51,
// .cells_auto_fill__father_59 {
//   height: 0.08rem;
//   background: #f5f5f5;
// }

// .cells_auto_fill__father_61 {
//   img {
//     width: 100%;
//     height: 0.552rem;
//   }
//   margin-bottom: 0.52rem;
// }
//
</style>
