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
    comments: state => state.comments
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

    fetchComments: async({commit},post_id) => {
        try {
            const res = await axios.get(`http://localhost:5000/post/comment/${post_id}`);
            console.log(res.data);
            
            commit('fetch_comments',res.data);
            
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);
        }
    },
    addComment: async({commit},{id,text}) => {
        const body = JSON.stringify({text})
        
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        try {
            const res = await axios.post(`http://localhost:5000/post/comment/${id}`,body,config);
            console.log(res.data);
            commit('add_comment',res.data);
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);
        }
    }
}

const mutations = {
    get_post: (state,posts) => {
        state.posts = posts;
        state.loading = true;
    },
    fetch_comments: (state,comments) => {
        state.comments = comments;
    },
    add_comment:(state,comment) => {
        state.comments = comment;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}