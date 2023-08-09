<template>
        <div id="video-mg-long">
            <div class="left">
                <img src="../img/video-cover1.jpg" alt="">
                <span>05:11</span>
            </div>
            <div class="right">
                <p>只有干唱才能证明实力！【撒野】干唱cover</p>
                <span class="iconfont icon-UPzhu">朝烟今天唱歌了没</span>
                <div class="count">
                    <div class="c-left">
                        <span class="iconfont icon-bofangliang"> 78.4万</span>
                        <span class="iconfont icon-danmushu"> 2130</span>
                    </div>
                    <span class="iconfont icon-gengduo"></span>
                </div>
            </div>
        </div>
</template>

<style scoped>
    #video-mg-long{
        display: flex;
        margin: 10px 0 0 10px;
        padding: 0 10px 10px 0;
        border-bottom: 1px solid #ddd;
    }
    .left{
        position: relative;
        width: 40%;
    }
    .left>img{
        width: 100%;
        height: 100%;
        border-radius: 3px;
    }
    .left>span{
        background-color: #000;
        opacity: 0.7;
        color: white;
        border-radius: 3px;
        font-size: 12px;
        position: absolute;
        bottom: 8px;
        right: 5px;
    }
    .right{
        display: flex;
        flex-direction: column;
        width: auto;
        padding: 5px;
    }
    .right>p{
        font-size: 15px;
    }
    .right span{
        font-size: 13px;
        color: #999;
    }
    .count{
        display: flex;
        justify-content: space-between;
    }
    .count .c-left{
        width: 50%;
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
export default {
    
}
</script>