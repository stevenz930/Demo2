<template>
    <div>  
        <v-top></v-top>
            <div class="root">
                <div class="riron">
                    <i class="iconfont icon-paixingbang" style="background:#fa729a"></i>
                    <p>排行榜</p>
                </div>
                <div class="riron">
                    <i class="iconfont icon-wuhuanxiaologo" style="background:#1366ff"></i>
                    <p>东京奥运</p>
                </div>
                <div class="riron">
                    <i class="iconfont icon-jiangzhang" style="background:#f3921f"></i>
                    <p>进站必刷</p>
                </div>
                <div class="riron">
                    <i class="iconfont icon-shijianbiao" style="background:#fed442"></i>
                    <p>每周必看</p>
                </div>
            </div>
<!-- 静态，不具备滑动功能和点开功能 -->
            <div class="hot-video">
                 <div class="mess" v-for="(v,i) in list" :key="i">
                    <div class="video-img">
                        <img :src="v.pic">
                        <span>{{v.time}}</span>
                    </div>
                    <div class="detali">
                        <div>
                            <div>
                                <p style="font-size:14px">{{v.tit}}</p>
                            </div>
                        </div>
                        <div class="downpart">
                            <div style="margin: 3px 0">
                                <span style="border-radius: 4px;background:#fff1ef;color:#f56c3e;padding:1px 3px;font-weight:500">{{v.good}}</span>
                            </div>
                        
                            <div style="color:#959a9f">
                                <i class="iconfont icon-UPzhu"></i>
                                <span>{{v.author}}</span>
                            </div>
                            <div class="video-bet" style="color:#959a9f">
                                <div>
                                    <i class="iconfont icon-bofangshu"></i>
                                    <span>{{v.playCount}}</span>
                                </div>
                                <div style="margin:0 5px">
                                    <i class="iconfont icon-gengduo"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        <!-- 顶部导航栏 -->
        <v-footer></v-footer>
        <!-- 底部导航栏 -->
    </div>
</template>
<style>
.root{
    margin-top: 1px;
    display: flex;
    background-color: white;
}
.root .riron{
    width: 25%;
    align-items: center;
    text-align: center;
    margin: 20px 10px;
}
.root .riron>i{
    color: white;
    font-size: 26px;
    border-radius: 50%;
    padding: 10px
}
.root .riron>p{
    margin-top: 16px;
    font-size: 12px;
    color:#686c70;
    font-weight: 600;
}

.hot-video{
    background-color: white;
} 
.hot-video .mess .detali .downpart{
    margin: 10px 0;
}
.hot-video .mess .detali .video-bet{
    display: flex;
    justify-content: space-between;
    color: #c2c5c9;
}
.hot-video .mess .video-img{
    width: 45%;
    height: auto;
    position: relative;
    padding: 0px 10px;
}
.hot-video .mess .video-img img{
    width: 100%;
    height: auto;
    border-radius: 5px;
}
.hot-video .mess .video-img span{
    position: absolute;
    bottom: 8px;
    right: 16px;
    background:rgb(0,0,0,0.6);
    color:white;
    border-radius: 3px;
    padding: 2px 3px;
    font-size: 12px;
}

.hot-video .mess .detali{
    width: 50%;
    display:flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: space-between;
}
.hot-video .mess{
    display: flex;
    border-bottom:#f3f5f5 solid 1px ;
    padding: 10px 0px 0px;
}
</style>
<script>
    export default{
        data(){
            return{
                list:[
                    {
                    time:'9:20',
                    pic:require('../img/doc.jpg'),
                    tit:'如我所见',
                    author:'回羿Howie',
                    playCount:'42.1万播放·今天',
                    good:'4.8万点赞'
                },{
                    time:'9:20',
                    pic:require('../img/sc2.jpg'),
                    tit:'虫族的能力是有极限的！我不做虫族了！【DogCraft33】',
                    author:'DarkCarrot',
                    playCount:'23.7万播放·昨天',
                    good:'两万点赞'
                },
                {
                    time:'9:20',
                    pic:require('../img/cop.jpg'),
                    tit:'当你报警后，电话那头的接线员都在做什么？〖游戏不止〗',
                    author:'森纳映画',
                    playCount:'73.0万播放·前2天',
                    good:'5.5万点赞'
                },
                {
                    time:'9:20',
                    pic:require('../img/wer.jpg'),
                    tit:'【不止游戏】士兵身上那些复杂的装备，到底是干什么用的？',
                    author:'森纳映画',
                    playCount:'101.6万播放·今天',
                    good:'7.5万点赞'
                },
                {
                    time:'9:20',
                    pic:require('../img/08AY.jpg'),
                    tit:'【4K60FPS】群星《北京欢迎你》北京奥运会主题歌！史上最豪华阵容！',
                    author:'音乐私藏馆',
                    playCount:'24.8万播放·今天',
                    good:'3.7万点赞'
                }]
            }
        }
        
    }
</script>
