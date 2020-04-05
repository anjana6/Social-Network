<template>
<v-container>
  <v-layout justify="center">
    <v-flex>
  <v-card
    class="mx-auto"
    outlined
    max-width="600"
  >
  <v-container>
    <v-card-title>
      <span class="title font-weight-light">LogIn</span>
    </v-card-title>

     <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Submit
    </v-btn>
  </v-form>

  </v-container>
  </v-card>
  </v-flex>
  </v-layout>
  
 
</v-container>
</template>

<script>
export default {
    name:"SingInForm"
}
</script>