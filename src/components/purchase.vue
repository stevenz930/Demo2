<template>
    <div style="background:#f0f1f3">
        <div class="toptop">
            <div class="top" style="margin:10px 2px">
                <div class="t_left">
                    <span style="font-size:14px;font-weight:600;">会员购</span>
                    <span style="font-size:12px;color:#989da3">官方直营·正品保证</span>
                </div>
                <div class="t_right">
                    <span class="iconfont icon-iconset0338"></span>
                    <span class="iconfont icon-gouwuche"></span>
                    <span class="iconfont icon-wode1"></span>       
                </div>   
            </div>

            <div class="search" id="search">
                <div class="search-box">
                    <i class="iconfont icon-sousuo"></i>
                    <i class="iconfont icon-xiangji"></i>
                </div>
                <span style="margin:2px;font-size:14px;font-weight:600">ALL</span>
            </div>
        </div>
         <!-- 会员购种类*/ -->
        <div class="buyType" style="background:white;padding-top:1px;padding-bottom:20px">
            <ul>
                <li>
                    <span class="iconfont icon-shouban"></span>
                    <p>手办</p>
                </li>
                <li>
                    <span class="iconfont icon-tvdianshi"></span>
                    <p>周边</p>
                </li>
                <li>
                    <span class="iconfont icon-piao"></span>
                    <p>漫展电影</p>
                </li>
                <li>
                    <span class="iconfont icon-shumianshencha"></span>
                    <p>图书漫画</p>
                </li>
                <li>
                    <span class="iconfont icon-youxishoubing"></span>
                    <p>游戏装备</p>
                </li>
                <li>
                    <span class="iconfont icon-clothes"></span>
                    <p>次元服饰</p>
                </li>
            </ul>
        </div>
        <!-- 扭蛋和魔力赏 -->
        <div class="advertisement">
            <ul>
                <li>
                    <img src="../img/niudan.png" alt="">
                </li>
                <li>
                    <img src="../img/molishang.png" alt="">
                </li>
            </ul>
        </div>

        <!-- 今日上新 抢先看 人气排行 签到有礼 -->
        <div class="advertisement2">
            <ul>
                <li>
                    <img src="../img/jinrishangxin.jpg" alt="">
                </li>
                <li>
                    <img src="../img/qiangxiankan.jpg" alt="">
                </li>
                <li>
                    <img src="../img/renqipaihang.jpg" alt="">
                </li>
                <li>
                    <img src="../img/qiandaoyouli.jpg" alt="">
                </li>
            </ul>
        </div>

        <div class="goods">

            <ul>
                <li>
                    <img src="../img/goods1.jpg" alt="">
                    <div class="details">
                    <h5 class="tittle"><span class="yushou">预售</span> 双翼社 阴阳师 鬼切 霜风白璟ver.手办</h5>
                    <h5  class="bangdan">
                        <span>鬼切榜NO.1</span> <span>新品</span> </h5>
                    </div>
                    <h5 class="money">￥888</h5>
                </li>
                <li>
                    <img src="../img/goods2.jpg" alt="">
                    <div class="details">
                    <h5 class="tittle"><span class="yushou">预售</span> 双翼社 阴阳师 鬼切 霜风白璟ver.手办</h5>
                    <h5  class="bangdan">
                        <span>单体潮玩榜NO.1</span> </h5>
                    </div>
                    <h5 class="money">￥233</h5>
                </li>
            </ul>
             <ul>
                <li>
                    <img src="../img/goods1.jpg" alt="">
                    <div class="details">
                    <h5 class="tittle"><span class="yushou">预售</span> 双翼社 阴阳师 鬼切 霜风白璟ver.手办</h5>
                    <h5  class="bangdan">
                        <span>鬼切榜NO.1</span> <span>新品</span> </h5>
                    </div>
                    <h5 class="money">￥888</h5>
                </li>
                <li>
                    <img src="../img/goods2.jpg" alt="">
                    <div class="details">
                    <h5 class="tittle"><span class="yushou">预售</span> 双翼社 阴阳师 鬼切 霜风白璟ver.手办</h5>
                    <h5  class="bangdan">
                        <span>单体潮玩榜NO.1</span> </h5>
                    </div>
                    <h5 class="money">￥233</h5>
                </li>
            </ul>
             <ul>
                <li>
                    <img src="../img/goods1.jpg" alt="">
                    <div class="details">
                    <h5 class="tittle"><span class="yushou">预售</span> 双翼社 阴阳师 鬼切 霜风白璟ver.手办</h5>
                    <h5  class="bangdan">
                        <span>鬼切榜NO.1</span> <span>新品</span> </h5>
                    </div>
                    <h5 class="money">￥888</h5>
                </li>
                <li>
                    <img src="../img/goods2.jpg" alt="">
                    <div class="details">
                    <h5 class="tittle"><span class="yushou">预售</span> 双翼社 阴阳师 鬼切 霜风白璟ver.手办</h5>
                    <h5  class="bangdan">
                        <span>单体潮玩榜NO.1</span> </h5>
                    </div>
                    <h5 class="money">￥233</h5>
                </li>
            </ul>
        </div>
        <v-footer></v-footer>
    </div>
    
