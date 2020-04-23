<template>
    <v-container v-if="!!profile">
        <v-content>
            <v-layout row m-5 class="pro-header">
                <v-flex xs4>
                    profile Image
                </v-flex>
                <v-flex xs8>
                    <h1 class="display-3">{{profile.user.name}}</h1>
                </v-flex>
            </v-layout>
        </v-content>
       

    </v-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name:"About",
    computed:{
        ...mapGetters(['profile'])
    },
    methods:{
        ...mapActions(['fetchProfile'])
    },
    created(){
        this.fetchProfile(this.$route.params.id)
    }
}
</script>

<style  scoped>
    .pro-header{
        border: 1px solid black;
        align-items: center;
    }
</style>