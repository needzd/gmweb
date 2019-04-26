<template> 
     <!-- 底部悬浮 -->
    <div class="bottom_nav">
        <ul class="bottom_nav_box">
            <li class="box1"> 
                <router-link :to='{name:"index"}'>
                    <img src="../../assets/img/shouye.png" >
                    <p>首页</p>
                </router-link>
            </li>
            <li class="box1">
                <router-link v-bind:to='{name:"classify"}'>
                    <img src="../../assets/img/fenglie.png" >
                    <p>分类</p>
                </router-link>
            </li>
            <li class="box1">
                <router-link v-bind:to='{name:"shopcart"}'>
                    <img src="../../assets/img/gouwuche.png" >
                    <p>购物车</p>
                </router-link>
            </li>
            <li class="box1">
                <router-link v-bind:to='{name:"my"}'>
                    <img src="../../assets/img/wode.png" >
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
.bottom_nav{
    background: #fff;
    border-top: .02rem solid #ccc;
    padding-top: .3rem;
}
.bottom_nav_box{
    display: flex;
    justify-content: center;
    align-items: center;
}
.box1{
    text-align: center;
    flex: 1;
    font-size: 1.2rem;
}
.box1 a{
    display: block;
    color: #999;
}
.box1 a img{
    width: 2.4rem;
    height: 2.4rem;
    margin: 0.08rem auto 0.18rem;
}
.box1:nth-child(1) a{
    color: #F20C59;
}
</style>
