<template>
<v-container>
  <div v-if="!!error">
    <v-alert type="error" v-if="error.msg" >
      {{error.msg}}
    </v-alert>  
  </div>
  <v-card class="mx-auto" outlined max-width="500">
    <v-card-title>
      <span class="title font-weight-light">LogIn</span>
    </v-card-title>
    <v-form ref="form" lazy-validation>
      <v-card-text>
        <v-text-field
          v-model="email"
          prepend-icon="fas fa-at"
          label="Email"
          required
        ></v-text-field>
        <div v-if="!!error" class="red--text">{{error.email}}</div>
        <v-text-field
          v-model="password"
          prepend-icon="fas fa-lock"
          label="Password"
          required
        ></v-text-field>
        <div v-if="!!error" class="red--text">{{error.password}}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="mr-4" @click="login">
          Submit
        </v-btn>
        <v-btn color="red" text  to="/signup">
            Register Now
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</v-container> 
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name:"SignInForm",
    data(){
      return{
        email:"",
        password:""
      }
    },
    computed:{
      ...mapGetters(['error'])
    },
    methods: {
      ...mapActions(['loggin']),
      login: function(){
        let data = {
          email : this.email,
          password : this.password
        }
        this.loggin(data);
      }
    }
}
</script>