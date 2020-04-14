import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
//import VueRouter from 'vue-router';
// import Home from './components/Home';
// import SignUpForm from './components/SignUpForm';
import {router} from '../router';
import axios from 'axios';


Vue.config.productionTip = false;

const token = localStorage.getItem('token');
if(token){
  axios.defaults.headers.common['x-auth-token'] = token
}

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
