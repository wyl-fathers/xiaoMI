<template>
  <transition name="slide-fade">
    <div class="page-component-up" v-if="isShow" @click="getTop">
      <span class="iconfont el-icon-caret-top">&#xe635;</span>
    </div>
  </transition>
</template>
<script>
export default {
  name: "BackTop",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    //  添加样式，鼠标hover上去，改变颜色
    addhoverClass(e) {
      if (e.type === "mouseover" && this.$el.classList) {
        this.$el.classList.add("hover");
      } else if (e.type === "mouseout" && this.$el.classList) {
        this.$el.classList.remove("hover");
      }
    },
    showIcon() {
      if (document.documentElement.scrollTop > 100) {
        this.isShow = true;
        this.$el.addEventListener("mouseover", this.addhoverClass);
        this.$el.addEventListener("mouseout", this.addhoverClass);
      } else if (document.documentElement.scrollTop < 100) {
        this.isShow = false;
      }
    },
    getTop() {
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop;
        let speed = Math.ceil(top / 5);
        document.documentElement.scrollTop = top - speed;
        if (top === 0) {
          clearInterval(timer);
        }
      }, 20);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showIcon);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.showIcon);
  }
};
</script>

<style lang="scss" >
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.3, 0.8, 1);
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
  // transform: translateY(-20px);
  opacity: 0;
}
.page-component-up {
  .el-icon-caret-top {
    font-style: normal;
    color: black;
  }

  background-color: white;
  position: fixed;
  right: 3rem;
  bottom: 8rem;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;
  text-align: center;
  z-index: 999;
}
.el-icon-caret-top {
  font-size: 0.36rem;
  margin-top: 7px;
  color: #ffffff;
  text-align: center;
  z-index: 1000;
}
.hover {
  background-color: #409eff;
}
</style>