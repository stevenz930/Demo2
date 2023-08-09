// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './iconfont/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
swiper.use([Navigation, Pagination, Autoplay])

Vue.config.productionTip = false

import Footer from './components/footer.vue'
Vue.component('v-footer',Footer)
import Top from './components/top.vue'
Vue.component('v-top',Top)
import Swiper from './components/swiper.vue';
Vue.component('v-swiper', Swiper);
import VideomgBig from './components/video-mg-big.vue'
Vue.component('v-video-mg-big',VideomgBig)
import VideomgLong from './components/video-mg-long.vue'
Vue.component('v-video-mg-long',VideomgLong)
import Animation_mg from './components/animation-mg.vue'
Vue.component('v-animation-mg',Animation_mg)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
