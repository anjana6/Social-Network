<template>
    <v-container>
    <div>
        <p>comment</p>
        <p>{{$route.params.comment_id}}</p>
    </div>
    </v-container>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name:"Comment",
    methods:{
        ...mapActions(['fetchComments'])
    },
    created(){
        const comment_id = this.$route.params.comment_id;
        this.fetchComments(comment_id);
    }
}
</script>