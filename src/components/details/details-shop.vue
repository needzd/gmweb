<template>
    <div>
        <detailsshopbanner :shopid="shopid"/>
        <detailsshopinfo :shopid="shopid"/> 
        <detailsshopadd/>      
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import detailsshopbanner from './details-shopbanner';
    import detailsshopinfo from './details-shopinfo';
    import detailsshopadd from './details-shopadd';



    export default{
        components:{
            detailsshopbanner,
            detailsshopinfo,
            detailsshopadd
        },
        data(){
            return{
                shopid:this.$route.params.shopid
            }
        },
    }
    
</script>

<style scoped>
   
</style>
