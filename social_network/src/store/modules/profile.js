import axios from 'axios';

const state = {
    profile: null,
    profiles: []
}

const getters = {
    isProfile: state => !! state.profile,
    profile: state => state.profile,
    profiles: state => state.profiles
}

const actions = {
    fetchProfile: async({commit}) => {
        //console.log("ooo");
        try {
            const res = await axios.get('http://localhost:5000/profile/me');
            console.log(res.data);
            commit('fetch_profile',res.data);
        } catch (err) {
            const error = err.reponse.data.errors
            console.log(error);
        }
    },
    fetchProfiles: async ({commit}) =>{
        try {
        console.log('pofils')
        const res = await axios.get('http://localhost:5000/profile/');
        console.log(res.data);
        commit('fetch_profiles',res.data);
        } catch (err) {
            const error = err.reponse.data.errors;
            console.log(error);
        }
        
    }
}

const mutations = {
    fetch_profile: (state,profile) => {
        state.profile = profile
    },
    fetch_profiles:(state,profiles) => {
        state.profiles = profiles
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}