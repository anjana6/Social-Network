<template>
  <v-container>
    <v-content>
      <v-layout row class="mb-5">
            <v-flex>
                <h1 class="display-2 text-center">CREATE PROFILE</h1>
            </v-flex>
      </v-layout>
    </v-content>
    <v-form ref="form" lazy-validation>
      
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="workplace"
              label="Work Place"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="currentcity"
              label="Current City"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="hometown"
              label="Home Town"
              required
            ></v-text-field>
          </v-col>
        </v-row>

      <v-content class="content-bar pa-1">
        <v-icon left>fas fa-graduation-cap</v-icon>
        <span>Education</span>
      </v-content>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="primeryschool"
            label="Primery School"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="secondaryschool"
            label="Secondary School"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="university"
            label="University"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-content class="content-bar pa-1">
        <v-icon left>fas fa-user-tie</v-icon>
        <span>Basic Info</span>
      </v-content>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="birthday"
            label="Birth Day"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="religious"
            label="Religious"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="gender"
            label="Gender"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="sivilstatus"
            label="Sivil Status"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-content class="content-bar pa-1">
        <span>ADD SKILL</span>
      </v-content>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="skills"
            label="Skills"
            placeholder="HTML,React..."
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn block color="primary" dark @click="createProfile" to="/profile">ADD</v-btn>
    
  </v-form>
  </v-container>
</template>
    
<script>

import {mapActions,mapGetters} from 'vuex';
export default {
    name:"EditProfile",
    data (){
       return{
          workplace:'',
          currentcity:'',
          hometown:'',
          primeryschool:'',
          secondaryschool:'',
          university:'',
          birthday:'',
          religious:'',
          gender:'',
          sivilstatus:'',
          skills:'',
       }
    },
    computed:{
        ...mapGetters(['ownerprofile'])
    },
    methods:{
    ...mapActions(['createProfile','fetchOwnerProfile']),
    createProfile: function(){
         let data = {
             workplace:this.workplace,
             currentcity:this.currentcity,
             hometown:this.hometown,
             primeryschool:this.primeryschool,
             secondaryschool:this.secondaryschool,
             university:this.university,
             birthday:this.birthday,
             religious:this.religious,
             gender:this.gender,
             sivilstatus:this.sivilstatus,
             skills:this.skills,
        }

      this.createProfile(data);
    }  
    },
    
}
</script>

<style scoped>
  .content-bar{
    border: 2px solid grey;
    text-align: center;
    border-radius: 2px;
    background-color: rgb(0, 195, 255);
  }
</style>