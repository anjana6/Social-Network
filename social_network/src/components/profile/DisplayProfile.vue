<template>
    <div v-if="ownerprofile">
       <Profile :ownerprofile="ownerprofile"/>
    </div>
    <div v-else>
        <CreateProfile/>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import Profile from './Profile';
import CreateProfile from './CreateProfile';
export default {
    name:'DisplayProfile',
    components:{
        Profile,
        CreateProfile
    },
    computed:{
        ...mapGetters(['ownerprofile'])
    },
    methods:{
        ...mapActions(['fetchOwnerProfile'])
    },
    created(){
        this.fetchOwnerProfile()
    }
    

}
</script>