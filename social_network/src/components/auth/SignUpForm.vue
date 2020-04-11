<template>
    <v-container>
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

                    <v-text-field
                        v-model="email"
                        label="Email"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        label="Password"
                        required
                    ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn color="error" class="mr-4" @click="register">
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
export default {
    name:"SignUpForm",
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        register:function(){
            //console.log('hii');
            let data = {
                name:this.name,
                email:this.email,
                password:this.password
            }
            this.$store.dispatch('register',data);
            
        }
    }
}
</script>