<template>
  <div>
  </div>
</template>

<script>


export default {
  mounted() {
    axios({
       method: "post",
       url: "/v1/miproduct/activity_info",
       data:''
    }).then(resp =>{
      console.log(resp.data)
      this.dataList = resp.data
    })
  }
};
</script>
<style lang="scss" scoped>

</style>
