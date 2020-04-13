import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './src/store/index';

import Home from './src/components/layout/Home';
import SignUpForm from './src/components/auth/SignUpForm';
import Post from './src/components/post/Post';
import Comment from './src/components/post/Comment';



Vue.use(VueRouter);

//console.log("hii")

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
    {path:'/',name:'home',component:Home,beforeEnter:ifAuthenticated},
    {path:'/signup',name:'signup',component:SignUpForm},
    {path:'/post',name:'post',component:Post},
    {path:'/comment',name:'comment',component:Comment}
  ]
})