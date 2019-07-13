<template>
  <div>
    <HeaderDown>
      <span>购物车</span>
    </HeaderDown>
    <Cartlogin v-show="hide"></Cartlogin>
    <Cartbuy></Cartbuy>
    <Cartlist v-show="hide"></Cartlist>
    <Cnxh></Cnxh>
  </div>
</template>

<script>
import HeaderDown from "@/components/HeaderDown.vue";
import Cartlogin from "@/views/Cart/Cartlogin.vue";
import Cartlist from "@/views/Cart/Cartlist.vue";
import Cartbuy from "@/views/Cart/Cartbuy.vue";
import { mapState } from "Vuex";
import Cnxh from "@/components/Cnxh.vue";
export default {
  data() {
    return {
      wyl: true
    };
  },
  computed: {
    ...mapState(["hide"])
  },

  beforeMount() {
    this.$store.state.NavIsShow = false;
  },
  updated() {
    this.$store.state.NavIsShow = false;
  },

  components: {
    HeaderDown,
    Cartlogin,
    Cartlist,
    Cartbuy,
    Cnxh
  },
  beforeDestroy() {
    this.$store.state.NavIsShow = true;
  }
};
</script>

<style lang="scss" scoped>
// aaaa
</style>
