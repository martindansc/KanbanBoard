import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io'

//include components
import GameRoom from './views/game_room.vue'
import Home from './views/home.vue'

Vue.use(VueSocketio, window.location.href);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: "/app/",
  routes: [
    { path: '/', component: Home },
    { path: '/gameRoom', component: GameRoom }
  ]
});

//Declare vue instance
new Vue({
  el: '#app',
  data: {},
  router
});