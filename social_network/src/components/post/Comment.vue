<template>
    <v-container>
        <v-layout row>
            <v-flex>
                <v-btn depressed to="/post">
                    <v-icon left>fas fa-arrow-circle-left</v-icon>
                    Back
                </v-btn>
            </v-flex>
            <v-flex>
                <h1>COMMENTS</h1>
            </v-flex>
        </v-layout>
        
        <v-layout row>
            <CommentItem 
                v-for="comment in comments"
                :key="comment.id"
                :comment="comment"
                />
        </v-layout>
            <v-layout row  class="mt-5">
                <v-flex xs10>
                    <v-text-field
                        background-color="#C4D4D1"
                        placeholder="Comment..."
                        filled
                        rounded
                        dense
                        v-model="comment"
    
                    ></v-text-field>
                </v-flex>
                <v-flex xs2>
                    <v-btn rounded color="primary" class="ml-2" @click="addcomment">
                        <v-icon left>fas fa-paper-plane</v-icon>
                        <span>SEND</span>
                    </v-btn>
                </v-flex>
            </v-layout>        
    </v-container>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import CommentItem from './CommentItem';
export default {
    name:"comment",
    data(){
        return{
        comment:''
        }
    },
    components:{
        CommentItem
    },
    computed:{
        ...mapGetters(['comments'])
    },
    methods:{
        ...mapActions(['fetchComments','addComment']),
        addcomment: function(){
            this.addComment({id:this.$route.params.comment_id,text:this.comment});
        }
    },
    created(){
        const comment_id = this.$route.params.comment_id;
        console.log(comment_id);
        this.fetchComments(comment_id);
    }
}
</script>

<style  scoped>
</style>