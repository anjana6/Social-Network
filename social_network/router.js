import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './src/store/index';

import Home from './src/components/layout/Home';
import SignUpForm from './src/components/auth/SignUpForm';
import Post from './src/components/post/Post';
import Comment from './src/components/post/Comment';
import AddPost from './src/components/post/AddPost';
import Profile from './src/components/profile/Profile';
import DeveloperProfile from './src/components/profile/DeveloperProfile';
import About from './src/components/profile/About'



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
  // default is hash router so we use mode for conver to browser router(rmove the # in your url)
    mode:'history',
  routes:[
    {path:'/',name:'home',component:Home,beforeEnter:ifAuthenticated},
    {path:'/signup',name:'signup',component:SignUpForm},
    {path:'/post',name:'post',component:Post},
    {path:'/comment/:comment_id',name:'comment',component:Comment},
    {path:'/addpost',name:'addpost',component:AddPost},
    {path:'/profile',name:'profile',component:Profile},
    {path:'/developer',name:'developer', component: DeveloperProfile},
    {path:'/about/:id',name:'about',component: About}
  ]
})