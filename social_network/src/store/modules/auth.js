import axios from 'axios';
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
           console.log(res);
           const token = res.data.token;
           localStorage.setItem('token',token);
           commit('auth_success',token);
        } catch (err) {
            console.log(err.message);
            commit('auth_fail');
            localStorage.removeItem('token');
        }
        
    },
    register: ({commit}) => {
        try {
            const res = axios.post('http://localhost:5000/auth/signup');
            const token = res.data.token;
            localStorage.setItem('token',token);
            commit('auth_success',token);
        } catch (err) {
            console.log(err.message);
            commit('auth_fail');
            localStorage.removeItem('token');
        }
    },
    logout: ({commit }) =>{
         commit('logout');
         localStorage.removeItem('token');

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