<template>
  <div>
    <HeaderDown class="go2"><span>选择城市</span></HeaderDown>
    <mt-index-list ref="ccc">
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div
          @click="handleClick(city.cityId,city.name)"
          v-for="city in data.list"
          :key="city.cityId"
        >
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { IndexList, IndexSection } from "mint-ui";
import HeaderDown from "@/components/HeaderDown.vue";
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
  beforeMount() {
    this.$store.commit("NavHide", false)
    },
  beforeDestroy() {
    this.$store.commit("NavHide", true);
    },
  components: { HeaderDown },
  data() {
    return {
      datalist: {}
    };
  },
  mounted() {
    // console.log(this.$refs.ccc.$el);
    this.$refs.ccc.$el.style.height = window.innerHeight - 50 + "px";

    axios({
      url: "https://m.maizuo.com/gateway?k=9502566",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        "X-Host": "mall.film-ticket.city.list"
      }
    }).then(res => {
      // console.log(res.data);
      this.datalist = this.handleCity(res.data.data.cities);
      console.log(this.datalist);
    });
  },
  methods: {
    handleCity(data) {
      // console.log(data);
      var arr = [];
      for (var i = 65; i < 91; i++) {
        arr.push(String.fromCharCode(i));
      }

      var arr_city = [];
      for (var j = 0; j < arr.length; j++) {
        var a = data.filter(
          item => item.pinyin.substring(0, 1) === arr[j].toLowerCase()
        );
        if (arr.length > 0) {
          arr_city.push({
            index: arr[j],
            list: a
          });
        }
      }

      return arr_city;
    },
        handleClick(id,name){
      console.log(id)
      localStorage.setItem("cityId",id);
      localStorage.setItem("cityName",encodeURIComponent(name));
      this.$router.push(`/cinema`)
    }

  }
};
</script>
<style lang="scss" scoped>
.go2{
  display: flex;
  left: .3rem;
  top: .35rem
}
p.mint-indexsection-index  {
    font-size: 0.22rem;
    margin: 0;
    padding: 10px;
    background-color: #fafafa;
    text-align: center !important;
}
li.mint-indexlist-navitem{
    width:.3rem
}
</style>
