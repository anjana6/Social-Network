<template>

    <nav>
        <v-toolbar flat dark color="grey" dense app>
          <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
              <span class="font-weight-light">DEVELOPER</span> 
              <span>- MEDIA</span>
            </v-toolbar-title>
            
          <v-spacer></v-spacer>

            <v-btn depressed color="grey" name="signin" to="/signup" >
              <span>SingUp</span>
              <v-icon small right>fas fa-user-plus</v-icon>
            </v-btn>
        </v-toolbar>
         
        
        <v-navigation-drawer v-model="drawer" app color="grey darken-4" touchless >
          
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="link in links"
          :key="link.text"
          link
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
      isLogginIn: function(){
      return this.$store.getters.isLoggedIn;
    }
    }
    
};
</script>