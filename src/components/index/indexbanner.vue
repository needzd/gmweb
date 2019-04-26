<template>
	<!-- 轮播图1 -->
	<section class="banner" id="bannerbox">
		<div class="swiper-container swiper1">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../../assets/img/banner1.jpg" /></div>
				<div class="swiper-slide"><img src="../../assets/img/banner2.jpg" /></div>
				<div class="swiper-slide"><img src="../../assets/img/banner3.jpg" /></div>
				<div class="swiper-slide"><img src="../../assets/img/banner4.jpg" /></div>
				<div class="swiper-slide"><img src="../../assets/img/banner5.jpg" /></div>
				<div class="swiper-slide"><img src="../../assets/img/banner1.jpg" /></div>
				<div class="swiper-slide"><img src="../../assets/img/banner2.jpg" /></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination swp1"></div>
		</div>
	</section>	
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
            new Swiper('.swiper1', {
                loop:true,
                autoplay:{
                    delay:2000,
                    disableOnInteracion:false,
                },
                pagination: {
                el: '.swp1',
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
.swiper1 .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
}
.swiper1 .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
</style>
