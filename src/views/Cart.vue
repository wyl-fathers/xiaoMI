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
<<<<<<< HEAD
  },
  computed: {
    ...mapState(["hide"])
  },
=======
  },
  computed: {
    ...mapState(['hide']),
  },
>>>>>>> fcf60af4e627ecee4111ad7f8e41ff9932557baa

  beforeMount() {
    this.$store.state.NavIsShow = false;
  },
  updated() {
    this.$store.state.NavIsShow = false;
  },
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
  updated(){
        this.$store.state.NavIsShow=false

  }
,
>>>>>>> fcf60af4e627ecee4111ad7f8e41ff9932557baa
>>>>>>> 7cd7db8d6a3127497b161dc6125c65607d29ddaa

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
