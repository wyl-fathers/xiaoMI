<template>
  <div class="cartlist">
    <div class="box">
      <span class="iconfont" id="jiada">&#xe64f;</span>
      <span id="zi1">购物车还是空的</span>
      <span id="qgg" @click="handlehome()">去逛逛</span>
    </div>
 
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      img1: null,
      datalist: []
    };
  },

  methods: {
    handlehome() {
      this.$router.push("/Best");
    }
  },

    

  mounted() {
    axios({
      method: "post",
      url: "v1/home/recommendBlank",
      data:
        "client_id=180100031051&channel_id=0&webp=1&source=list&recommend_tag=XMGUEST-4DE00030-A142-11E9-B821-1F90296FF9DF"
    }).then(res => {
      this.img1 = res.data.data.header.body.items[0];
      this.datalist = res.data.data.recom_list;
      console.log(this.datalist);
    });
  },
  
};
</script>

<style lang="scss" scoped>
img {
  display: block;
}
.cartlist {
  background-color: #f2f2f2;
  width: 100%;
  height: 0.6181rem;

  .box {
    margin: 0 auto;
    display: flex;
    height: 0.6181rem;
    // line-height: 0.6181rem;
    // width: 2.6rem;
    color: #777777;
    justify-content: center;
    align-items: center;
    #jiada {
      font-size: 0.3rem;
    }
    #qgg {
      border: 0.01rem solid #777777;
      margin-left: 0.1rem;
      height: 0.25rem;
      width: 0.44rem;
      color: black;
      line-height: 0.25rem;
      display: block;
    }
  }
}

.cnxh {
  width: 100%;
  height: 0.625rem;

  img {
    width: 100%;
    height: 0.625rem;
  }
}

.nmb {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 0.5rem;
  li {
    box-sizing: border-box;
    padding: 1% 0;
    width: 49%;
    height: 2.54rem;
    img {
      width: 1.8563rem;
      height: 1.8563rem;
      box-sizing: border-box;
    }
    .good {
      width: 100%;
      height: 0.41rem;
      .name {
        text-indent: 0.15rem;
        font-size: 0.14rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0.05rem 0;
      }
      .price {
        text-indent: 0.14rem;
        font-size: 0.18rem;
        color: #ff6700;
        //   margin-left:0.1rem;
        span {
          margin-left: 0.05rem;
          color: #777777;
          font-size: 0.13rem;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>

