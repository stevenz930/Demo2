<template>
    <div class="anm-mg">
        <div class="cover">
            <img src="../img/animation-cover1.jpg" alt="">
            <div>
                <span>161.1万追番</span>
            </div>
        </div>
        <p>异世界迷宫黑心企业</p>
        <p style="font-size: 12px;color: #a6abaf;">更新至第3话</p>
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
</style>

<script>
export default {
    data(){
        return{
            list:[
                {
                    img:require('../img/animation-cover1.jpg'),
                    follow:'161.1万',
                    title:'异世界迷宫黑心企业',
                    news:'更新至第3话'
                },
            ]
        }
    }
}
</script>