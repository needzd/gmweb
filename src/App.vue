<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components:{
    }
  }
</script>

<style>
  /* @import  './assets/css/iconfont.css'; */

  @import './assets/css/swiper.min.css';
  
 
#app{
    width: 100%;
    height: 100%;
  }
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
html{
  font-size: 10px;
}
html,body{
	height: 100%;
}
body{
  font-family: "微软雅黑",Arial;
  background: #f2f2f2;
}
ul,ol{
	list-style:none;
}
img{
	border: 0;
	display: block;
}
a{
	text-decoration: none;
}
</style>
