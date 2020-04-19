import axios from 'axios';

const state = {
    profile: null
}

const getters = {
    isProfile: state => !! state.profile,
    profile: state => state.profile
}

const actions = {
    fetchProfile: async({commit}) => {
        console.log("ooo");
        try {
            const res = await axios.get('http://localhost:5000/profile/me');
            console.log(res.data);
            commit('fetch_profile',res.data);
        } catch (err) {
            const error = err.reponse.data.errors
            console.log(error);
        }
    }
}

const mutations = {
    fetch_profile: (state,profile) => {
        state.profile = profile
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}