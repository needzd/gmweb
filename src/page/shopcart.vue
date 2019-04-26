<template>
    <div class="box">
        <shopcarttop/>
        <shopcartcenter/>
        <shopcartfoot/>
    </div>    
</template>

<script>
    import shopcarttop from "../components/shopcart/shopcarttop";
    import shopcartcenter from "../components/shopcart/shopcartcenter";
    import shopcartfoot from "../components/shopcart/shopcartfoot"

    export default {
        components:{
            shopcarttop,
            shopcartcenter,
            shopcartfoot
        }
    }
</script>

<style scoped>
.box{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.theme_street a img{
    width: 100%;
    height: 100%;  
}
</style>
