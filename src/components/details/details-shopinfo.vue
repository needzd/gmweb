<template>
    <div>
        <!-- 商品信息 -->
        <div class="info_moudle">
            <!-- 商品标题 -->
            <div class="shop_title">
                <div class="title_left">
                    <span></span>
                    <h4>{{shopinfo.title}}</h4>
                </div>
                <div class="title_right">
                    <em></em>
                    <span>分享</span>
                </div>
            </div>
            <p class="desc_text">{{shopinfo.smtitle}}</p>
            <p class="shop_price"><em>￥</em>{{shopinfo.price}}</p>
        </div> 
    </div>
</template>

<script>
    export default{
        props:["shopid"],
        data(){
            return{
               shopinfo:{}
            }
        },
    
        created(){
            fetch('http://localhost:3000/likeshop?shopid='+this.shopid)  
                .then((res)=>{
                return res.text(); // res.text()是一个Promise对象
            })
                .then((res)=>{
                // console.log(typeof JSON.parse(res)); 
                this.shopinfo = JSON.parse(res)[0];
                console.log(JSON.parse(res)) 
                // console.log(this.shopid) 

            }) 
        }
    }
    
</script>

<style scoped>
 /* 商品信息 */
.info_moudle{
    background: #fff;
}
/* 商品标题 */
.shop_title{
    display: flex;
    justify-content: space-between;
    padding: .6rem .8rem 0 1rem;
}
.title_left{
    font-size: 1.4rem;
    line-height: 2rem;
    padding-right: 1.3rem;
    border-right: 1px solid #e6e6e6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden; 
}
.title_left h4{   
    font-weight: 400;
    display: inline;
}
.title_left span {
    background: url(../../../static/images/ziying_red.png) no-repeat;
    background-size: contain;
    width: 2.2rem;
    height: 1.2rem;
    display: inline-block;  
}
.title_right{ 
    width: 8rem;  
    text-align: center; 
    padding-left: 1.3rem; 
}
.title_right em{
    width: 1.8rem;
    height: 1.8rem;
    display: inline-block;
    background: url(../../../static/images/ic_share.png) no-repeat;
    background-size: 1.8rem 1.8rem;
}
.title_right span{
    display: inline-block;
    font-size: 1.3rem;
    color: #333;
}
.desc_text{
    font-size: 1.2rem;
    color: #F20C59;
    line-height: 1.6rem;
    margin-bottom: 1.2rem;
    padding: 0 7rem 0 1rem;
}
.shop_price{
    padding-bottom: 1rem;
    padding-left:1rem;
    color: #F20C59;
    font-size: 1.8rem;
    font-weight: 600;
}
</style>
