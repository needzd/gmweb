<template>
    <!-- 轮播图2 -->
    <div class="moudle banner02">
        <div class="swiper-container swiper3">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/img/banner01.jpg" /></div>
                <div class="swiper-slide"><img src="../../assets/img/banner02.jpg" /></div>
                <div class="swiper-slide"><img src="../../assets/img/banner03.jpg" /></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swp3"></div>
        </div>
    </div>       
</template>
    
<script>
	import Swiper from 'swiper';

	export default{
		name:"banner",
		data(){
			return{
			}
		},
		mounted(){
            new Swiper('.swiper3', {
                loop:true,
                autoplay:{
                    delay:2000,
                    disableOnInteracion:false,
                },
                pagination: {
                el: '.swp3',
                },
            });
        }
	}
</script>

<style scoped>
/* 轮播图1 */
.banner{
height: 12.18rem;
}   
.swiper-container {
    width: 100%;
    height: 100%;
  }
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.banner02 .swiper3 .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
}
.banner02 .swiper3 .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
   
</style>
