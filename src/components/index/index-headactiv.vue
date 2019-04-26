<template>
    <div>
         <!-- 头条活动 -->
        <div class="headline">
            <div class="caption">
                <img src="../../assets/img/T1Bix_BsxT1RCvBVdK.png" />
            </div>
            <div class="head_content">
                <ul class="head_con_list">
                    <li>
                        <a href="#"><span>冰箱洗衣机</span><span>领卷下单立即减100</span></a>
                    </li>
                    <li>
                        <a href="#"><span>手机专场</span><span>领卷下单立即减100</span></a>
                    </li>
                    <li>
                        <a href="#"><span>国美黄金</span><span>领卷下单立即减100</span></a>
                    </li>
                    <li>
                        <a href="#"><span>冰箱洗衣机</span><span>领卷下单立即减100</span></a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 抢购 -->
        <div class="rush moudle">
            <div class="rush_title">
                <p>
                    <span>国美秒杀</span><span>20点场</span>
                </p> 
                <div class="gm_timer">
                    <div class="timerbox"> 
                        <span>{{h}}</span>
                    </div> :
                    <div class="timerbox">
                        <span>{{m}}</span>
                    </div> :
                    <div class="timerbox">
                        <span>{{s}}</span>
                    </div>
                </div> 
                <a class="sale_tips" href="#">
                    <span>秒抢好货</span>
                    <i class="iconfont icon-youjiantou"></i>
                </a>
            </div>
            <div class="rush_buy_slider">  
                <ul class="rush_goods">
                    <li>
                        <a href="#">
                            <div class="goods_info">
                                <div class="picture">
                                    <img src="../../assets/img/ms_mouse.jpg" />
                                    <span>推荐</span>
                                </div>
                                <div class="price">
                                    <span>￥28</span>
                                    <p>仅剩:50件</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="goods_info">
                                <div class="picture">
                                    <img src="../../assets/img/ms_children.jpg" />
                                    <span>推荐</span>
                                </div>
                                <div class="price">
                                    <span>￥28</span>
                                    <p>仅剩:50件</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="goods_info">
                                <div class="picture">
                                    <img src="../../assets/img/ms_zhuozi.jpg" />
                                    <span>推荐</span>
                                </div>
                                <div class="price">
                                    <span>￥28</span>
                                    <p>仅剩:50件</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="goods_info">
                                <div class="picture">
                                    <img src="../../assets/img/ms_mouse.jpg" />
                                    <span>推荐</span>
                                </div>
                                <div class="price">
                                    <span>￥28</span>
                                    <p>仅剩:50件</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="goods_info">
                                <div class="picture">
                                    <img src="../../assets/img/ms_children.jpg" />
                                    <span>推荐</span>
                                </div>
                                <div class="price">
                                    <span>￥28</span>
                                    <p>仅剩:50件</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="goods_info">
                                <div class="picture">
                                    <img src="../../assets/img/ms_zhuozi.jpg" />
                                    <span>推荐</span>
                                </div>
                                <div class="price">
                                    <span>￥28</span>
                                    <p>仅剩:50件</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 主题街1 -->
        <div class="brand moudle">
            <a class="brand_img" href="#"><img src="../../assets/img/pptm.png" /></a>
            <div class="brand_content">
                <a href="#"><img src="../../assets/img/tm_1.jpg" /></a>
                <a href="#"><img src="../../assets/img/tm_2.png" /></a>
                <a href="#"><img src="../../assets/img/tm_3.png" /></a>
                <a href="#"><img src="../../assets/img/tm_4.png" /></a>
            </div>
        </div>

        <!-- 主题街2 -->
        <div class="moudle brand_content">
            <a href="#"><img src="../../assets/img/pt.jpg" /></a>
            <a href="#"><img src="../../assets/img/tg.jpg" /></a>
            <a href="#"><img src="../../assets/img/zdm.jpg" /></a>
            <a href="#"><img src="../../assets/img/phb.jpg" /></a>
        </div>

    </div>    
</template>

<script>

    export default {
        data(){
            return {
                h:0, m:0, s:0
            }
        },
        mounted: function (){
            this.countTime()
        },
        methods:{
            // 倒计时
            countTime() {  
                //获取当前时间  
                var date = new Date();  
                var now = date.getTime(); 

                //设置截止时间  
                var str="2019/4/28 00:00:00";
                var endDate = new Date(str); 
                var end = endDate.getTime();  
                
                //时间差  
                var leftTime = end-now;

                //定义变量h,m,s保存倒计时的时间  
                var h,m,s;  
                if (leftTime>=0) {  
                    h = Math.floor(leftTime/1000/60/60);  
                    m = Math.floor(leftTime/1000/60%60);  
                    s = Math.floor(leftTime/1000%60);                     
                }

                    //将0-9的数字前面加上0，例1变为01
                h = checkTime(h);
                m = checkTime(m);
                s = checkTime(s);
                function checkTime(i){
                    if (i<10) {
                        i = "0"+i;
                    }
                    return i;
                }
                //将倒计时赋值到div中    
                document.getElementsByClassName("timerbox")[0].innerHTML = h;  
                document.getElementsByClassName("timerbox")[1].innerHTML = m;  
                document.getElementsByClassName("timerbox")[2].innerHTML = s;  
                //递归每秒调用countTime方法，显示动态时间效果  
                setTimeout(this.countTime,1000);  
            }
        }
    }

</script>

<style>
    @import '../../assets/css/index-headactiv.css';
</style>
