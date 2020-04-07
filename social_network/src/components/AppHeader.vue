<template>
    <nav>
        <v-toolbar flat dark color="grey" dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <span class="font-weight-light">DEVELOPER</span> 
          <span>- MEDIA</span>
        </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <router-link to>
      <v-btn depressed color="grey">
        <span>SingIn</span>
        <v-icon small right>fas fa-sign-in-alt</v-icon>
      </v-btn>
      </router-link> -->
      <router-link to='/signup' tag="v-btn">
      <v-btn depressed color="grey" name="signin">
        <span>SingUp</span>
        <v-icon small right>fas fa-user-plus</v-icon>
      </v-btn>
      </router-link>
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
    }
};
</script>