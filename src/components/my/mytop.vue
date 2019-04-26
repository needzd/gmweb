<template>
    <!-- 顶部 -->
    <header class="header">
        <div class="head_left">
            <a href="#"><img src="../../assets/img/zuojiantou.png" /></a>
        </div>
        <div class="head_center">
            <h3>我的国美</h3>
        </div>
        <div class="head_right">
            <a href="#"><img src="../../assets/img/yuandian.png" /></a>
        </div> 
    </header> 
</template>

<script>
export default{
}
</script>

<style scoped>
/* 顶部 */
.header{
    background: #fff;
    border-bottom: 1px solid #ccc;
    height: 4.4rem;
    display: flex;
    justify-content: space-between;
}
.head_left a img{
    width: 1.3rem;
    margin: .75rem 1.5rem;
}
.head_center{
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.head_center h3{
    font-size: 1.8rem;
    font-weight: 100;
}
.head_right a img{
    width: 2.5rem;
    margin-right: 1.5rem;
    margin-top: 1.4rem;
}
</style>
