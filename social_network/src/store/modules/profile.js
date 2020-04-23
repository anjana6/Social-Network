import axios from 'axios';

const state = {
    ownerprofile: null,
    profiles: [],
    profile: null,
}

const getters = {
    isProfile: state => !! state.profile,
    ownerprofile: state => state.ownerprofile,
    profiles: state => state.profiles,
    profile: state => state.profile
}

const actions = {
    fetchOwnerProfile: async({commit}) => {
        //console.log("ooo");
        try {
            const res = await axios.get('http://localhost:5000/profile/me');
            console.log(res.data);
            commit('fetch_ownerprofile',res.data);
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
    },
    fetchProfile: async ({ commit }, id) => {
        console.log(id);
        try {
            const res = await axios.get(`http://localhost:5000/profile/user/${id}`);
            console.log(res.data);
            commit('fetch_profile',res.data);
        } catch (err) {
            const error = err.reponse.data.errors;
            console.log(error);
            
        }
    }
}

const mutations = {
    fetch_ownerprofile: (state,ownerprofile) => {
        state.ownerprofile = ownerprofile
    },
    fetch_profiles:(state,profiles) => {
        state.profiles = profiles
    },
    fetch_profile: (state, profile) => {
        state.profile = profile
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}