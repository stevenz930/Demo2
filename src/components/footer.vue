<template>
    <div class="myfooter">
        <transition name="fade">
            <span id="plus" v-show="!isShow">
                <a><i class="iconfont icon-zhibo"></i><p>开直播</p></a>
                <a><i class="iconfont icon-paishe"></i><p>拍摄</p></a>
                <a><i class="iconfont icon-dianying"></i><p>上传</p></a>
                <a><i class="iconfont icon-moban"></i><p>模板创作</p></a>
                <div class="bubbleTail"></div>
            </span>
        </transition>
        
        <div id="myfooter">
            <router-link to="/index/recommend"><i class="iconfont icon-shouye"></i><p>首页</p></router-link>
            <router-link to="/dynamic"><i class="iconfont icon-iconfontdongtai"></i><p>动态</p></router-link>

            <span @click="click"><i id="k" class="iconfont icon-jiahao"></i></span>

            <router-link to="/purchase"><i class="iconfont icon-gouwu1"></i><p>会员购</p></router-link>
            <router-link to="/mine"><i class="iconfont icon-bilibili-line"></i><p>我的</p></router-link>
        </div>
    </div>
</template>

<style>
.myfooter{
    position: fixed;
    bottom: 0;
    opacity: 0.98;
    width: 100%;
    z-index: 100;
}
#myfooter{
    position: fixed;
    bottom: 0;
    width: 100%;

    display: flex;
    height: 50px;
    color:#767b80;
    border-top: 1px solid #ddd;
    align-items: center;
    background-color: white;
    justify-content: space-between;
}
#myfooter a{
    width: 20%;
    text-align: center;
}
#myfooter p{
    font-size: 10px;
}
#myfooter i{
    font-size: 20px;
    font-weight: bold;
}
#myfooter #k{
    color: white;
    background: #ff63a2;
    border-radius: 37%;
    width: 100%;
    padding: 15px;
    height: 100%;
    font-size: 12px;
}
#myfooter .router-link-exact-active{
    color: #ff85ab;
}
#plus{
    background-color: white;
    float: left;
    position: relative;
    width: 50%;
    height: 50px;
    margin-bottom: 80px;
    left: 24%;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    padding: 0 10px;
    box-shadow: 1px 0px 10px #d1d1d1;
}
#plus .bubbleTail{
    position: absolute;
    top: 100%;
    left: 98px;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent;
    border-top-width: 10px;
    border-top-color: currentColor;
    color: rgb(255, 255, 255);
}
#puls a{
    bottom: 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
    export default{
        name:'myfooter',
        data(){
            return{
                isShow:true,
            }
        },
        methods:{
            click(){
                if(this.isShow==false){
                    this.isShow=true;
                }else if(this.isShow==true){
                    this.isShow=false;
                }
            }
        }
    }
    //将模版导出
</script>