<template>
  <div>
    <div id="nav">
      <ul>
        <router-link tag="li" active-class="active" to="/Best">
          <i class="iconfont">&#xe69f;</i>
          首页
        </router-link>
        <router-link tag="li" active-class="active" to="/Category">
          <i class="iconfont">&#xe6a1;</i>
          分类
        </router-link>
        <router-link tag="li" active-class="active" to="/Cart">
          <i class="iconfont">&#xe64f;</i>
          购物车
        </router-link>
        <router-link tag="li" active-class="active" to="/User">
          <i class="iconfont">&#xe687;</i>
          我的
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: ['\ue69f', '\ue69e', '\ue64f', '\ue687'],
      dataList: ['首页', '分类', '购物车', '我的']
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  height: 0.52rem;
}
ul {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    width: 25%;
    height: 0.52rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.12rem;
    i {
      font-size: 0.23rem;
    }
  }
}
.active {
  color: #f60;
}
</style>
