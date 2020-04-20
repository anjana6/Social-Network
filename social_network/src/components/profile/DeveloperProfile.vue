<template>
    <v-container>
        devolper
    </v-container>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name:"DeveloperProfile",
    methods:{
        ...mapActions(['fetchProfiles'])
    },
    created(){
        this.fetchProfiles()
    }
}
</script>