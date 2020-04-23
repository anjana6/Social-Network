<template>
  <v-container>
      <v-layout row v-if="profiles.length>0">
         <v-flex v-for="profile in profiles" :key="profile._id" xs12 md6 lg4>
            <v-card class="mx-auto" max-width="344" outlined>
               <v-list-item three-line>
                 <v-list-item-content>
                    <div class="overline mb-4">OVERLINE</div>
                    <v-list-item-title class="headline mb-1">{{profile.user.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{profile.company}}</v-list-item-subtitle>
                 </v-list-item-content>

                 <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                 ></v-list-item-avatar>
             </v-list-item>

             <v-card-actions>
                <v-btn :to="{name:'about',params:{id:profile._id}}" text>ABOUT</v-btn>
             </v-card-actions>
            </v-card>
         </v-flex>
     </v-layout>
            
    </v-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name:"DeveloperProfile",
    computed:{
        ...mapGetters(['profiles'])
    },
    methods:{
        ...mapActions(['fetchProfiles'])
    },
    created(){
        this.fetchProfiles()
    }
}
</script>