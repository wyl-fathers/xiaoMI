<template>
  <div>
    <div class="box">
      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3096aab3c6125bd525a96be31bec92c7.jpg" alt />
    </div>
    <div class="img">
      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8dc91f0f602ccde106a6b47ba150c55a.jpg" alt />
    </div>
    <Go class="go"></Go>
    <div class="log">
      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e339681b304166349a6a118f8c1e93e7.jpg" alt />
    </div>
    <div class="end" @click="check">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/63a0b9c082bbb3639ea521fb734456a3.jpg?w=1080&h=160&bg=FF5B29"
        alt
      />
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import Go from '@/components/Go2-1.vue'
export default {
  beforeMount () {
    this.$store.commit('NavHide', false)
  },
  methods: {
    check () {
      MessageBox({
        title: '没了老铁',
        message: '王永乐生吃DOM树',
        showCancelButton: true
      })
    }
  },
  beforeDestroy () {
    this.$store.commit('NavHide', true)
  },
  components: {
    Go
  }
}
</script>

<style lang="scss" scoped>
.go {
  display: block;
  position: fixed;
  top: 0.3rem;
  left: 0.35rem;
}
img {
  display: block;
}
.box {
  height: 1.88rem;
  width: 100%;
  img {
    height: 1.88rem;
    width: 100%;
  }
}
.img {
  height: 1.3888rem;
  width: 100%;
  img {
    height: 1.3888rem;
    width: 100%;
  }
}
.log {
  height: 2.4305rem;
  width: 100%;
  img {
    height: 2.4305rem;
    width: 100%;
  }
}
.end {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 0.5555rem;
  width: 100%;
  img {
    height: 0.5555rem;
    width: 100%;
  }
}
</style>
