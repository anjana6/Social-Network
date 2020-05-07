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
            commit('get_post',res.data);
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);
        }
    },
    addPost: async({commit},data) => {
       
        console.log(data.file)
        const formData = new FormData();
        
        formData.append('photo',data.file);
        formData.append('text',data.text);
        
        const config = {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        };
        // const body = JSON.stringify({});
        try {
            const res = await axios.post('http://localhost:5000/post/',formData,config);
            console.log(res.data);
            commit('add_post');
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);
            
        }
    },

    fetchComments: async({commit},post_id) => {
        try {
            const res = await axios.get(`http://localhost:5000/post/comment/${post_id}`);
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
    },

    addLike: async({commit},id) => {
        console.log(id);
        try {
            const res = await axios.put(`http://localhost:5000/post/like/${id}`);
            commit('update_like',{res,id});
        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors);    
        }
    },
    removeLike: async({commit},id) => {
        try {
            const res = await axios.put(`http://localhost:5000/post/unlike/${id}`);
            commit('update_like',{res,id});
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
    },
    update_like: (state,{res,id}) => {
        state.posts = state.posts.map(post => post._id === id? {...post,likes:res.data}: post );
    },
    add_post: (state) => {
        console.log(state);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}