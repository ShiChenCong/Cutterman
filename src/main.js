import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//引入路由
import first from './first.vue'
import buy from './buy.vue'
import banner from './banner.vue'
import install from './install.vue'
const mr={
    template:'<router-view></router-view>'
};
const router=new VueRouter({
  hashbang:false,
  history:true,
	//routes:[{path:'/',component:mr,children:[{path:'/',redirect:'/app'},{path:'/app',component:App},{path:'/first',component:first}]}]
	routes:[{path:'',component:banner},{path:'/buy',component:buy},{path:'/install',component:install}]
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
  // components:{
  //     App
  // },
  // template:"<App/>"
})

