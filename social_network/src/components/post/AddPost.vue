<template>
     <v-container>
        <v-card class="mx-auto" outlined max-width="600">
            <v-container>
                <v-form ref="form" lazy-validation>
                    <v-card-title>
                        <span class="title font-weight-light">POST</span>
                        <v-spacer></v-spacer>
                        <label class="custom-file-upload">
                        <input type="file" class="input" @change="onFileChange"/>
                        <v-icon large>fas fa-camera</v-icon>
                        </label>
                    </v-card-title>

                    <div >
                        <v-img class="upload-img"  v-if="url" :src="url"/>
                    </div>

                
                    <v-card-text>
                   <v-textarea
                    flat
                    solo
                    v-model="text"
                    name="text"
                    label="Solo textarea"
                    placeholder="Write Your Post..."
                    ></v-textarea>
                   
                <!-- <label class="custom-file-upload">
                    <input type="file" class="input" @change="onFileChange"/>
                    <v-icon large>fas fa-camera</v-icon>
                </label> -->
                    </v-card-text>
                    <v-card-actions>
                    <v-btn color="error" class="mr-4" @click="addpost">
                        Post
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
            text : '',
            file:null,
            url:null,
        }
    },
    methods:{
        ...mapActions(['addPost']),
        onFileChange: function(e){
            this.file = e.target.files[0];
            // console.log(this.file);
            this.url = URL.createObjectURL(this.file);

        },
        addpost: function(){
           
            let data = {
                file:this.file,
                text:this.text
            }
            // console.log(data);
            this.addPost(data);
        }
    }
}
</script>

<style  scoped>
.upload-img{
    height: 20em;
}
 .input{
    display: none;
}
.custom-file-upload {
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
</style>