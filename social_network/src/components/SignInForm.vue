<template>
<v-container>
  <v-card class="mx-auto" outlined max-width="500">
    <v-card-title>
      <span class="title font-weight-light">LogIn</span>
    </v-card-title>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-text>
        <v-text-field
          v-model="name"
          prepend-icon="fas fa-at"
          :rules="nameRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          prepend-icon="fas fa-lock"
          :rules="emailRules"
          label="Password"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="mr-4" @click="reset">
          Submit
        </v-btn>
        <v-btn color="red" text >
            Register Now
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</v-container>
</template>

<script>
export default {
    name:"SignInForm"
}
</script>