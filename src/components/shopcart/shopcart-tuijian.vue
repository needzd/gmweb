<template>
    <div class="guesslike_title">
        <p class="line"></p>
        <h4><span class="guess_bg"></span>为你推荐</h4>
        <p class="line"></p>
    </div>
</template>

<script>

</script>

<style scoped>
/* 为你推荐 */
.guesslike_title{
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
}
.guesslike_title h4{
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0 .8rem;
    color: #F20C59;
}
.line{
    width: 2.2rem;
    height: 0.15rem;
    background: -webkit-linear-gradient(left,#FF0027,#D900B4,#F0F)
}
.guess_bg{
    background: url(../../assets/img/icon_tuijian.png) no-repeat;
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    background-size: contain;
    vertical-align: middle;
    margin-right: .6rem;
}
</style>
