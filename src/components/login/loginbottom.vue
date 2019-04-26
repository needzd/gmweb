<template>
    <div class="container">
         <div class="other">
            <span>使用一下账户登录</span>
        </div>
        <div class="other_login">
            <a href="#">
                <img src="../../assets/img/mdhy.png" />
                <span>门店会员</span>
            </a>
            <a href="#">
                <img src="../../assets/img/QQ.png" />
                <span>QQ</span>
            </a>
            <a href="#">
                <img src="../../assets/img/weibo.png" />
                <span>新浪微博</span>
            </a>
            <a href="#">
                <img src="../../assets/img/zfb.png" />
                <span>支付宝</span>
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.container{
    padding: 0 3.85rem;
    margin-top: .5rem;
}
.other{
    text-align: center;
    margin-top: 10rem;
    border-top: .01rem solid #ddd;
}
.other span{
    font-size: 1.6rem;
    height: 2rem;
    width: 10.7rem;
    color: #999;
    background: #fff;
    top: -.8rem;
    left: 6.3rem;
    display: block;
    padding: 0 1rem;
    position: relative;
}
.other_login{
    width: 100%;
    display: flex;  
    margin: 1.5rem 0;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    text-align: center;
}
.other_login a{
    color: #666;
}
.other_login a img{
    width: 3.87rem;
    height: 3.87rem;
    margin: 0 auto 1rem;
}

</style>
