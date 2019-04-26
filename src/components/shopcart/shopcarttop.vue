<template>
    <!-- 搜索 -->
    <header class="header">
            <div class="head_left">
                <a href="#"><img src="../../assets/img/zuojiantou.png" /></a>
            </div>
            <div class="head_center">
                <span>购物车</span>
            </div>
            <div class="head_right">
                <a href="#"><img src="../../assets/img/yuandian.png" /></a>
            </div>      
    </header>
</template>

<script>

</script>
<style>
/* 搜索 */
.header{
    background: #fff;
    border-bottom: 1px solid #ccc;
    height: 4.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.head_left a img{
    width: 1.3rem;
    margin: 0 1.5rem;
}
.head_center{
    font-size: 1.8rem;
}
.head_right a img{
    width: 2.3rem;
    margin-right: 1.3rem;
}
.content{
    width: 100%;
    flex:1;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
