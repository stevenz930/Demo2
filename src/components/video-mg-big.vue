<template>
    <div id="video-mg-big">
        <div class="cover">
            <img src="../img/video-cover1.jpg" alt="">
            <div class="operate">
                <div class="left">
                    <i class="iconfont icon-bofangshu"></i>
                    <p>78.4万</p>
                    <i class="iconfont icon-danmushu"></i>
                    <p>2130</p>
                </div>
                <div class="right">
                    <span class="iconfont icon-quanping"></span>
                    <span class="iconfont "></span>
                </div>
            </div>
        </div>
        <div class="title-mg">
            <div class="title">
                <p>只有干唱才能证明实力！【撒野】干唱cover</p>
            </div>
            <div class="like">
                <i class="iconfont icon-dianzan"></i>
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    #video-mg-big{
        width: 96%;
        height: auto;
        margin: 5px;
        border-radius: 5px;
        background: white;
    }
    img{
        width:100%;
        height: auto;
        border-radius: 5px;
    }
    .cover{
        position: relative;
    }
    .operate{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
        height:50px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .left{
        display: flex;
        align-items: flex-end;
        margin: 2px;
    }
    .left>i{
        color: #fbfaf6;
        font-size: 15px;
        margin: 0 2px;
    }
    .left>p{
        color: #fbfaf6;
        font-size: 12px;
        margin: 0 2px;
    }
    .title-mg{
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }
    .title>p{
        font-size: 13px;
    }
    .like>i{
        font-size: 16px;
        color: #969ba2;
    }
</style>

<script>
export default {

}
</script>