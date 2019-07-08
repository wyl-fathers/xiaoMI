<template>
  <div>
    <Swi>
      <div class="swiper-slide" v-for="data in dataList" :key="data.material_id">
        <img :src="data.img_url" />
      </div>
    </Swi>
  </div>
</template>

<script>
import axios from "axios";
import Swi from "@/components/Swiper.vue";
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {},
  components: {
    Swi
  }
};
</script>

<style lang="scss" scoped>
</style>