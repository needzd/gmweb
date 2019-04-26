<template>
    <!-- 搜索 -->
    <header class="header">
        <div class="head_left">
            <a href="#"><img src="../../assets/img/zuojiantou.png" /></a>
        </div>
        <div class="head_center">
            <span>商品</span>
            <span>详情</span>
            <span>评价</span>
        </div>
        <div class="head_right">
            <a href="#"><img src="../../assets/img/yuandian.png" /></a>
        </div>     
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style>
/* 搜索 */
.header{
    background: #fff;
    border-bottom: 1px solid #ccc;
    height: 4.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.head_left a img{
    width: 1.3rem;
    margin: 0 1.5rem;
}
.head_center{
    display: flex;
    font-size: 1.7rem;
    justify-content: space-between;
}
.head_center span{
    line-height: 4.4rem;
    margin: 0 1rem;
    padding: 0 .5rem;
    height: 4.4rem;
}
.head_right a img{
    width: 2.3rem;
    margin-right: 1.3rem;
}
</style>
