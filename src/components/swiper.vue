<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(v,i) in imglist" :key="i">
      <div class="img swiper-zoom-container"><img :src="v.img" width="394"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<style>
  swiper-slide{
    width: 100%;
    background: red;
    width: auto;
  }
  swiper-slide>img{
    position: absolute;
  }
</style>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

  export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesOffsetBefore : 5,
          centeredSlides : true,
          centeredSlidesBounds: true,
          autoplay:true,
          spaceBetween:30,
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          }
        },
        imglist:[
          {
            img:require('../img/rotate1.png'),
          },
          {
            img:require('../img/rotate2.jpg'),
          },
          {
            img:require('../img/rotate3.jpg'),
          },
          {
            img:require('../img/rotate4.jpg'),
          },
        ]
      }
    }
  }
</script>