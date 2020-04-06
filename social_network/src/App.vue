<template>
  <v-app>
    
      <!-- <AppHeader/> -->
     <Home/>
    
  </v-app>
  
</template>

<script>
// import AppHeader from './components/AppHeader';
import Home from './components/Home';

export default {
  name: 'App',
  components:{
    Home
  }
};
</script>
