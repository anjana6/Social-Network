import axios from 'axios';
import {router} from '../../../router';
import { setTimeout } from 'core-js';
const state = {
    token: localStorage.getItem('token') || '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    error:state => state.error
};

const actions = {
    loggin: async({commit},body) => {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        try {
           const res = await axios.post('http://localhost:5000/auth/signin',body,config); 
           const token = res.data.token;
           console.log(token);
           localStorage.setItem('token',token);
           axios.defaults.headers.common['x-auth-token'] = token
            router.push('/post');
           commit('auth_success',token);
        } catch (err) {
            const errors = err.response.data.error;
            // console.log(errors);
            commit('set_alert',errors);
            commit('auth_fail',errors);
            localStorage.removeItem('token');
        }
        
    },
    register: async({commit},body) => {
        
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        try {
            const res = await axios.post('http://localhost:5000/auth/signup',body,config);
            const token = res.data.token;
            localStorage.setItem('token',token);
            router.push('/post');
            commit('auth_success',token);
        } catch (err) {
            const errors = err.response.data.error;
            commit('set_alert',errors);
            commit('auth_fail');
            localStorage.removeItem('token');
        }
    },
    logout: ({commit }) =>{
         commit('logout');
         localStorage.removeItem('token');
         router.push('/')

    }
};
  
const mutations = {
    auth_success:(state,token) => {
        state.token = token; 
        state.error = null;
    },
    auth_fail:(state) => {
        state.token='';
       
    },
    logout:(state) =>{
        state.token=''
    },
    set_alert:(state,errors) =>{
        state.error = errors;
        setTimeout(() =>{
            state.error = null
        },5000);
    }
};

export default{
    state,
    getters,
    actions,
    mutations

}