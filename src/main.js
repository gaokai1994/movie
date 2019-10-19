// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Movie from './components/Movie'
import Mine from './components/Mine'
import Cname from './components/Cname'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes =[
  {path:'/Mine',name:'MineLink',component:Mine},
  {path:'/Movie',name:'MovieLink',component:Movie},
  {path:'/Cname',name:'CnameLink',component:Cname},
  {path:'*',redirect:'/Movie'}
]

const router =new VueRouter({
  routes,
  mode:'history'
});

// export default{
//   components:{
//     "app-header":Header
// }
// }


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});



