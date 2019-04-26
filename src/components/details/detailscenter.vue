<template>
    <div class="content">
        <detailsshop/>
        <detailspinjia/>
        <detailslike/>
    </div>
</template>

<script>
    import detailsshop from "./details-shop";
    import detailspinjia from "./details-pinjia";
    import detailslike from "./details-like"



    export default{
        components:{
             detailsshop,
             detailspinjia,
             detailslike,
        },
        data(){
            return{

            }
        }
    }

</script>


<style scoped>
.content{
    width: 100%;
    flex:1;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
