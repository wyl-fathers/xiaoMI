<template>
  <div>
    <HeaderDown style="background: transparent">
      <span>小米众筹</span>
    </HeaderDown>
    <div class="box">
      <div>
        <img src="//i8.mifile.cn/b2c-mimall-media/190b0d110d26aaad9d73e7761f08f8f6!720x792.jpg" alt />
      </div>
    </div>
    <div>
      <h2>
        最新众筹
        <span>什么是众筹?</span>
      </h2>
    </div>
    <div class="content">
      <div class="wyl_box">
        <div></div>
      </div>
      <p>暂无相关数据!</p>
    </div>
    <Cnxh></Cnxh>
  </div>
</template>

<script>
import Cnxh from "@/components/Cnxh.vue";
import HeaderDown from "@/components/HeaderDown.vue";
export default {
  data() {
    return {};
  },
  components: {
    HeaderDown,
    Cnxh
  },
  beforeMount() {
    this.$store.commit("NavHide", false);
  },
  beforeDestroy() {
    this.$store.commit("NavHide", true);
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
}
.box {
  width: 100%;
  height: 0.8714rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0;
  > div {
    height: 0.8714rem;
    width: 3.41rem;
    border-radius: 0.1rem;
    border: 0 transparent solid;
    overflow: hidden;
    // background: yellow;
  }
}
h2 {
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #ccc;
    font-weight: normal;
    font-size: 0.14rem;
  }
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 2.05rem;
  .wyl_box {
    height: 1.9rem;
    display: flex;
    align-items: center;
    div {
      background: url("../../../public/img/wyl.jpg") center;
      background-size: 100% 100%;
      height: 1.4583rem;
      width: 1.4583rem;
    }
  }
  width: 100%;
}
</style>