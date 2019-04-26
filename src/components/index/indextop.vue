<template>
     <!-- 搜索 -->
    <div class="search_box">
        <div class="header">
            <div class="gome_logo">
                <a href="#"><img src="../../assets/img/logo.png" /></a>
            </div>
           <div class="usr_bar">
                <p>
                    <a class="cart" href="#">
                        <img src="../../assets/img/grass_cart.png" />
                    </a>
                    <router-link :to='{name:"login"}'>登录</router-link>
                </p>
            </div>
             <div class="search">
                <div class="search_con">
                    <div class="sea_con_style">
                        <img src="../../assets/img/search_icon.png" />
                        <input type="search" placeholder="彩电领劵满1000减100元">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
	name:"index",
	data(){
		return{
		}
	}
}
</script>

<style scoped>
    @import '../../assets/css/indextop.css';
</style>