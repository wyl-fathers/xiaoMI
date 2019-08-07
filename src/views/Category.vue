<template>
  <div>
    <Category></Category>
    <CategoryBody></CategoryBody>
  </div>
</template>

<script>
import Category from '@/views/Category/CategoryHead.vue'
import CategoryBody from '@/views/Category/CategoryBody.vue'
export default {
  data () {
    return {}
  },
  components: {
    Category,
    CategoryBody
  }
}
</script>

<style lang="scss" scoped>
</style>
