<template>
    <v-container v-if="!!profile">
        {{profile}}
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