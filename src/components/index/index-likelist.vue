<template>
   <div>
    <!-- 猜你喜欢 -->
    <div class="maylike">
        <ul class="maylikebox">
            <router-link class="maylike_list" :to='"/details/"+items.shopid'  v-for="(items,key) in likeshop" :key="key">
                <li>
                    <a href="javascript:;">
                        <div class="maylike_content">
                            <img :src="items.img" />
                            <p>{{items.title}}</p>
                        </div>
                    </a>
                    <p class="maylike_price"><em>￥</em>{{items.price}}</p>
                </li>
            </router-link>
        </ul>
    </div>
   </div>
</template>

<script>
    export default{
        name:"center",
        data(){
            return{
                likeshop:{}
            }
        },
        created:function(){
		 fetch('http://localhost:3000/likeshop') // 
		  .then((res)=>{
		     return res.text(); // res.text()是一个Promise对象
		  })
		  .then((res)=>{
		    // console.log(typeof JSON.parse(res)); 
		    this.likeshop = JSON.parse(res);
		  }) 
	},
        components:{
            
        }
    }
</script>

<style scoped>
em{
    font-style:normal;
}
/* 猜你喜欢 */
.maylikebox{
    display: flex;
    flex-wrap: wrap;
}
.maylikebox .maylike_list{
    width: 50%;
    box-sizing: border-box;
    margin-bottom: .3rem;
} 
.maylikebox li:nth-child(odd){
    padding-right: .15rem;
    padding-left: 0;
}
.maylikebox li:nth-child(even){
    padding-left: .15rem;
    padding-right: 0;
}
.maylikebox a{
    color:#333;
    font-size:1.2rem;
}
.maylike_content,.maylike_price{
    background: #fff;
}
.maylike_content img{
    width: 100%;
} 
.maylike_content p{
    height: 3rem;
    line-height: 1.6rem;
    overflow: hidden;
    padding: .5rem 1rem 0 1rem;
}
.maylike_price{
    padding: .8rem 0 .8rem 1rem;
    color: #F20C59;
    font-size: 1.6rem;
}
.maylike_bottom_img img{
    width: 100%;
}

</style>
