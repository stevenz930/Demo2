<template>
    <div>
        <v-top></v-top>

        <div id="background">
            <div id="rotation">
                <v-swiper></v-swiper>
            </div>
            <div id="classification">
                <ul>
                    <li v-for="(v,i) in classlist1" :key="i">
                        <img :src="v.classImgs" alt="">
                        <p>{{v.classNames}}</p>
                    </li>
                </ul>
                <ul>
                    <li v-for="(v,i) in classlist2" :key="i">
                        <img :src="v.classImgs" alt="">
                        <p>{{v.classNames}}</p>
                    </li>
                </ul>
            </div>
            <div id="myfollow">
                <div id="top">
                    <span id="left">
                        <h4 style="margin-right:2px">我的关注</h4>
                        <p style="margin: 0 2px;color:#ff66a4">{{followlist.length}}</p>
                        <p style="margin: 0 2px;color:#8d8e92">人正在直播</p>
                        <i style="margin: 0 2px;color:#8d8e92" class="iconfont icon-yinpin"></i>
                    </span>
                    <span id="right">
                        <p style="margin-left: 2px;color:#8d8e92">查看全部</p>
                        <i class="iconfont icon-youjiantou"></i>
                    </span>
                </div>
                <div id="bottom">
                    <ul>
                        <li v-for="(v,i) in followlist" :key="i">
                            <img :src="v.uphead" alt="">
                            <p>{{v.name}}</p>
                            <i :style="{background:v.color}" class="iconfont icon-lightningbshandian"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="recommendLive">
                <div id="title">
                    <i class="iconfont icon-zhibo"></i>
                    <h4>推荐直播</h4>
                </div>

                <div id="content">
                    <div id="left">
                        <div v-for="(v,i) in recommendLive1" :key="i">
                            <img :src="v.img" height="90px" alt="">
                            <div id="title">
                                <p>{{v.name}}</p>
                                <p>
                                    <i class="iconfont icon-renshu"></i>
                                    {{v.hot}}
                                </p>
                                <span id="opacBack"></span>
                            </div>
                            <div id="info">
                                <p style="font-size:14px;position: relative;top: -20px">
                                    {{v.title}}</p>
                                <p style="color:#767779;font-size:12px;position: relative;top: 0">
                                    {{v.tag}}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div id="right">
                        <div v-for="(v,i) in recommendLive2" :key="i">
                            <img :src="v.img" height="90px" alt="">
                            <div id="title">
                                <p>{{v.name}}</p>
                                <p>
                                    <i class="iconfont icon-renshu"></i>
                                    {{v.hot}}
                                </p>
                                <span id="opacBack"></span>
                            </div>
                            <div id="info">
                                <p style="font-size:14px;position: relative;top: -20px">
                                    {{v.title}}</p>
                                <p style="color:#767779;font-size:12px;position: relative;top: 0">
                                    {{v.tag}}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <v-footer></v-footer>
    </div>
</template>
<style>
#background{
    background: #f1f2f4;
    padding-top: 10px;
}
#rotation{
    width: 96%;
    margin: 0 5px;
}

#classification{
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 20px;
}
#classification>ul{
    display: flex;
    justify-content: space-between;
}
#classification>ul li{
    text-align: center;
    font-size: 12px;
}
#classification img{
    width: 60%;
}

#myfollow{
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
}
#myfollow #top{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 20px;
}
#myfollow #top #left{
    display: flex;
    justify-content: space-between;
}
#myfollow #top #right{
    display: flex;
    color: #8d8e92;
    font-size: 14px;
    align-items: center;
}
#top #right i{
    font-size: 12px;
}
#myfollow #bottom{
    margin: 0;
    padding: 0;
}
#myfollow #bottom>ul{
    display: flex;
    justify-content: space-between;
}
#myfollow #bottom>ul>li{
    flex-direction: column;
    text-align: center;
    font-size: 0.7em;
    align-items: center;
}
#bottom img{
    width: 60%;
    border-radius: 50%;
    box-shadow:0 0 0 2px white,0 0 0 4px #ee6d9a;
    margin: 5px
}
#bottom i{
    color: white;
    border-radius: 50%;
    border: 2px solid white;
    position: relative;
    bottom: 40px;
    right: -20px
}

