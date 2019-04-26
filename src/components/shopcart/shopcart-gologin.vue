<template>
    <!-- 登录提示 -->
    <section class="go_login">
        <a href="login.html">
            立即登录，同步电脑和手机购物车中的商品
            <button class="gobtn">去登录</button> 
        </a>
    </section>   
</template>

<script>
export default {
    
}
</script>


<style scoped>
/* 登录提示 */
.go_login{
    height: 3.1rem;
    line-height: 3.1rem;
    font-size: 1.3rem;
    padding-left: 1.3rem;
    background: #fff;
}
.go_login a{
    color: #999;
    display: block;
}
.gobtn{
    color: #666;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 1.3rem;
    border-radius: 2.2rem;
    position: relative;
    right: -3.5rem;
}

</style>
