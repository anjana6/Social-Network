<template>
     <v-container>
        <v-card
            class="mx-auto"
            outlined
            max-width="600"
        >
            <v-container>
                <v-card-title>
                    <span class="title font-weight-light">POST</span>
                </v-card-title>

                <v-form ref="form" lazy-validation>
                    <v-card-text>
                    <v-textarea
                        outlined
                        v-model="text"
                        label="write post"
                        placeholder="Write something here..."
                        ></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn color="error" class="mr-4" @click="addpost">
                        Submit
                    </v-btn>
                    
                    </v-card-actions>
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name:"AddPost",
    data(){
        return {
            text : ''
        }
    },
    methods:{
        ...mapActions(['addPost']),
        addpost: function(){
            //console.log(this.text);
            this.addPost(this.text);
        }
    }
}
</script>