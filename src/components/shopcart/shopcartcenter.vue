<template>
    <div class="content">
        <gologin/>
        <shopcartcart/>
        <shopcarttuijian/> 
        <shopcarttuijianshop/>    
    </div>
</template>

<script>
    import gologin from "./shopcart-gologin";
    import shopcartcart from "./shopcart-cart";
    import shopcarttuijian from "./shopcart-tuijian";
    import shopcarttuijianshop from "../index/index-likelist"

    export default{
        components:{
            gologin,
            shopcartcart,
            shopcarttuijian,
            shopcarttuijianshop
        }
    }
</script>

<style scoped>
    .content{
        flex: 1;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
