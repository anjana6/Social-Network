import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './src/components/Home';
import SignUpForm from './src/components/SignUpForm';
import Post from './src/components/Post';
import store from './src/store/index';


Vue.use(VueRouter);

console.log("hii")

const ifAuthenticated = (to,from,next) =>{
  console.log(store.getters.isLoggedIn);
  if(!store.getters.isLoggedIn){
    
    next()
    return
  }
  next('/post');
}

export const router = new VueRouter({
    mode:'history',
  routes:[
    {path:'/',component:Home,beforeEnter:ifAuthenticated},
    {path:'/signup', component:SignUpForm},
    {path:'/post',component:Post}
  ]
})