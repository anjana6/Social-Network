import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import VueRouter from 'vue-router';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';


Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  // default is hash router so we use mode for conver to browser router(rmove the # in your url)
  mode:'history',
  routes:[
    {path:'/',component:Home},
    {path:'/signup', component:SignUpForm}
  ]
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
