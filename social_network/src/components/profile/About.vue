<template>
    <v-container v-if="!!profile">
        <v-content>
            <v-layout row m-5 class="pro-header">
                <v-flex xs4>
                    profile Image
                </v-flex>
                <v-flex xs8>
                    <h1 class="display-3 ma-5">{{profile.user.name}}</h1>
                </v-flex>
            </v-layout>
        </v-content>
       <v-content>
         <v-layout row>
            <v-flex md4>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-briefcase</v-icon>
                    </v-avatar>
                        MObios<br><span>work palce</span>
                </v-banner>
            </v-flex>
            <v-flex md4>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-home</v-icon>
                    </v-avatar>
                        MObios<br><span>current city</span>
                </v-banner>
            </v-flex>
            <v-flex md4>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-map-marker-alt</v-icon>
                    </v-avatar>
                        MObios<br><span>Home twon</span>
                </v-banner>
            </v-flex>
         </v-layout>
       </v-content>
       <v-content>
        <h2>Education</h2>
         <v-layout row>
            <v-flex md6>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-map-marker-alt</v-icon>
                    </v-avatar>
                        MObios<br><span>school</span>
                </v-banner>
            </v-flex>
            <v-flex md6>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-map-marker-alt</v-icon>
                    </v-avatar>
                        MObios<br><span>campus</span>
                </v-banner>
            </v-flex>
         </v-layout>
       </v-content>
        <v-content>
        <h2>Basic Info</h2>
         <v-layout row>
            <v-flex md6>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-map-marker-alt</v-icon>
                    </v-avatar>
                        MObios<br><span>birthday</span>
                </v-banner>
            </v-flex>
            <v-flex md6>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-map-marker-alt</v-icon>
                    </v-avatar>
                        MObios<br><span>Relijans</span>
                </v-banner>
            </v-flex>
            <v-flex md6>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-map-marker-alt</v-icon>
                    </v-avatar>
                        MObios<br><span>gender</span>
                </v-banner>
            </v-flex>
            <v-flex md6>
                <v-banner two-line>
                    <v-avatar slot="icon" color="primary accent-4" size="40">
                    <v-icon color="white">fas fa-map-marker-alt</v-icon>
                    </v-avatar>
                        MObios<br><span>sivil status</span>
                </v-banner>
            </v-flex>
         </v-layout>
       </v-content>
       <v-content>
           <v-layout row v-if="!!profile.skills">
              <v-flex v-for="skill in profile.skills" :key="skill.id" md-3>
                  {{skill}}
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