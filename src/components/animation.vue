<template>
    <div class="wapper">
        <v-top></v-top>
        <div class="head-img">
            <img src="../img/animation1.jpg" alt="">
            <div class="img-mg">
                <p>夕阳下，想亲吻她绯红的面庞</p>
            </div>
        </div>
        <div class="anm-type">
            <div>
                <span class="iconfont icon-aichegujiabeifen7"></span><p>全部内容</p>
            </div>
            <div>
                <span class="iconfont icon-xiaodianshiicon"></span><p>番剧</p>
            </div>
            <div>
                <span class="iconfont icon-guochuang"></span><p>国创</p>
            </div>
            <div>
                <span class="iconfont icon-shijianbiao"></span><p>时间表</p>
            </div>
        </div>
        <div class="anm-rec">
            <h4 style="color:#242628">番剧推荐</h4>
            <p style="color:#a6abaf;font-size:12px;">查看更多 ></p>
        </div>
        <ul style="background-color: white;">
            <li v-for="(v,i) in list" :key="i">
                <div class="anm-mg">
                    <div class="cover">
                        <img :src="v.img" alt="">
                        <div>
                            <span>{{v.follow}}追番</span>
                        </div>
                    </div>
                    <p>{{v.title}}</p>
                    <p style="font-size: 12px;color: #a6abaf;">{{v.news}}</p>
                </div>
                <div class="anm-mg">
                    <div class="cover">
                        <img :src="v.img2" alt="">
                        <div>
                            <span>{{v.follow2}}追番</span>
                        </div>
                    </div>
                    <p>{{v.title2}}</p>
                    <p style="font-size: 12px;color: #a6abaf;">{{v.news2}}</p>
                </div>
            </li>
        </ul>
        <v-footer></v-footer>
    </div>
</template>

<style scoped>
    .anm-mg{
        width: 48%;
        height: auto;
        margin: 5px;
        border-radius: 5px;
        background: white;
    }
    .cover{
        position: relative;
        margin: 2px 0;
    }
    .cover>img{
        width: 100%;
        border-radius: 5px;
    }
    .cover>div{
        display: flex;
        position: absolute;
        align-items: flex-end;
        background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
        height:50px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 5px;
    }
    .cover>div>span{
        position: absolute;
        right: 0;
        color: white;
        font-size: 12px;
        padding: 2px;
        margin: 2px;
    }
    .anm-mg p{
        margin: 4px 2px;
        font-size: 15px;
    }
    .head-img{
        padding: 10px;
        display: flex;
        justify-content: center;
        position: relative;
        background-color: white;
    }
    .head-img>img{
        width: 98%;
        border-radius: 5px;
    }
    .img-mg{
        display: flex;
        justify-content: flex-start;
        position: absolute;
        color: white;
        background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
        bottom: 10px;
        width: 92%;
        font-size: 13px;
        padding-bottom: 4px;
        border-radius: 2px;
    }
    .anm-type{
        display: flex;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
        background-color: white;
    }
    .anm-type>div{
        flex-grow: 1;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .anm-type span{
        color: white;
        border-radius: 100%;
        padding: 10px;
        margin-bottom: 5px;
    }
    .icon-aichegujiabeifen7{
        background: #23aee3;    
    }
    .icon-xiaodianshiicon{
        background: #fe5b78;
    }
    .icon-guochuang{
        background: #fe5b78;
    }
    .icon-shijianbiao{
        background: #23aee3;
    }
    .anm-type p{
        font-size: 12px;
        color: #696f72;
        font-weight: 600;
    }
    .anm-rec{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 10px;
        background-color: white;
    }
    li{
        display: flex;
        width: 98%;
        margin: 0 5px;
    }
</style>

<script>
    export default{
        data(){
        return{
            list:[
                {
                    img:require('../img/animation-cover1.jpg'),
                    follow:'161.1万',
                    title:'异世界迷宫黑心企业',
                    news:'更新至第3话',
                    img2:require('../img/animation-cover2.jpg'),
                    follow2:'547.4万',
                    title2:'转生成蜘蛛又怎样！',
                    news2:'已完结, 全24话'
                },
                {
                    img:require('../img/animation-cover3.png'),
                    follow:'926.2万',
                    title:'关于我转生变成史莱姆这档事 第二季',
                    news:'更新至第39话',
                    img2:require('../img/animation-cover4.jpg'),
                    follow2:'360.3万',
                    title2:'转生成为了只有乙女游戏破灭Flag的邪恶大小姐',
                    news2:'已完结, 全12话'
                },
                {
                    img:require('../img/animation-cover5.jpg'),
                    follow:'154.6万',
                    title:'精灵幻想记',
                    news:'更新至第3话',
                    img2:require('../img/animation-cover6.jpg'),
                    follow2:'205.2万',
                    title2:'我立于百万生命之上',
                    news2:'已完结, 全12话'
                },
            ]
        }
    }
    }
</script>