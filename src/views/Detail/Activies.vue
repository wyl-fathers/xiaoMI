<template>
  <div class="sell">
 
    <div v-for="(data,index) in dataList" :key="index" @click='actionSheet'>
     <span class="type">{{data.type_desc}}</span>
     <span class="title">{{data.title}}</span>
    </div>
   <mt-popup v-model="popupVisible" position="bottom">
    <button>取消</button>
   </mt-popup>
 
  </div>
</template>

<script>
import axios from 'axios';
import { Popup } from 'mint-ui';
import Vue from 'vue';
Vue.component(Popup.name, Popup);

export default {
  data(){
    return{
      dataList:[],
      slot:[],
      popupVisible:false,
    }
  },
  methods:{
actionSheet(){
  this.popupVisible =true
},
  },
  mounted(){
    axios({
       method: "post",
       url: "/v1/miproduct/activity_info",
       data:'client_id=180100031051&channel_id=0&webp=1&commodity_ids=1191900041%2C1191900050%2C1191900053%2C1191900040%2C1191900039%2C1191900049%2C1191900048%2C1191900051%2C1191900052%2C1191900047%2C1191900045%2C1191900046&goods_id=2191900023%2C2191900032%2C2191900035%2C2191900022%2C2191900021%2C2191900031%2C2191900030%2C2191900033%2C2191900034%2C2191900029%2C2191900027%2C2191900028&is_batched=false'
    }).then(resp =>{
      console.log(resp.data.data.activies[0].canJoinActs)
      this.dataList = resp.data.data.activies[0].canJoinActs
    })
  }
}
</script>

<style lang="scss" scoped>
  .sell{
    margin-top:.1rem;
    height: 0.6054rem;
    width: 3.4185rem;
    background: #e5e5e5;
    border-radius: 5.12px;
  }

</style>
