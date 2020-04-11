import axios from "axios";

const state ={
    loading: true,
     posts : [],
     post : null
}

const getters = {
    allPost: state => state.posts,
    loading: state => state.loading,
}

const actions = {
    fetchPosts: async({commit}) => {
        //console.log('hii');
        try {
            const res = await axios.get('http://localhost:5000/post/');
            console.log(res.data);
            commit('get_post',res.data);
        } catch (err) {
            console.log(err.message);
        }
    },

    fetchPost: () =>{

    }
}

const mutations = {
    get_post: (state,posts) => {
        state.posts = posts;
        state.loading = true;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}