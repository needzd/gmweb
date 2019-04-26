<template>
    <!-- 底部 -->
    <section class="submit_shop">
        <div class="choose_all">
            <input type="checkbox">
            <span>全选</span>
        </div>
        <div class="total_pricer">
            <span>29.8</span>
            <span>￥</span>
            <span>总计:</span>
        </div>
        <div class="shop_btn">
            去结算(<span>1</span>)
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* 底部 */
.submit_shop{
    background: #f9f9f9;
    border-top: 1px solid #d2d2d2;
    height: 4rem;
    line-height: 4rem;
    padding-left: 1.2rem;
    display:flex;
}
.choose_all{
    font-size: 1.6rem;
    color: #F20C59;
}
.total_pricer{
    width: 57%;
    padding-right: 2%;
    font-size: 1.4rem;
}
.total_pricer span:nth-child(1),.total_pricer span:nth-child(2){
    color: #F20C59;
    font-weight: 600;
}
.total_pricer span{
    float: right;
}
.shop_btn{
    text-align: center;
    width: 25%;
    height: 4rem;
    font-size: 1.6rem;
    color:#fff;
    background-image: -webkit-linear-gradient(0deg,#FA1E8C 0,#FC1E56 100%);
}
</style>
