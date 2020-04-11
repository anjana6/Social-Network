<template>
    <div v-if="allPosts.length>0">
        <h1>Developer post</h1>
        <PostItem 
            v-for="post in allPosts"
            :key="post.id"
            :post="post"
            />
            
            <!-- <div v-rpeat="post in allpost">
                {{post.name}}
            </div> -->
        
        
    </div>
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