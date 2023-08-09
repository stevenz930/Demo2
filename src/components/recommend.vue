<template>
    <div>
        <v-top></v-top>

        <div class="rotation">
            <img src="../img/rotation.jpg" alt="">
        </div>
        <div v-for="(v,i) in 2" :key="i">
            <div id="mg">
                <div id="left" v-for="(v,i) in list1" :key="i">
                    <div>
                            <div id="video-mg">
                                <router-link to='/play'>
                                    <div class="cover-mg">
                                        <img :src="v.img" alt="">
                                        <div class="video-data">
                                            <div class="data">
                                                <i class="iconfont icon-bofangshu"></i>
                                                <p>{{v.play}}</p>
                                                <i class="iconfont icon-danmushu"></i>
                                                <p>{{v.danmu}}</p>
                                            </div>
                                            <div class="time">
                                                <p>{{v.time}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="title">
                                        <p>{{v.title}}</p>
                                    </div>
                                    <div class="up">
                                        <i class="iconfont icon-UPzhu"> {{v.name}}</i>
                                        <i class="iconfont icon-gengduo"></i>
                                    </div>
                                </router-link>
                            </div>
                    </div>
                </div>
                <div id="right" v-for="(v,i) in list2" :key="i">
                        <div>
                            <div id="video-mg">
                                <router-link to='/play'>
                                    <div class="cover-mg">
                                        <img :src="v.img" alt="">
                                        <div class="video-data">
                                            <div class="data">
                                                <i class="iconfont icon-bofangshu"></i>
                                                <p>{{v.play}}</p>
                                                <i class="iconfont icon-danmushu"></i>
                                                <p>{{v.danmu}}</p>
                                            </div>
                                            <div class="time">
                                                <p>{{v.time}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="title">
                                        <p>{{v.title}}</p>
                                    </div>
                                    <div class="up">
                                        <i class="iconfont icon-UPzhu"> {{v.name}}</i>
                                        <i class="iconfont icon-gengduo"></i>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                </div>
            </div>
            <v-video-mg-big></v-video-mg-big>
        </div>
        
        
        <v-footer></v-footer>
    </div>
</template>

<style scoped>
    .rotation{
        margin: 10px;
        width: 96%;
    }
    .rotation>img{
        width: 100%;
        height: 200px;
        border-radius: 2px;
    }
    #mg{
        display: flex;
        flex-wrap: wrap;
        width: 98%;
    }
    #mg>div{
        border-radius: 5px;
        display: flex;
        flex-flow: column;
        height: 100%;
        width: 50%;
    }
    #mg>div>div{
        width: 100%;
        margin: 3px;
        border-radius: 5px;
    }
    #video-mg{
        width: 95%;
        height: auto;
        margin: 5px;
        border-radius: 5px;
        background: white;
    }
    .cover-mg{
        position: relative;
        border-radius: 10px;
    }
    img{
        border-radius: 5px;
        width:100%;
        height: auto;
    }
    .video-data{
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
    .data{
        display: flex;
        align-items: flex-end;
        margin: 2px;
    }
    .data>i{
        color: #fbfaf6;
        font-size: 15px;
        margin: 0 2px;
    }
    .data>p{
        color: #fbfaf6;
        font-size: 12px;
        margin: 0 2px;
    }
    .time>p{
        margin: 2px 5px;
        color: #fbfaf6;
        font-size: 12px;
    }
    .up{
        display: flex;
        justify-content: space-between;
        color: #969ba2;
        padding: 10px 0;
    }
    .up i{
        font-size: 14px;
        margin: 0 4px;
    }
    .title p{
        font-size: 13px;
        margin: 4px 8px;
        height: 26px;
    }
</style>

<script>
export default {
    data(){
        return{
            list1:[
                {
                    img:require('../img/video1.png'),
                    name:'stefxmc',
                    title:'曾经我也想过一了百了--中岛美嘉',
                    play:'642.1万',
                    danmu:'4.4万',
                    time:'7:23'
                },
                {
                    img:require('../img/video2.jpg'),
                    name:'徐Toso',
                    title:'东 京 奥 运 会',
                    play:'93.9万',
                    danmu:'1517',
                    time:'2:18'
                },
                {
                    img:require('../img/video3.jpg'),
                    name:'阿狸才不是受',
                    title:'开局一张床！6千爆改电竞宿舍！含电脑 显示器 外设 家具 ！室友看到都馋哭了',
                    play:'50.5万',
                    danmu:'2811',
                    time:'13:31'
                },
            ],
            list2:[
                {
                    img:require('../img/video4.png'),
                    name:'快乐阿依',
                    title:'骑 车 与 砍 杀',
                    play:'139.2万',
                    danmu:'2561',
                    time:'1:56'
                },
                {
                    img:require('../img/video5.jpg'),
                    name:'观察者网',
                    title:'“请求网友理性消费，不要神化鸿星尔克”',
                    play:'171万',
                    danmu:'7514',
                    time:'1:55'
                },
                {
                    img:require('../img/video6.jpg'),
                    name:'瓶子君152',
                    title:'神奇操作！令人智熄！盘点柯南离谱TV原创剧集（第二回）',
                    play:'60万',
                    danmu:'5435',
                    time:'12:22'
                },
            ]
        }
    }
}
</script>