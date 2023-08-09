<template>
    <div style="background-color:white">
        <div class="fline">
            <i class="iconfont icon-scan" style="font-size:22px"></i>
            <i class="iconfont icon-clothes" style="font-size:18px"></i>
            <i class="iconfont icon-yueliang" style="font-size:22px"></i>
        </div>
        <!-- 上面这是顶页3个按钮 -->
        <div class="head">
            <div style="width:20%; padding:0px 10px">
                <img src="../img/head-portrait.jpg">
            </div>
            <div class="hbox" style="width:80%">
                <div class="hfline">
                    <span style="color:#fd92af;font-size:20px">B站用户</span>
                    <i style="color:#9ecbff;font-size:18px;padding:4px 4px" class="iconfont icon-man"></i>
                    <i style="color:#ff6e04;font-size:22px" class="iconfont icon-icon-test"></i>
                </div>
                <div class="hsline">
                    <div style="background:#f97397;color:white;border-radius:4px;padding:2px 3px;font-size:13px">
                        年度大会员
                    </div>
                    <div style="color:#c6c6c6;margin-right:10px">
                        空间
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                </div>          
                <div style="color:#b3b3b3">
                    <span style="padding: 0px 10px 0px 0px;font-size:14px">B币：0.0 </span>
                    <span style="padding: 0px 10px 0px 0px;font-size:14px">硬币：792</span>
                </div>
            </div>
        </div>
        <!-- 上面这是用户名和头像部分 -->
        <div class="mes"> 
            <div class="mes-three">
                <p>8</p>
                <span>动态</span>
            </div>
            <div class="mes-three">
                <p>108</p>
                <span>关注</span>
            </div>
            <div class="mes-three">
                <p>14</p>
                <span>粉丝</span>
            </div>
        </div>
        <!-- 上面这是动态/关注/粉丝部分 -->
        <div class="dahui">
            <div class="bet">
                <div>
                    <p style="color:white;font-weight:600">我的大会员</p>
                    <span style="color:white;font-size:10px">番剧国创抢先看</span>
                </div>
                <div class="bet-right">
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
        </div>
        <!-- 上面这是大会员部分 -->
        <div class="bluepart" style="font-size:12px">
            <div class="part">
                <i class="iconfont icon-huancun"></i>
                <p>离线缓存</p>
            </div>
            <div class="part">
                <i class="iconfont icon-lishijilu"></i>
                <p>历史记录</p>
            </div>
            <div class="part">
                <i class="iconfont icon-wodeshoucang"></i>
                <p>我的收藏</p>
            </div>
            <div class="part">
                <i class="iconfont icon-shaohouzaikan"></i>
                <p>稍后再看</p>
            </div>
        </div>
        <!-- 上面这是4个蓝色部件部分 -->
        <div class="produce" style="padding-left:5px">
            <div>
                <span style="font-size:14px">创作中心</span>
            </div>
            <div style="font-size:14px;background:#ff679a;border-radius:70px;color:#faf8fb;padding:8px 10px">
                <i class="iconfont icon-fabu"></i>
                <span>发布</span>
            </div>
        </div>
        <!-- 上面这是创作中心的操作部分 -->
        <div class="produce-iconfont" style="font-size:12px">
             <div class="part">
                <i class="iconfont icon-dengpao"></i>
                <p>创作首页</p>
            </div>
            <div class="part">
                <i class="iconfont icon-wenjianguanli"></i>
                <p>稿件管理</p>
            </div>
            <div class="part">
                <i class="iconfont icon-jinqi"></i>
                <p>打卡挑战</p>
            </div>
            <div class="part">
                <i class="iconfont icon-qizi"></i>
                <p>有奖活动</p>
            </div>
        </div>
        <!-- 上面这是创作中心4个黄色图标部分 -->
        <div class="tip" style="font-size:14px">
            <div style="padding:0px 10px;">
                <i class="iconfont icon-qizi_icon" style="color:#ffb200"></i>
                <span>快来！ UP主正在派送40万奖金</span>
            </div>
            <div style="padding:0px 10px;color:#fc8cb1">
                <span>立即参与</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <span style="font-size: 14px;padding:0px 15px;font-weight:bold;">推荐服务</span>
        <div class="fuwu" style="font-size:12px">
            <div class="ffline">
                <div>
                    <i class="iconfont icon-wodekecheng"></i>
                    <p>我的课程</p>
                </div>
                <div>
                    <i class="iconfont icon-shoujiqia"></i>
                    <p>免流量服务</p>
                </div>
                <div>
                    <i class="iconfont icon-clothes"></i>
                    <p>个性装扮</p>
                </div>
                <div>
                    <i class="iconfont icon-hongbao"></i>
                    <p>邀好友赚红包</p>
                </div>
            </div>
            <div class="ffline" style="font-size:12px">
                <div>
                    <i class="iconfont icon-qianbao"></i>
                    <p>我的钱包</p>
                </div>
                <div>
                    <i class="iconfont icon-gouwu1"></i>
                    <p>会员购中心</p>
                </div>
                <div>
                    <i class="iconfont icon-zhibo"></i>
                    <p>直播中心</p>
                </div>
                <div>
                    <i class="iconfont icon-jiang"></i>
                    <p>推荐有奖</p>
                </div>
            </div>
            <div class="ffline" style="font-size:12px">
                <div>
                    <i class="iconfont icon-luntan"></i>
                    <p>反馈论坛</p>
                </div>
                <div>
                    <i class="iconfont icon-iconfontzhizuobiaozhun023140"></i>
                    <p>充能领福利</p>
                </div>
                <div>
                    <i class="iconfont icon-ticket"></i>
                    <p>BW游乐园</p>
                </div>

            </div>
        </div>
        <span style="font-size: 14px;padding:0px 15px;font-weight:bold;">更多服务</span>
        <div class="morefuwu">
            <div class="morefuwu-bet">
                <div>
                    <i class="iconfont icon-kefu"></i>
                    <span>联系客服</span>
                </div>
                <div>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div class="morefuwu-bet">
                <div>
                    <i class="iconfont icon-zhihuiketang"></i>
                    <span>课堂模式</span>
                </div>
                <div>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div class="morefuwu-bet">
                <div>
                    <i class="iconfont icon-yusan"></i>
                    <span>青少年模式</span>
                </div>
                <div>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div class="morefuwu-bet">
                <div>
                    <i class="iconfont icon-shezhi"></i>
                    <span>设置</span>
                </div>
                <div>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
        <!-- 上面这是底部导航栏 -->
    </div>
