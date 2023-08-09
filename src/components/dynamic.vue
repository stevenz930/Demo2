<template>
<div style="margin-top: 60px;">
    <div class="wapper">
        <div class="topic">
            <div class="topic-3part">
                <div style="text-align: right;font-size:16px">视频</div>
                <div><div class="sp" style="width:50%;margin: 0px auto;padding-bottom:4px;font-size:20px;font-weight:600">综合</div></div>
                <div  style="text-align: left;font-size:16px">同城<span style="font-size:12px"> 内测</span></div>
            </div>
            <div class="icon"><span class="iconfont icon-bianji"></span></div>
        </div>
        <!-- 以上是上部导航栏部分，不具备使用功能，只能看 -->

        <div class="movs" v-for="(v,i) in list" :key="i">
            <div class="top">
                <div class="head">
                    <img :src="v.uphead">
                </div>
                <div class="tt2" style="width:80%;">
                    <div class="fline">
                        <div>
                            <span style="color:#1f2025;font-weight:bold;font-size:16px">{{v.author}}</span>
                            <i class="iconfont icon-gengduo" style="color:#62696e;font-size:14px"></i>
                        </div>
                    </div>
                    <div>
                        <span style="color:#a6abaf;font-size:12px;">{{v.pasttime}}</span>
                    </div>
                </div>
            </div>
            <!-- 上面是头像和个人信息部分 -->
            <div class="img">
                <img :src="v.pic" style="width:100%">
                <div class="time">
                    <div>
                        <span class="sp">{{v.time}}</span>
                        <span style="color:#white;font-size:12px">&nbsp&nbsp{{v.playCount}}</span>
                    </div>
                    <div>
                        <i class="iconfont icon-labaguan" style="font-size: 20px;color:white;"></i>
                    </div>
                </div>
                <div class="da">
                    <span>{{v.tit}}</span>
                </div>
            </div>
            <!-- 上面是视频封面和部分播放信息 -->
            <div class="tag">
                <div class="inside">
                    <i class="iconfont icon-jinghao"></i>
                    <span>打卡挑战</span>
                </div>
                <div class="inside">
                    <i class="iconfont icon-jinghao"></i>
                    <span>明日方舟</span>
                </div>
            </div>
            <!-- 上面是视频的tag信息 -->
            <div class="fine">
                <div>
                    <i class="iconfont icon-zhuanfa"></i>
                    <span>转发</span>
                </div>
                <div>
                    <i class="iconfont icon-luntan"></i>
                    <span>749</span>
                </div>
                <div>
                    <i class="iconfont icon-dianzan"></i>
                    <span>4.8万</span>
                </div>
            </div>
            <!-- 上面是一键三连部分 -->
        </div>

        <v-footer></v-footer>
    </div>
</div>
</template>


<style>
.movs{
    background-color: white;
}
.movs .top .tt2{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
.movs .fine>div{
    width: 33.3%;
    align-items: center;
    text-align: center;
    color: #8c9095;
    font-size: 13px;
}
.movs .fine{
    display: flex;
}
.movs .tag {
    display: flex;
    margin-bottom: 20px;
}
.movs .tag .inside{
    background:#f1f2f4 ;
    color:#018cc9;
    text-align: center;
    border-radius: 30px;
    padding: 5px 10px;
    margin-right: 5px;
    font-weight: 600;
    font-size: 12px;
}
.movs .img .time div>span{
    color:white;
}
.movs .img .da{
    margin-top: -30px;
    margin-bottom: 10px;
}
.movs .img .da>span{
    font-size: 16px;
    font-weight:bold;
}
.movs .img .time .sp{
    background:black ;
    opacity:0.6;
    border-radius: 4px;
    padding: 2px 5px;
    font-size: 12px;
}
.movs .img .time{
    position: relative;
    top:-39px;
    left:0px;
    display: flex;
    padding: 0px 10px;
    justify-content: space-between;
    font-size: 20px;
    height: 30px;
    background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
}
.img img{
    border-radius: 5px;
}
.movs .top .head img{
    border-radius: 50%;
    width:60%;
    height:auto;
    margin: 0 8px;
    align-items: center;
}
.movs .top .head{
    display: flex;
    width: 20%;
    margin: 0;
}
.movs .top .fline>div{
    display: flex;
    justify-content: space-between;
}
.movs .top{
    display: flex;
    margin-bottom: 10px;
}
.movs{
    /* margin-top: 60px; */
    padding: 10px 10px;
    border-bottom: #f1f2f4 solid 10px;
}
.topic .icon{
    width: 10%;
}
.topic .icon-bianji{
    position: relative;
    right:0px;
    top:0px;
}
.topic .topic-3part .sp{
    font-size: 25px;
    color: #ff6f9f;
    border-bottom: #ff6f9f solid 3px;
}
.topic .topic-3part>div{
    text-align: center;
    width: 33.3%;
    font-size: 20px;
}
.topic .topic-3part{
    display: flex;
    margin: 0px auto;
    width: 90%;
}
.topic{
    display: flex;
    z-index: 99;
    top: 0px;
    border-bottom: #fafafc solid 3px;
    padding: 10px;
    font-size: 20px;
    position: fixed;
    width: 100%;
    color: #72767b;
    justify-content: space-between;
    background: white;
    opacity:1;
}
</style>

<script>
    export default{
        data(){
            return{
                list:[
                    {
                    uphead:require('../img/up1.jpg'),
                    time:'9:20',
                    pic:require('../img/doc.jpg'),
                    tit:'如我所见',
                    author:'回羿Howie',
                    playCount:'42.1万播放',
                    good:'4.8万点赞',
                    pasttime:'58分钟前·投稿了视频'
                },
                {
                    uphead:require('../img/up2.jpg'),
                    time:'9:20',
                    pic:require('../img/sc2.jpg'),
                    tit:'虫族的能力是有极限的！我不做虫族了！【DogCraft33】',
                    author:'DarkCarrot',
                    playCount:'23.7万播放',
                    good:'两万点赞',
                    pasttime:'58分钟前·投稿了视频'
                },
                {
                    uphead:require('../img/up3.jpg'),
                    time:'9:20',
                    pic:require('../img/cop.jpg'),
                    tit:'当你报警后，电话那头的接线员都在做什么？〖游戏不止〗',
                    author:'森纳映画',
                    playCount:'73.0万播放',
                    good:'5.5万点赞',
                    pasttime:'58分钟前·投稿了视频'
                },
                {
                    uphead:require('../img/up4.jpg'),
                    time:'9:20',
                    pic:require('../img/wer.jpg'),
                    tit:'【不止游戏】士兵身上那些复杂的装备，到底是干什么用的？',
                    author:'森纳映画',
                    playCount:'101.6万播放',
                    good:'7.5万点赞',
                    pasttime:'58分钟前·投稿了视频'
                },
                {
                    uphead:require('../img/up5.jpg'),
                    time:'9:20',
                    pic:require('../img/08AY.jpg'),
                    tit:'【4K60FPS】群星《北京欢迎你》北京奥运会主题歌！史上最豪华阵容！',
                    author:'音乐私藏馆',
                    playCount:'24.8万播放',
                    good:'3.7万点赞',
                    pasttime:'58分钟前·投稿了视频'
                }]
            }
        }
    }
</script>