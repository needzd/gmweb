<template>
    <div class="box">
        <detailstop/>
        <detailscenter/>
        <detailsfoot/>
        <kefu/>
    </div>
</template>

<script>
    import detailstop from "../components/details/detailstop";
    import detailscenter from "../components/details/detailscenter";
    import detailsfoot from "../components/details/detailsfoot";
    import kefu from "../components/details/kefu"



    export default{
        components:{
             detailstop,
             detailscenter,
             detailsfoot,
             kefu
        }
    }

</script>


<style scoped>
.box{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.moudle{
    margin-top: 1rem;
}
</style>