</template>
<style>
.morefuwu{
    margin: 20px 0;
    padding-bottom: 20px;
}
.morefuwu .morefuwu-bet{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    text-align: center;
    padding: 5px 20px;
}
.morefuwu .morefuwu-bet i{
    color:#e88ba7;
    font-size: 20px;
}
.morefuwu .morefuwu-bet span{
    color:black;
    padding: 0px 10px;
    font-size: 14px;
}
.fuwu .ffline div>i{
    font-size: 25px;
    color: #fc91af;
}
.fuwu{
    margin-top: 10px;
}
.fuwu .ffline{
    display: flex;
    padding: 10px 0px;
}
.fuwu .ffline>div{
    width: 25%;
    text-align: center;
}
.tip{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    width: 90%;
    margin: 0 auto;
    padding: 15px 0px;
    background: #f6f7f9;
    border-radius: 4px;
    margin-bottom: 10px;
}
.produce-iconfont .part{
    width: 25%;
    text-align: center;
    padding: 10px 0px;
}
.produce-iconfont .part i{
    color: #fbbc1d;
    font-size: 30px;
}
.produce-iconfont{
    display: flex;
    margin-bottom: 10px;
}
.produce>div{
    font-weight:bold;
    padding: 5px 10px;
    font-size: 18px;
}
.produce{
    display: flex;
    padding: 0px 15px;
    justify-content: space-between;
    margin-bottom: 5px;
}
.bluepart{
    display: flex;
    margin-bottom: 10px;
}
.bluepart .part{
    width: 25%;
    text-align: center;
    padding: 10px 0px;
}
.bluepart .part i{
    color: #37a5e3;
    font-size: 30px;
}
.dahui{
    background-image: linear-gradient(#ffffff, #feebee);
}

.dahui .bet{
    display: flex;
    background: #ff679a;
    width: 88%;
    margin:0 auto;
    border-radius: 6px 6px 0px 0px;
    padding: 10px;
    justify-content:space-between;
}
.dahui .bet .bet-right{
    text-align: center;
    color: #fbc9da;
    margin: auto 0;
}
.mes .mes-three p{
    color:#5b5b5b;
    font-size:16px;
    font-weight:bold;
}
.mes .mes-three span{
    color:#b3b3b3;
    font-size:10px;
}
.mes .mes-three{
    width:33.3%;
    text-align: center;
    border-right:#eeeeee solid 1px; 
}
.mes{
    display: flex;
    margin-bottom: 10px;
}
.head .hbox>div{
    padding: 3px 0px;
}
.head .hsline{
    display: flex;
    justify-content: space-between;
}
.head .hfline{
    display: flex;
    
}
.head{
    display: flex;
    font-size: 15px;
    margin-bottom: 15px;
}

.head img{
    border-radius: 100%;
    width:90%;
    height:auto;
}

.fline{
    text-align: right;
    padding: 8px 0px;
}
.fline i{
    font-size: 25px;
    padding: 8px;
    color: #7a8084;
}


</style>


<script>
    export default{

    }
</script>