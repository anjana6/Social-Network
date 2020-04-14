<template>
    <v-container>
        <v-layout row class="mb-5">
            <v-flex>
                <h1 class="display-3 text-center">Developer Post</h1>
            </v-flex>
        </v-layout>

    <div v-if="allPost.length>0" class="ma-2">
       <PostItem 
            v-for="post in allPost"
            :key="post.id"
            :post="post"
            />   
    </div>
    <div v-else>
        <p>No Post Here...</p>
    </div>
        
    </v-container>
</template> 

<script>
import {mapActions,mapGetters} from 'vuex';
import PostItem from './PostItem';
export default {
    name:"Post",
    components:{
         PostItem
    },
    computed:{
        // allPosts: function(){
        //     return this.$store.getters.allPost;
        // }
        ...mapGetters(['allPost'])
    },
    methods:{
        ...mapActions(['fetchPosts'])
    },
    created(){
            // this.$store.dispatch("fetchPosts")
            this.fetchPosts()
        }
}
</script>