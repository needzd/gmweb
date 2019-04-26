<template>
    <div>
     <!-- 附近门店 -->
        <div class="moudle store_moudle">
            <span>朝阳区门店</span>
            <a href="#">北京国美西坝河店</a>
        </div>
        <!-- 附近门店员工推荐 -->
        <div class="store_info_moudle">
            <div class="reseverbox">
                <a class="resever" href="#">
                    <div class="resever_left">
                        <span class="resever_tx"><img src="../../assets/img/touxiang.png" /></span>
                        <span class="resever_bgImg"></span>
                    </div>
                    <div class="resever_center">
                        <span>太过分</span>
                        <span class="resever_star"></span>
                        <span>已服务161人</span>
                    </div>
                </a>
                <a class="resever_yy" href="#">
                    <em></em>
                    预约
                </a>
            </div>
        </div>

        <!-- 评价模块 -->
        <div class="moudle evaluate_moudle">
            <div class="evaluate_top">
                <p>评价(<span>666</span>)</p>
                <p>好评度<span>98.5</span><span>%</span></p>
            </div>
            <div class="evaluate_list_item">
                <div class="message_top">
                    <img src="../../assets/img/T1YvKTBsDv1RCvBVdK.png" />
                    <p>q***a</p>
                    <img src="../../assets/img/T1N4CsBCLT1RCvBVdK (1).png" />
                    <span class="resever_star"></span>
                </div>
                <p class="message_text"> 
                    物流是顺丰，快得令人发指。鼠标薄，无声，
                    可以充电，看起来很先进的样子。希望质量好，
                    能用久一点。
                </p>
                <p class="message_desc">磨砂照</p>
            </div>
            <div class="evaluate_top">
                <p>有评价(<span>666</span>)</p>
            </div>
            <div class="comment_wrap">  
                <ul class="comment_list">
                    <li class="comment_list_con">
                        <img src="../../assets/img/pingjia1.jpg" >
                        <span class="comment_count">1张</span>
                        <p>XXddf</p>
                        <img src="../../assets/img/T1N4CsBCLT1RCvBVdK (1).png" >
                    </li>
                    <li class="comment_list_con">
                        <img src="../../assets/img/pingjia1.jpg" >
                        <span class="comment_count">1张</span>
                        <p>XXddf</p>
                        <img src="../../assets/img/T1N4CsBCLT1RCvBVdK (1).png" >
                    </li>
                    <li class="comment_list_con">
                        <img src="../../assets/img/pingjia1.jpg" >
                        <span class="comment_count">1张</span>
                        <p>XXddf</p>
                        <img src="../../assets/img/T1N4CsBCLT1RCvBVdK (1).png" >
                    </li>
                    <li class="comment_list_con">
                        <img src="../../assets/img/pingjia1.jpg" >
                        <span class="comment_count">1张</span>
                        <p>XXddf</p>
                        <img src="../../assets/img/T1N4CsBCLT1RCvBVdK (1).png" >
                    </li>
                    <li class="comment_list_con">
                        <img src="../../assets/img/pingjia1.jpg" >
                        <span class="comment_count">1张</span>
                        <p>XXddf</p>
                        <img src="../../assets/img/T1N4CsBCLT1RCvBVdK (1).png" >
                    </li>
                    <li class="comment_list_con">
                        <img src="../../assets/img/pingjia1.jpg" >
                        <span class="comment_count">1张</span>
                        <p>XXddf</p>
                        <img src="../../assets/img/T1N4CsBCLT1RCvBVdK (1).png" >
                    </li>
                </ul>

            </div>
            <div class="evaluate_nav">
                <ul class="evaluate_nav_con">
                    <li>
                        <a href="#">
                            <span class="evaluate_nav_con_bg"></span>
                            全部评价（
                            <em>99</em>
                            )
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="evaluate_nav_con_bg"></span>
                            购买咨询（
                            <em>99</em>
                            )
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default{  
        mounted(){
            new Swiper('.swiper1',{
                pagination: {
                el: '.swp1',
                type: 'fraction',
                },
            });

            new Swiper('.swiper2',{
                pagination: {
                el: '.swp2',
                type: 'bullets',
                },
            })
        }
    }
</script>

<style>
    @import '../../assets/css/details-pinjia.css';

    .moudle{
        margin-top: 1rem;
    }
</style>

