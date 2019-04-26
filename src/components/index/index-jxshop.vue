<template>
    <div>
    <!-- 多商品轮播1 -->
        <div v-for="items in shoplist" :key="items.id">
            <a  href="#"><img class="theme_street" :src="items.title.img" ></a>
            <!-- <indexjxshoplist/> -->
            <div class="shopcontainer" >        
                <ul class="shop_content"> 
                    <li v-for="item in items.shopimgs" :key="item.id">
                        <a href="#">
                            <div class="shop_img">
                                <img :src="item.img"/>                           
                            </div>
                            <div class="shop_text">
                                <p><span>全面屏</span><span>面容ID</span></p>
                                <p><em>￥</em>{{item.price}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>            
        </div>
    </div>
</template>


<script>   
    // import indexjxshoplist from "./index-jxshoplist"

    export default{
        name:"center",
        data(){
            return{
                shoplist:{}
            }
        },
        created:function(){
		 fetch('http://localhost:3000/shoplist') // 
		  .then((res)=>{
		     return res.text(); // res.text()是一个Promise对象
		  })
		  .then((res)=>{
		    // console.log(typeof JSON.parse(res)); 
		    this.shoplist = JSON.parse(res);
		  }) 
	},
        components:{
            // indexjxshoplist
        }
    }

</script>

<style  scoped>
.theme_street{
    width:100%;
}
em{
    font-style:normal;
}
.shopcontainer{
    background: #fff;
}
.shop_content{
    display: flex;
    overflow-x: auto;
    box-sizing: border-box;
}
.shop_content li{
    padding-top: .9rem;
    padding-left: .6rem;
}
.shop_content li a{
    font-size: 1rem;
}
.shop_img img{
    width: 8.7rem;
    height: 8.7rem;
    margin: 0 1rem;
}
.shop_text{
    text-align: center;
    margin-top: 1rem;
}
.shop_text p:nth-child(1) span{
    padding: 0 .5rem .2rem .5rem;
    border: 1px solid #f1f1f1;
    border-radius: 5rem;
    color: #7A7F85;
    margin-right: .3rem;
}
.shop_text p:nth-child(2){
    color: #F20C59;
    font-size: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

</style>


