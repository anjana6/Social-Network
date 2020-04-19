<template>
    <v-container>
        <div v-if="isProfile">
            {{profile.company}}
        </div>
    </v-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name:'Profile',
    computed:{
        ...mapGetters(['profile','isProfile'])
    },
    methods:{
        ...mapActions(['fetchProfile'])
    },
    created(){
        this.fetchProfile()
    }

}
</script>