<template>

    <nav>
        <v-toolbar flat dark color="grey" dense>
          <v-app-bar-nav-icon v-if="isLoggedIn" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
              <span class="font-weight-light">DEVELOPER</span> 
              <span>- MEDIA</span>
            </v-toolbar-title>
            
          <v-spacer></v-spacer>
          <div v-if="isLoggedIn">
            <v-btn depressed color="grey">
              <span>Home</span>
              <v-icon small right>fas fa-home</v-icon>
            </v-btn>
              <v-btn  depressed color="grey" name="signin" to="/signup" @click="logout" >
              <span>LogOut</span>
              <v-icon small right>fas fa-sign-out-alt</v-icon>
            </v-btn>
          </div>
          <div v-else>
            <v-btn  depressed color="grey" name="signin" to="/signup" >
              <span>SingUp</span>
              <v-icon small right>fas fa-user-plus</v-icon>
            </v-btn>
          </div>
        </v-toolbar>
      <v-navigation-drawer v-model="drawer" app dark color="grey darken-4" temporary >
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        </v-navigation-drawer>

   </nav>
    
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name:'AppHeader',
    data(){
        return{
            drawer: false,
            links: [
              {icon:'fas fa-user', text:'Your Profile', route:'/profile'},
              {icon:'fas fa-users',text:'Developers',route:'/developer'}
            ]
        }
    },
    computed:{
      ...mapGetters(['isLoggedIn'])
    },
    methods:{
      ...mapActions(['logout'])
    }
    
};
</script>