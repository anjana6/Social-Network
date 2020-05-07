<template>
  <v-app>
   
      <AppHeader/>
    

      
     <!-- <Home/> -->
     <!-- <SignUpForm/> -->
     <v-content>
     <router-view></router-view>
     </v-content>
    
  </v-app>
  
</template>

<script>
import AppHeader from './components/layout/AppHeader';
// import Home from './components/Home';
//import SignUpForm from './components/SignUpForm'


export default {
  
  name: 'App',
  components:{
    AppHeader
  }
};
</script>
