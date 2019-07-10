<template>
    <div class="cartbuy"></div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return{}
    },


    mounted() {
        axios({
            method:"post",
            url:"v1/cart/index",
            data:
            "client_id=180100031051&channel_id=0&webp=1&access_code="
        }).then(res=>{
            console.log(res.data)
        });
    }

}


</script>

<style lang="scss" scoped>

</style>


