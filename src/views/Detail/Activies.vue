<template>
  <div class="sell">
    <div v-for="(data,index) in dataList" :key="index" @click='popup' class="pad">
     <span class="type">{{data.type_desc}}</span>
     <span class="title">{{data.title}}</span>
    </div>
   <div class="popup" v-show="isShow">
     <span class="cover"></span>
    <div>11111111</div>
   </div>
 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      dataList:[],
    }
  },
  methods:{
Popup(){

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
    .pad{
      margin-bottom: .1rem;
    }
    margin:.15rem 0 0 .02rem;
    height: 0.6054rem;
    width: 3.4185rem;
    background: #e5e5e5;
    border-radius:.1rem;
    padding: .15rem;
    .type{
      border: 1px solid #f56600;
      color: #f56600;
      margin: .2rem .05rem .2rem .35rem;
      padding:0rem;
    } 
    .title{
      font-size: .14rem;
      color: rgba(0,0,0,.87);
    }
  }
.popup{
  width:100%;
  display: block !important;
  height: 4rem;
  background:#f60;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10001;
}
  .popup::before{
    content: '';
    height: 6.75rem;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top:0;
  }
</style>
