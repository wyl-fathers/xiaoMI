<template>
  <div>
    <HeaderDown>
      <span>购物车</span>
    </HeaderDown>
    <Cartlogin></Cartlogin>
    <Cartbuy></Cartbuy>
    <Cartlist></Cartlist>
  </div>
</template>

<script>
import HeaderDown from "@/components/HeaderDown.vue";
import Cartlogin from "@/views/Cart/Cartlogin.vue";
import Cartlist from "@/views/Cart/Cartlist.vue";
import Cartbuy from "@/views/Cart/Cartbuy.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeaderDown,
    Cartlogin,
    Cartlist,
    Cartbuy
  }
};
</script>

<style lang="scss" scoped>
</style>