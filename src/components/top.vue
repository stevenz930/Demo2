<template>
    <div id="top">
        <div class="top-search">
            <img src="../img/head-portrait.jpg" alt="">
            <input type="text">
            <i class="iconfont icon-sousuo"></i>
            <i style="color:#646869;font-size:24px" class="iconfont icon-youxiang"></i>
        </div>
        <div class="top-change">
            <router-link to='/index/live'>直播</router-link>
            <router-link to='/index/recommend'>推荐</router-link>
            <router-link to='/index/hot'>热门</router-link>
            <router-link to='/index/animation'>追番</router-link>
        </div>
    </div>
    
</template>

<style scoped>

        .tab{
            width: 200px;
            height: 200px;
            border: 1px solid black;
            margin: 100px auto;
        }
        .tab ul{
            overflow: hidden;
        }
        .tab ul li{
            list-style: none;
            float: left;
            width: 25%;
            text-align: center;
        }



    #top{
        width: 100%;
        background: white;
        z-index: 99;
        position: sticky;
        top: -46px;
    }
    .top-search{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 55px;
    }
    .top-search i{
        color: #adaeb2;
    }
    img{
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin: 10px 15px;
    }
    input{
        height: 25px;
        width: 65%;
        border-radius: 50px;
        border: none;
        background: #f1f2f4;
    }
    .icon-sousuo{
        position: absolute;
        left:22%;
    }
    .icon-youxiang{
        margin: 10px;
        font-size: 25px;
    }
    .top-change{
        display: flex;
        text-align: center;
        height: 30px;
    }
    .top-change>a{
        flex-grow: 1;
        margin: 0 28px;
    }
    .top-change .router-link-exact-active{
        color: #ff85ab;
        border-bottom: 3px solid #ff85ab;
    }
</style>

<script>
export default {

}
</script>