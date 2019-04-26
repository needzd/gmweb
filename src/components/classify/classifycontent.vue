<template>
    <div class="box">
        <classifyconleft/>
        <classifyconright/>
    </div>
</template>

<script>
    import classifyconleft from "./classifycon-left";
    import classifyconright from "./classifycon-right"

    
    export default{
        components:{
            classifyconleft,
            classifyconright
        }
    }

</script>

<style scoped>
.box{
    background: #fff;
    width: 100%;
    flex:1;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    flex-direction: row;
}
</style>
