import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import post from './modules/post';
import profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        auth,
        post,
        profile
    }
})