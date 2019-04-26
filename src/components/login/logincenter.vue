<template>
    <div class="container">
         <form action="" method="">
            <a class="mxlogo" href="javascript:;">
                <img src="../../assets/img/logo_login.png" />
            </a>
            <ul class="login_style">
                <li class="login_style_active">账号密码登录</li>
                <li>短信验证码登录</li>
            </ul>
            <div class="login_style_c">
                <div class="accout_login">
                    <div class="user">
                        <span class="user_icon"></span>
                        <div class="user_code">
                            <input type="text" placeholder="手机号/邮箱/用户名/门店会员卡号">
                            <span class="del_btn"></span>
                        </div>
                    </div>
                    <div class="pwd">
                        <span class="pwd_icon"></span>
                        <div class="user_code">
                            <input type="text" placeholder="请输入密码">
                            <span class="del_btn del"></span>
                            <span class="eys_btn"></span>
                        </div>
                    </div>
                    <div class="qk_login">
                        <router-link :to='{name:"reg"}'>手机号快速注册</router-link>
                        <a href="#">找回密码</a>
                    </div>
                    <div class="login_btn">
                        <a href="#">登录</a>
                    </div>                  
                </div>
            </div>
        </form>
    </div>
</template>

<script>


</script>

<style scoped>
.container{
    padding: 0 3.85rem;
    margin-top: .5rem;
}
.mxlogo img{
    width: 10.5rem;
    height: 3.5rem;
    margin: 0 auto .35rem;
}
.login_style{
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-around;
}
.login_style li{
    padding: 1.2rem 0;
    flex: 1;
    text-align: center;
    color: #999;
}
.login_style .login_style_active{
    color: #F20C59;
    border-bottom: 2px solid #F20C59;
}
.user{
    padding: 1rem 0;
    display: flex;
    position: relative;
    border-bottom: .02rem solid #ececec;
}
.user_icon{
    background: url(../../assets/img/icon.png) no-repeat;
}
.user_icon, .pwd_icon{
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    margin-right: .1rem;
    background-size: cover; 
}
.user_code{
    flex: 1;
    font-size: 1.3rem;
    color: #333;
}
.user_code input{
    outline: none;
    width: 100%;
    letter-spacing: .01rem;
    border: 0;
}
.user_code input::placeholder{
    color: #ccc;
    font-size: 1.3rem;
    letter-spacing: .01rem;
}
.del_btn{
    background: url(../../assets/img/err.png);
    background-size:cover; 
    width: .3rem;
    height: .3rem;
    position: absolute;
    top: 35%;
    right: 0;
    display: none;
}
.del{
    right: .6rem;
    top: 45%;
}
.pwd{
    padding: 1.45rem 0 1.2rem 0;;
    display: flex;
    position: relative;
    border-bottom: .02rem solid #ececec;
}
.eys_btn{
    background: url(../../assets/img/eys.png);
    background-size:cover; 
    width: 1.33rem;
    height: 1.33rem;
    position: absolute;
    top: 45%;
    right: 3px;
}
.pwd_icon{
    background: url(../../assets/img/pass.png) no-repeat;
}
.pwd_icon{
    background-size: contain;
}
.qk_login{
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
}
.qk_login a{
    color:#78BEE9;
}
.login_btn{
    background: -webkit-linear-gradient(left,#FF94CB 0,#FF80AA 100%);
    border-radius: 2.55rem;
    height: 3.88rem;
    font-size: 1.6rem;
    width: 98%;
    margin: 3rem auto 0;
    text-align: center;
    line-height: 3.88rem;
    box-sizing: border-box;
}
.login_btn a{
    color: #fff;  
}
</style>
