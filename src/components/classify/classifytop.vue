<template>
     <!-- 搜索 -->
    <header class="header">
        <div class="head_left">
            <a href="#"><img src="../../assets/img/zuojiantou.png" /></a>
        </div>
        <div class="head_center">
            <div class="input_box">
                <input type="text" placeholder="花呗满99随机立减">
                <img src="../../assets/img/search_icon.png" />
            </div>
        </div>
        <div class="head_right">
            <a href="javascript:;"><img src="../../assets/img/yuandian.png" /></a>
        </div>   
    </header>
</template>

<script>

</script>

<style scoped>
/* 搜索 */
.header{
    background: #fff;
    border-bottom: 1px solid #ccc;
    height: 4.4rem;
    z-index: 2;
}
.head_left{
    float: left;
}
.head_left a img{
    width: 1.5rem;
    margin: 1rem 1.5rem;
}
.head_center{
    float: left;
    margin-top: .7rem;
}
.input_box{
   
    position: relative;
}
.input_box input{
    width: 120%;
    height: 3rem;
    padding: 0 1rem 0 1rem;
    text-align: left;
    background-color: #f6f6f6;
    display: block;
    border: none;
    border-radius: 11rem;
    outline: 0;
}
.input_box img{
    width: 1.6rem;
    position: absolute;
    top: 0.7rem;
    right: -4rem;
}
.head_right{
    float: right;
}
.head_right a img{
    width: 2.5rem;
    margin-right: 1.2rem;
    margin-top: 1.4rem;
}
</style>
