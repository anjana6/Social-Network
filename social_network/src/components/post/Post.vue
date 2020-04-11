<template>
    <v-container>
        <v-layout row class="mb-5">
            <v-flex>
                <h1 class="display-3 text-center">Developer Post</h1>
            </v-flex>
        </v-layout>

    <div v-if="allPosts.length>0">
       
        <PostItem 
            v-for="post in allPosts"
            :key="post.id"
            :post="post"
            />
            
            <!-- <div v-rpeat="post in allpost">
                {{post.name}}
            </div> -->
        
        
    </div>
        
    </v-container>
</template> 

<script>
import PostItem from './PostItem';
export default {
    name:"Post",
    components:{
         PostItem
    },
    computed:{
        allPosts: function(){
            return this.$store.getters.allPost;
        }
    },
    created(){
            this.$store.dispatch("fetchPosts")
        }
}
</script>