</template>

<style scoped>

.toptop{
    position: fixed;
    width: 100%;
    top:0px;
    background: white;
}

.top{
    background-color: white;
    display: flex;
    height: 20px;
    color: black;
    font-size: 18px;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between  ;
}

.top .t_right{
    float: right;
    display: flex;
}
.top .t_right span{
    margin: 0 5px;
    font-size: 20px;
    font-weight: 600;
    color: #61666c;
}

.search{
    background:white;
    height: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.search-box{
    height: 30px;
    background: #f1f3f5;
    width: 90%;
    margin: 0 6px;
    border-radius: 10px;
    color: #aeaeae;
    /* text-align: center; */
    /* line-height: 40px; */
    display: flex;
    justify-content:space-between ;
    align-items: center;
    padding: 0 10px;    
}
.search.box>i{
    margin: 5px;
}


.buyType{
    margin: 20px 0;
}
.buyType ul{
    margin-top: 70px;
    padding:0px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    overflow: hidden;
}
.buyType ul>li{
    width: 16.6%;
    text-align: center;
    color: black;
    margin-top: 10px;
    list-style: none;
}
.advertisement{
    width: 100%;
}
.advertisement ul{
    margin: 0px;
    list-style: none;
    padding:0px;
    display: flex;
    flex-wrap: wrap;
    flex-flow: row;

}
.advertisement ul>li{
    width:50%;
}
.advertisement img{width:98%} 

.advertisement2 ul{
    margin: 0px;
    list-style: none;
    padding:0px;
    display: flex;
    flex-wrap: wrap;
    flex-flow: row;

}
.advertisement2 ul>li{
    width:50%;
}
.advertisement2 img{width:100%} 

.goods{
    width: 98%;
}
.goods .details h5{
    margin: 0px;
    padding: 5px;
}

.goods ul{
    display: flex;
    width: 96%;
    list-style: none;
    padding: 10px;
    margin: 0px;
}
.goods li{
    width: 50%;
    background:white;
    margin: 4px;
    border-radius: 5px;
}
.goods ul>li>img{
    width:100%;
    border-radius: 5px;
    margin: 1px;
}

.goods .yushou{
    /* color: white; */
    background-color: #ecece9;
    margin: 0 3px;
    padding: 1px;
}
.goods .yushou p{
    color: #545452;
    margin: 0px;
}

.goods .tittle h5{
    margin: 0px;
}

.goods .bangdan span{
    color: #b38866;
    background-color: #ffecd8;
    margin: 0 3px;
    padding: 1px;
    height: 28px;
    width: 20px;
}
.goods .bangadn p{
    color: #b38866;
    margin: 0px;
}

.goods h5{
    margin: 0px;
}

</style>
