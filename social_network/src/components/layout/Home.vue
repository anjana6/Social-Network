<template>
 <div class="back">
     <AppHeader/>
     <v-container>
     <v-layout row class="home-content">
         <v-flex xs12 md6 my-2 align-self-center="">
            <div class="home-header">
                <h1 class="display-3  yellow--text font-weight-bold">Developer Media</h1>
            </div>
        </v-flex>
        <v-flex xs12 md6 >
            <SignInForm/>
        </v-flex>
     </v-layout>
     </v-container>
 </div>
</template>

<script>
import AppHeader from './AppHeader';
import SignInForm from '../auth/SignInForm';
export default {
    name: "Home",
    components:{
        AppHeader,
        SignInForm
    },
}
</script>

<style scoped>
    .back{
        width: 100%;
        height: 100%;
        background-image: url('../../assets/back.jpeg');
        background-repeat: no-repeat ;
        background-size: cover;
    
    }
    .home-content{
        margin-top: 10%;
    }
    .home-header{
        border: 3px solid wheat;
        text-align: center;
    }
</style>