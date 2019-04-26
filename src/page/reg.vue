<template>
    <div class="box">
        <!-- 搜索 -->
        <header class="header">
            <div class="head_left">
                <a href="#"><img src="../assets/img/zuojiantou.png" /></a>
            </div>
            <div class="head_right">
                <h2>用户注册</h2>
            </div>
        </header>

        <!-- 主体 -->
        <section class="container">
            <form action="" method="">
                <div class="accout_login">
                    <div class="user">
                        <span class="user_icon"></span>
                        <div class="user_code">
                            <input type="text" placeholder="请输入手机号码">
                        </div>
                    </div>
                    <div class="reg_btn">
                        <a href="#">同意协议并注册</a>
                    </div>
                </div>
            </form>
            <div  class="readed">
                <p>
                    我已阅读并同意以下协议，接受免除或限制责任，
                    诉讼管辖约定等条款，愿意同步创建账户    
                </p>
                <p>
                    <a href="#">《国美平台服务协议》</a>
                    <a href="#">《国美平台隐私政策》</a>
                    <a href="#">《美付宝服务协议》</a>
                </p>    
            </div>
        </section>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.box{
    height: 100%;
    background: #fff;
}
/* 搜索 */
.header{
    height: 4.4rem;
    display: flex;
}
.head_left{
    float: left;
}
.head_left a img{
    width: 1.35rem;
    margin: 1.25rem 1.35rem;
}
.head_right{
    width: 100%;
    text-align: center;
    margin-left: -2rem;
}
.head_right h2{
    font-size: 1.6rem;
    font-weight: 100;
    line-height: 4.4rem;
}

/* 主体 */

.container{
    padding: 1.4rem 2.6rem 1.2rem;
    margin-top: .1rem;
}
.user{
    padding: 1rem 0;
    display: flex;
    position: relative;
    border-bottom: .02rem solid #ececec;
}
.user_icon{
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    margin-right: .5rem;
    background: url(../assets/img/icon.png) no-repeat;
    background-size: cover; 
}
.user_code{
    flex: 1;
    font-size: 1.6em;
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
.reg_btn{
    background: -webkit-linear-gradient(left,#FF94CB 0,#FF80AA 100%);
    border-radius:2.55rem;
    height: 3.88rem;
    font-size: 1.6rem;
    width: 98%;
    margin: 3rem auto 0;
    text-align: center;
    line-height: 3.88rem;
    box-sizing: border-box;
}

.reg_btn a{
    color: #fff;  
}
.readed{
    margin-top: 2.3rem;
    line-height: 1.8rem;
}
.readed p{
    font-size: .26rem;
    color: #999; 
}
.readed a{
    color: #78bee9;
    font-size: .24rem;
} 
</style>
