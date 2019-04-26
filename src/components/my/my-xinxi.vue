<template>
    <div class="usershow">
        <div class="userinfo">
            <a class="userimg" href="#"><img src="../../assets/img/userimg.png" /></a>
            <div class="infolist">
                <p>gm_139^_^2660ljxj</p>
                <a href="#"><p>未实名</p></a>
            </div>
        </div>
        <a class="gift" href="#">
            <span><img src="../../assets/img/gift.gif" /></span>
        </a>
        <a class="messageBtn" href="#">
            <span><img src="../../assets/img/messagepng.png" /></span>
        </a>
        <a class="memberLevel" href="#">
            <span>G1</span>
            会员
        </a>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped>
.usershow{
    background: url(../../assets/img/userBg.png) no-repeat;
    background-size:cover;
    padding: 3.4rem 1.6rem 3.5rem 2.2rem;
    display: flex; 
    position: relative;
}
.userinfo{
    display: flex;
    align-content: flex-start;
}
.userimg img{
    width: 4rem;
    height: 4rem;
    border: 1px solid #fff;
    border-radius: 2.5rem;
}
.infolist{
    margin-left: 1rem;
    font-size: 1.8rem;
    color: #fff;
}
.infolist a{
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
}
.infolist a p{
    background: url(../../assets/img/noRealName.png) no-repeat .5rem center #B8B8B8;
    background-size: 1.2rem auto;
    display: inline-block;
    padding: 0.15rem 0.55rem .1rem 2rem;
    border-radius: 1.12rem;
}
.gift span img{
    width: 3.3rem;
    height: 2.6rem;
    position: absolute;
    top: .3rem;
    right: 4rem;
}
.messageBtn span img{
    width: 1.8rem;
    height: 1.7rem;
    position: absolute;
    top: 1.2rem;
    right: 1.3rem;
}
.memberLevel{
    background: url(../../assets/img/memberBg.png) no-repeat;
    background-size: 100%;
    padding: .6rem .4rem .8rem 2.6rem;
    position: absolute;
    top: 5rem;
    right: 0;
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    line-height: 1rem;
}
.memberLevel span{
    color: #FD0175;
    font-weight: 700;
    position: absolute;
    left: .4rem;
}
</style>
