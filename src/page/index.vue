<template>
    <div class="box">
        <indextop/>
        <indexcenter/>
        <indexbottom/>
    </div>
</template>

<script>

    import indextop from "../components/index/indextop";
    import indexcenter from "../components/index/indexcenter";
    import indexbottom from "../components/index/index-bottom"
    
    export default{
        name:"index",
        components:{
            indextop,
            indexcenter,
            indexbottom
        },
        data(){
            return{

            }
        }
    }

</script>

<style scoped>
.box{
    height: 100%;
    display: flex;
    flex-direction:column;
}
.theme_street a img{
    width: 100%;
    height: 100%;  
}
.moudle{
    margin-top: 1rem;
}
.category_container{
    background: #fff;
}
em{
    font-style:normal;
}
</style>
