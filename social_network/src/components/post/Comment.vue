<template>
    <v-container>
    <div>
        <p>comment</p>
        <p>{{$route.params.comment_id}}</p>
    </div>
    </v-container>
</template>

<script>
export default {
    name:"Comment",
    // mounted(){
    //     const comment_id = this.$route.params.comment_id
    //     console.log(comment_id);
    //     //this.$store.dispatch("fetchComments",this.$route.params.comment_id);
    //     this.$store.dispatch('fetchComments','huu');
    // }
}
</script>