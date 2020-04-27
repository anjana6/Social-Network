
        <template>
  <v-form>
    <v-container>
        {{ownerprofile.workplace}}
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="profile.workplace"
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
    </v-container>
    <v-btn @click="createProfile">submit</v-btn>
  </v-form>
</template>
    
<script>
import {mapGetters} from 'vuex';
export default {
    name:"EditProfile",
    data (){
       return{
           profile:{}
       }
    },
    computed:{
        ...mapGetters(['ownerprofile'])
    },
    created(){
        this.profile = this.ownerprofile
    },
    methods:{
    
    createProfile: function(){
        console.log('lll')
         let data = {
             workplace:this.profile.workplace
        }
    console.log(data);
    }
       
    }
}
</script>