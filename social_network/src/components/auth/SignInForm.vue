<template>
<v-container>
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
        <v-text-field
          v-model="password"
          prepend-icon="fas fa-lock"
          label="Password"
          required
        ></v-text-field>
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

export default {
    name:"SignInForm",
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods: {
      login: function(){
        //console.log('hii');
        let data = {
          email : this.email,
          password : this.password
        }
        
        this.$store.dispatch("loggin",data);
      }
    }
}
</script>