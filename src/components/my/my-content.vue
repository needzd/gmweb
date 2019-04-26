<template>
    <div>
        <ul class="sub_info">
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/daifukuai.png" />
                    <span>待付款</span>
                </a>
            </li>
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/daishouhuo.png" />
                    <span>待收货</span>
                </a>
            </li>
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/daipingjia.png" />
                    <span>待评价</span>
                </a>
            </li>
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/tuihou.png" />
                    <span>退款/售后</span>
                </a>
            </li>
            <li class="last_list">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/dingdan.png" />
                    <span class="fq_sanjx"></span>
                    <span>全部订单</span>
                    <span class="fq_ico">查看电子发票</span>
                </a>
            </li>
        </ul>
        <ul class="sub_info">
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/daifukuai.png" />
                    <span>待付款</span>
                </a>
            </li>
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/daishouhuo.png" />
                    <span>待收货</span>
                </a>
            </li>
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/daipingjia.png" />
                    <span>待评价</span>
                </a>
            </li>
            <li>
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/tuihou.png" />
                    <span>退款/售后</span>
                </a>
            </li>
            <li class="last_list">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/dingdan.png" />
                    <span class="fq_sanjx"></span>
                    <span>全部订单</span>
                </a>
            </li>
        </ul>

        <ul class="sub_info sub_info_two">
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/huiyuanbu.png" />
                    <span>会员俱乐部</span>
                </a>
            </li>
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/viphuiyuanka.png" />
                    <span>我的会员卡</span>
                </a>
            </li>
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/shoucang.png" />
                    <span>收藏</span>
                </a>
            </li>
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/fapiaozhushou.png" />
                    <span>发票助手</span>
                </a>
            </li>
        </ul>
        <ul class="sub_info sub_info_two">
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/yuyue.png" />
                    <span>我的预约</span>
                </a>
            </li>
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/meidian.png" />
                    <span>我的美店</span>
                </a>
            </li>
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/pingtuan.png" />
                    <span>我的拼团</span>
                </a>
            </li>
            <li class="sun_info_box">
                <a class="sub_info_list" href="#">
                    <img src="../../assets/img/yijian.png" />
                    <span>服务规则</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped>
.sub_info{
    margin-bottom: 1rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
}
.sub_info li{
    flex: 1;
    padding:1.5rem 0;
    box-sizing: border-box;
    text-align: center;
}
.sub_info_list{
    display:block;
    font-size: 1.3rem;
    color: #666;
    position: relative;
}
.sub_info_list img{
    margin: 0 auto 1.2rem;
    width: 2.5rem;
    height: 2.5rem;
}
.last_list{
    background: #fcfcfc;
    border-left: .002rem solid #f1f1f1;
}
.fq_ico{
    display: block;
    font-size: 1rem;
    margin-top: .1rem;
    color: #999;
}
.sun_info_box{
    flex-shrink: 0;
}
.sub_info_two{
    margin-bottom: 0;
}
.fq_sanjx{
    display: block;
    width: 0;
    height: 0;
    border: .6rem solid transparent;
    border-left-color: #f1f1f1;
    position: absolute;
    top: 2.5rem;
}
.fq_sanjx::after{
    content: " ";
    display: block;
    width: 0;
    height: 0;
    border: .4rem solid transparent;
    border-left-color: #fff;
    position: absolute;
    top: -.4rem;
    left: -.6rem;
}
</style>
