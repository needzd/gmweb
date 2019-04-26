<template>
    <div class="box">
        <classifytop/>
        <classifycontent/>
    </div>
</template>

<script>
    import classifytop from "../components/classify/classifytop";
    import classifycontent from "../components/classify/classifycontent"


    
    export default{
        components:{
            classifytop,
            classifycontent
        }
    }

</script>

<style scoped>
.box{
    height: 100%;
    display: flex;
    flex-direction:column;
}

</style>
