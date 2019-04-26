<template>
    <!-- 商品 -->
    <div class="big_img_wrapper">
        <!-- 图片轮播 -->
        <div class="banner_img">
            <div class="swiper-container swiper1"  >
                <div class="swiper-wrapper"  >
                    <div class="swiper-slide" v-for="(items,key) in likeshop.bimgs" :key="key">
                        <a href="#"><img :src="items.img"></a>
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination swp1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default{
        props:["shopid"],
        data(){
            return{
                likeshop:{}
            }
        },
    
        created(){
         fetch('http://localhost:3000/likeshop?shopid='+this.shopid)  
		  .then((res)=>{
		     return res.text(); // res.text()是一个Promise对象
		  })
		  .then((res)=>{
            this.likeshop = JSON.parse(res)[0];
            console.log(this.likeshop) 
            // console.log(this.bimg)

		  }) 
        },
        updated(){
            new Swiper('.swiper1',{
            pagination: {
            el: '.swp1',
            type: 'fraction',
            },
        })
        }

    }

</script>

<style scoped>
    /* 图片轮播啊*/
.big_img_wrapper{
    background: #fff;
    width: 100%;
}
.banner_img{
    margin:  0 10%;
}
.swiper-slide img{
    width: 100%;
}
.banner_img{
    background: url(../../../static/images/lazy_img.jpg) center no-repeat;
    background-size: cover;
}
.swiper-pagination-fraction {
    bottom: 10px;
    left: 80%;
    width: 15%;
    padding: .3rem .3rem;
    border-radius: 2.2rem;
    background: #999;
    color: #fff;
}
</style>
