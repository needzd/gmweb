<template>
    <div class="box">
        <mytop/>
        <myxinxi/>
        <mycontent/>
        <myliketitle/>
        <mylikeshop/>
        <myliketitle/>
    </div>
</template>

<script>
    import mytop from "../components/my/mytop";
    import myxinxi from "../components/my/my-xinxi";
    import mycontent from "../components/my/my-content";
    import myliketitle from "../components/my/my-liketitle";
    import mylikeshop from "../components/index/index-likelist"




    export default{
        components:{
            mytop,
            myxinxi,
            mycontent,
            myliketitle,
            mylikeshop
        }
    }

</script>

<style scoped>
.box{
    height:100%;
    background: #f2f2f2;
}

</style>
