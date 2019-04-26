<template>
    <div>
        <!-- 商品规格 -->
         <div class="moudle standard_moudle">
            <div class="standard_cont">
                <span>已选</span>
                <span>太空银 <em>1</em> 个</span>   
            </div>
        </div>

        <!-- 地址模块 -->
        <div class="moudle address_moudle">
            <div class="address_cont">
                <span>送至</span>
                <div class="ellipsis">
                    <p>
                        朝阳街道，运费5.0元(满79.0元免运费)
                        <span>今日18:00:00前完成下单，预计明日（04月11日）送达</span>
                    </p>
                </div>
            </div>
            <div class="service_info">
                <span>支持7天无理由退货</span>
                <span>付费邮寄</span>
            </div>
        </div> 
    </div>
</template>

<script>
    
</script>

<style scoped>
/* 商品规格 */
.moudle{
    margin-top: 1rem;
}
.standard_moudle{
    padding: 1.2rem;
    background: #fff;  
}
.standard_cont{
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.standard_cont span:nth-child(1){
    color: #a2a4a6;
    line-height: 1.7rem;
    margin-right: 1rem;
}
.standard_cont span:nth-child(2){
    flex: 1;
    color: #333;
}
.standard_cont span:nth-child(2) em{
    font-style: normal;
}
.standard_cont::after{
    content: '';
    width: .8rem;
    height: .8rem;
    border-right: 1px solid #a2a4a6;
    border-bottom: 1px solid #a2a4a6;
    position: absolute;
    top:.4rem;
    right: 0;
    transform: rotate(-42deg);
}

/*  地址模块 */
.address_moudle{
    padding-top: 1.2rem;
    background: #fff;
}
.address_cont{
    padding: 0 1.2rem 1.2rem;
    position: relative;
    display: flex;
}
.address_cont span{
    font-size: 1.3rem;
    color: #a2a4a6;
    line-height: 1.7rem;
    margin-right: 1rem;
}
.address_cont p{
    color: #333;
    font-size: 1.3rem;
}
.ellipsis{
    flex: 1;
    background:url(../../../static/images/dingwei.png) left .4rem no-repeat;
    background-size: 1.2rem 1rem;
    display: inline-block;
    padding-left: 1.5rem;
    padding-right: 2rem;
}
.address_cont::after{
    content: '';
    width: .8rem;
    height: .8rem;
    border-right: 1px solid #a2a4a6;
    border-bottom: 1px solid #a2a4a6;
    position: absolute;
    top:.5rem;
    right: 1.2rem;
    transform: rotate(-42deg);
}
.service_info{
    background: #fafafa;
    padding: 1.1rem;
}
.service_info span:nth-child(1),.service_info span:nth-child(2){
    background: url(../../../static/images/icon1.png)left center no-repeat;
    background-size: 1.1rem 1.1rem;
    margin-right: 1rem;
    padding-left: 1.6rem;
    font-size: 1.1rem;
    color: #a2a4a6;
}
</style>
