import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//引入路由
import first from './first.vue'
import buy from './buy.vue'
import banner from './banner.vue'
import install from './install.vue'


const router=new VueRouter({
  hashbang:false,
  history:true,
	routes:[{path:'',component:banner},{path:'/buy',component:buy},{path:'/install',component:install},{path:'/first',component:first}]
});
router.beforeEach((to, from, next) => {
 // console.log(to);
 // console.log(from);
 // console.log(window.scrollY);
 // localStorage.setItem('last_dis',window.scrollY)

 next();
})
new Vue({
  el: '#app', 
  router,
  render: h => h(App),
})

