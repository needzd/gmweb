<template>
    <div class="indexcontent">
        <banner/>
        <item/>
        <quickentry/>
        <indexheadactiv/>
        <indexbannertwo/>
        <indextitle/>
        <indexjxshop/>
        <!-- <indexshopbanner/> -->
        <indexsift/>
        <indexliketitle/>
        <indexlikelist/>
        <indexfoot/>
        <gotop/>
    </div>
</template>

<script>
    import banner from "./indexbanner";
    import item from "./index-item";
    import quickentry from "./quick-entry";
    import indexheadactiv from "./index-headactiv";
    import indexbannertwo from "./index-banner-two";
    import indextitle from "./index-title"
    import indexjxshop from "./index-jxshop"
    // import indexshopbanner from "./index-shopbanner";
    import indexsift from "./index-sift";
    import indexliketitle from "./index-liketitle";
    import indexlikelist from "./index-likelist";
    import indexfoot from "./index-foot";
    import gotop from "./gotop"


    export default{
        name:"center",
        components:{
            banner,
            item,
            quickentry,
            indexheadactiv,
            indexbannertwo,
            indextitle,
            indexjxshop,
            // indexshopbanner,
            indexsift,
            indexliketitle,
            indexlikelist,
            indexfoot,
            gotop
        },
        data(){
            return{

            }
        }
    }

</script>

<style  scoped>
.indexcontent{
    width: 100%;
    flex:1;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
