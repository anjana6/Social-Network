import axios from "axios";

const state ={
    loading: true,
     posts : [],
     comments:[],
     post : null
}

const getters = {
    allPost: state => state.posts,
    loading: state => state.loading,
}

const actions = {
    fetchPosts: async({commit}) => {
        try {
            const res = await axios.get('http://localhost:5000/post/');
            console.log(res.data);
            commit('get_post',res.data);
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);
        }
    },

    fetchComments: async(post_id) => {
        console.log('hoooo');
        console.log(post_id);
        try {
            const res = await axios.get(`http://localhost:5000/post/comment/${post_id}`);
            console.log(res.data);
        } catch (err) {
            const errors = err.response.data.errors
            console.log(errors);
        }
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