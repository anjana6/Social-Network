import axios from 'axios';
import {router} from '../../../router';
const state = {
    token: localStorage.getItem('token') || '',
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    loggin: async({commit},body) => {
        console.log(body);
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        try {
           const res = await axios.post('http://localhost:5000/auth/signin',body,config); 
           //console.log(res);
           const token = res.data.token;
           console.log(token);
           localStorage.setItem('token',token);
           axios.defaults.headers.common['x-auth-token'] = token
            router.push('/post');
           commit('auth_success',token);
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);
            commit('auth_fail');
            localStorage.removeItem('token');
        }
        
    },
    register: async({commit},body) => {
        //console.log(body);
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        try {
            const res = await axios.post('http://localhost:5000/auth/signup',body,config);
            //console.log(res);
            const token = res.data.token;
            localStorage.setItem('token',token);
            router.push('/post');
            commit('auth_success',token);
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);
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
    },
    auth_fail:(state) => {
        state.token='';
    },
    logout:(state) =>{
        state.token=''
    }
};

export default{
    state,
    getters,
    actions,
    mutations

}