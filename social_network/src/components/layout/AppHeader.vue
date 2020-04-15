<template>
    <nav>
        <v-toolbar flat dark color="grey" dense>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

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
        
        <v-navigation-drawer v-model="drawer"  color="grey darken-4">
            <p>test</p>
        </v-navigation-drawer>

    </nav>
    
</template>

<script>
export default {
    name:'AppHeader',
    data(){
        return{
            drawer: false
        }
    },
    computed:{
      isLogginIn: function(){
      return this.$store.getters.isLoggedIn;
    }
    }
    
};
</script>