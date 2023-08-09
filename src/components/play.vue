<template>
    <div>
        <video src="../img/曾经我也想过一了百了中岛美嘉.mp4" width="100%" controls="controls"></video>
        <div class="barrage">
            <span>简介</span>
            <input type="text" placeholder="点我发弹幕">
        </div>
        <div class="up">
            <div>
                <img src="../img/up-head.jpg" alt="">
                <div class="up-mg">
                    <p>stefxmc</p>
                    <span>4039粉丝</span>
                    <span>117视频</span>
                </div>
            </div>
            <span class="iconfont icon-jia">关注</span>
        </div>
        <div class="video-mg">
            <div class="video-title">
                <p>曾经我也想过一了百了--中岛美嘉</p>
                <span class="iconfont icon-xialasanjiao"></span>
            </div>
            <div class="video-itd">
                <span class="iconfont icon-bofangliang"> 642.1万</span>
                <span class="iconfont icon-danmu"> 4.4万</span>
                <span>2017-12-17</span>
                <span>BV1oW411b7hx</span>
            </div>
        </div>
        <div class="like">
            <span class="iconfont icon-dianzan"><p>31.5万</p></span>
            <span class="iconfont icon-unlike-fill"><p>不喜欢</p></span>
            <span class="iconfont icon-jinbi"><p>14.2万</p></span>
            <span class="iconfont icon-shoucang"><p>34.1万</p></span>
            <span class="iconfont icon-zhuanfa"><p>10.5万</p></span>
        </div>
        <ul>
            <li><v-video-mg-long></v-video-mg-long></li>
            <li><v-video-mg-long></v-video-mg-long></li>
            <li><v-video-mg-long></v-video-mg-long></li>
            <li><v-video-mg-long></v-video-mg-long></li>
        </ul>
    </div>
</template>

<style scoped>
    .barrage{
        border-bottom: 1px solid #ddd;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding: 0 15px;
    }
    .barrage>span{
        color: #ff85ab;
        border-bottom: 2px solid #ff85ab;
        height: 100%;
    }
    input{
        border-radius: 50px;
        border: none;
        background: #f0f3f2;
        height: 20px;
    }
    .up{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .up>div{
        display: flex;
        align-items: center;
    }
    .up img{
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin: 10px 20px;
    }
    .up p{
        color: #fd72a2;
    }
    .up .up-mg>span{
        font-size: 12px;
        color: #999;
    }
    .up>span{
        background: #fd72a2;
        color: white;
        border-radius: 2px;
        font-size: 13px;
        padding: 3px 12px;
        margin-right: 10px;
    }
    .video-title{
        display: flex;
        justify-content: space-between;
        margin: 5px 10px;
    }
    .video-title>span{
        color: #bbb;
    }
    .video-itd>span{
        color: #999;
        margin: 8px;
        font-size: 12px;
    }
    .like{
        display: flex;
        text-align: center;
        padding: 10px 0 15px;
        border-bottom: 1px solid #ddd;
    }
    .like>span{
        flex-grow: 1;
        color: #777;
        font-size: 25px;
    }
    .like>span>p{
        font-size: 12px;
        color: #999;
    }
</style>

<script>
export default {
    
}
</script>