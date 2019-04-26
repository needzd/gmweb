<template>
    <div class="box">
       <logintop/>
       <logincenter/>
       <loginbottom/>
    </div>
</template>

<script>
    import logintop from "../components/login/logintop";
    import logincenter from "../components/login/logincenter";
    import loginbottom from "../components/login/loginbottom"


       
    export default{
        components:{
            logintop,
            logincenter,
            loginbottom
        }
    }

</script>

<style scoped>
.box{
    height:100%;
    background: #fff;
}
</style>