#recommendLive{
    margin: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
}
#recommendLive #title{
    display: flex;
    margin-bottom: 5px;
}
#recommendLive #title>i{
    color: #f7b2c7;
    font-size: 20px;
    font-weight: bold;
    margin: 0 5px;
}
#recommendLive #content{
    display: flex;
    flex-wrap: wrap;
}
#recommendLive #content>div{
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 50%;
}
#recommendLive #content>div>div{
    margin: 3px;
    background-color: white;
    border-radius: 5px;
}
#recommendLive img{
    width: 100%;
    border-radius: 5px 5px 0 0;
}
#recommendLive #content #title{
    display: flex;
    justify-content: space-between;
    color: white;
    position: relative;
    bottom: 22px;
    font-size: 12px;
    padding: 0 4px;
}
#recommendLive #content #title p{
    z-index: 5;
}
#recommendLive #content #info{
    margin: 5px;
}
#recommendLive #content #title #opacBack{
    background-image: linear-gradient(to top, rgb(0, 0, 0), transparent);
    position: absolute;
    left: 0;
    height: 22px;
    width: 100%;
}
</style>

<script>
    export default{
        name:'live',
        data(){
            return{
                classlist1:[
                    {
                        classImgs:require('../img/dancer.png'),
                        classNames:'舞见'
                    },
                    {
                        classImgs:require('../img/lol.png'),
                        classNames:'英雄联盟'
                    },
                    {
                        classImgs:require('../img/wzry.png'),
                        classNames:'王者荣耀'
                    },
                    {
                        classImgs:require('../img/sekiro.png'),
                        classNames:'只狼'
                    },
                    {
                        classImgs:require('../img/console-game.png'),
                        classNames:'单机游戏'
                    },
                ],
                classlist2:[
                    {
                        classImgs:require('../img/asmr.png'),
                        classNames:'放松电台'
                    },
                    {
                        classImgs:require('../img/vliver.png'),
                        classNames:'虚拟主播'
                    },
                    {
                        classImgs:require('../img/ys.png'),
                        classNames:'原神'
                    },
                    {
                        classImgs:require('../img/video-singer.png'),
                        classNames:'视频唱见'
                    },
                    {
                        classImgs:require('../img/chat.png'),
                        classNames:'视频聊天'
                    },
                ],
                followlist:[
                    {
                        uphead:require('../img/up1.jpg'),
                        name:'决战平安京',
                        color:'#4ac6fa'
                    },
                    {
                        uphead:require('../img/up2.jpg'),
                        name:'卡特亚',
                        color:'#fec42e'
                    },
                    {
                        uphead:require('../img/up3.jpg'),
                        name:'棉花大哥哥',
                        color:'#fec42e'
                    },
                    {
                        uphead:require('../img/up4.jpg'),
                        name:'阿萨Aza',
                        color:'#fec42e'
                    },
                    {
                        uphead:require('../img/up5.jpg'),
                        name:'魔法Zc目录',
                        color:'#fec42e'
                    },
                ],
                recommendLive1:[
                    {
                        img:require('../img/live1.jpg'),
                        name:'决战平安京',
                        title:'2021OPL暑期赛常规赛',
                        hot:'443.0万',
                        tag:'决战！平安京'
                    },
                    {
                        img:require('../img/live3.jpg'),
                        name:'南溟酱没有胖',
                        title:'怪物虐人',
                        hot:'16.4万',
                        tag:'怪物猎人：世界'
                    },
                    {
                        img:require('../img/live5.jpg'),
                        name:'文子起床了吗',
                        title:'早上好，早柚快到碗里来',
                        hot:'20.7万',
                        tag:'原神'
                    },
                ],
                recommendLive2:[
                    {
                        img:require('../img/live2.jpg'),
                        name:'冯提莫',
                        title:'冯提莫：LOL上个王者',
                        hot:'370.3万',
                        tag:'王者荣耀'
                    },
                    {
                        img:require('../img/live4.jpg'),
                        name:'CSGO久菜合子',
                        title:'我像风一样自由',
                        hot:'97.8万',
                        tag:'CS:GO'
                    },
                    {
                        img:require('../img/live6.jpg'),
                        name:'老番茄',
                        title:'突然玩！',
                        hot:'180.5万',
                        tag:'其他单机'
                    },
                ]
            }
        }
    }
</script>