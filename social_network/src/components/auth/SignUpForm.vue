<template>
    <v-container>
        <div v-if="!!error">
            <v-alert type="error" v-if="error.msg" >
            {{error.msg}}
            </v-alert>  
        </div>
        <v-card
            class="mx-auto"
            outlined
            max-width="600"
        >
            <v-container>
                <v-card-title>
                    <span class="title font-weight-light">Register Form</span>
                </v-card-title>

                <v-form ref="form" lazy-validation>
                    <v-card-text>
                    <v-text-field
                        v-model="name"
                        label="Name"
                        required
                    ></v-text-field>
                    <div v-if="!!error" class="red--text">{{error.name}}</div>
                    <v-text-field
                        v-model="email"
                        label="Email"
                        required
                    ></v-text-field>
                    <div v-if="!!error" class="red--text">{{error.email}}</div>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        required
                    ></v-text-field>
                    <div v-if="!!error" class="red--text">{{error.password}}</div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn color="error" class="mr-4" @click="registering">
                        Submit
                    </v-btn>
                    <v-btn color="error" text class="mr-4" to="/">
                        SingIn
                    </v-btn>
                    </v-card-actions>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions,mapGetters} from 'vuex';
export default {
    name:"SignUpForm",
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    computed:{
        ...mapGetters(['error'])
    },
    methods:{
        ...mapActions(['register']),
        registering:function(){
            console.log('hoo')
            let data = {
                name:this.name,
                email:this.email,
                password:this.password
            }
            // this.$store.dispatch('register',data);
            this.register(data);
            
        }
    }
}
</script>