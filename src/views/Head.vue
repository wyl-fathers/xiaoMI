<template>
  <div>
    <Input1></Input1>
    <HeaderSwiper></HeaderSwiper>
  </div>
</template>

<script>
import Input1 from "@/components/Input.vue";
import HeaderSwiper from "@/views/Header/HeaderSwiper.vue";
import axios from "axios";

export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {},
  components: {
    Input1,
    HeaderSwiper
  }
};
</script>

</script>

<style lang="scss" scoped>
</style>
