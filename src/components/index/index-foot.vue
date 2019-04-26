<template>
   <!-- 公共底部 -->
    <footer class="common_footer">
        <div class="user_bar">
            <div class="user_bar_list">
                <a href="login.html">登录</a>|
                <a href="reg.html">注册</a>|
                <a href="#">更多</a>|
                <a href="#">反馈</a>
            </div>
        </div>
        <div class="foot_msg">
            <p>
                <a href="#">
                    互联网药品信息服务资格证编号(京)-经营性-2019-0025
                </a>
            </p>
            <p>
                <a href="#">
                    <span>经营证照</span>
                </a>
                <a href="#">
                    <span>增值电信业务经营许可证</span>
                </a>
                <a href="#">
                    <span>出版物经营许可证</span>
                </a>
            </p>
            <p><a href="#">网络文化经营许可证沪网文[2017]5537-436号</a></p>
            <p>
                <span>京公安网备11010502027062</span>
                <span>沪B2-20120004号</span>
            </p>
            <p>沪ICP备11009419号</p>
            <p>网络食品销售第三方平台提供者备案：沪网食备A0015号</p>
            <p class="foot_msg_p">copyright ©  2000-2019 gome.com.cn</p>
            <p>客服热线：<a href="#">4008-113-333</a></p>
        </div>
    </footer>
</template>

<script>

</script>

<style scoped>
/* 公共底部 */
.common_footer{
    background: #fff;
}
.user_bar{
    padding: 1.5rem 3rem;
    border-bottom: .02rem solid #ccc;
}
.user_bar_list{
    display: flex;
    color: #888;
}
.user_bar_list a{
    flex: 1;
    color: #888;
    font-size: 1.3rem;
    padding: 0 .7rem;
    text-align: center;
}
.foot_msg{
    padding-bottom: 1.5rem;
    padding-top: 1.2rem;
}
.foot_msg p{
    font-size: 1rem;
    color: #7A7F85;
    line-height: 1.5rem;
    margin-bottom: .5rem; 
    text-align: center;
}
.foot_msg p a{
    color: #7A7F85;
}
.foot_msg_p{
    padding-top:.5rem;
}
</style>
