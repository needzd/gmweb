<template>
<!-- 猜你喜欢 -->
    <div class="mylike1">
        <div class="mylike1_title">
            <h4>
                <span></span>
                你可能喜欢
            </h4>
        </div>

    </div>
</template>

<script>
export default{
}
</script>

<style scoped>
/* 猜你喜欢1 */
.mylike1{
    box-sizing: border-box;
}
.mylike1_title{
    margin: 1.2rem 0;
    text-align: center;
    height: 1.5rem;
}
.mylike1_title h4{
    font-size: 1.3rem;
    line-height: 1.3rem;
    font-weight: 100;
    width: 10rem;
    margin: 0 auto;
    color: #999;
    background-color: #f2f2f2;
    position: relative;
    z-index: 1; 
}
.mylike1_title h4 span{
    background: url(../../assets/img/arrow_up.png) left center no-repeat;
    background-size: contain;
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
}
.mylike1_title::after{
    content: " ";
    border-bottom: 1px solid #c2c2c2;
    display: block;
    margin-top: -.9rem;
}
</style>
