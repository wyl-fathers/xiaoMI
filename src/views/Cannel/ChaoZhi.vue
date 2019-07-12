<template>
  <div>
    <Go class="go"></Go>
    <Swi :key="dataList.length">
      <div class="swiper-slide" v-for="data in dataList" :key="data.material_id">
        <img :src="data.img_url" />
      </div>
    </Swi>
  </div>
</template>

<script>
import Go from "@/components/Go2-1.vue";
import Swi from "@/components/Swiper.vue";

export default {
  data() {
    return {
      dataList: []
    };
  },
  beforeMount() {
    this.$store.commit("NavHide", false);
  },
  mounted() {},

  beforeDestroy() {
    this.$store.commit("NavHide", true);
  },
  components: {
    Go,
    Swi
  }
};
</script>

<style lang="scss" scoped>
.go {
  display: block;
  position: fixed;
  top: 0.3rem;
  left: 0.35rem;
}
</style>