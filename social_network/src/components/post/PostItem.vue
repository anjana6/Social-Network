<template>
  <v-card max-width="1000" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="grey darken-3">
        <v-img :src="post.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{post.name}}</v-list-item-title>
        <v-list-item-subtitle>at {{post.date}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="194"
    ></v-img>

    <v-card-text>
      <h2>{{post.text}}</h2>
      <v-layout row>
        <v-flex>
          <p v-if="post.likes.length>0"><v-icon small right>fas fa-thumbs-up</v-icon><span class="ml-1">{{post.likes.length}}</span></p>
        </v-flex>
        <v-flex class="text-right">
          <p v-if="post.comment.length>0"><span>{{post.comment.length}}</span><span class="ma-2">comments</span></p>
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <v-btn depressed @click="addlike">
        <v-icon small right>fas fa-thumbs-up</v-icon>
        <span>Like</span> 
      </v-btn>
      <v-btn v-if="post.likes.length>0" depressed @click="removelike">
        <v-icon small right>fas fa-thumbs-down</v-icon>
        <span>unlike</span>  
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn depressed  :to="{name:'comment',params:{comment_id:post._id}}">
        <v-icon small right>far fa-comment-alt</v-icon>
        <span>comment</span>
      </v-btn>
      <v-btn depressed>
        <v-icon small right>mdi-share-variant</v-icon>
        <span>share</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"PostItem",
    props:['post'],
    methods:{
      ...mapActions(['addLike','removeLike']),
      addlike: function(){
        //console.log(this.post._id);
        this.addLike(this.post._id);
      },
      removelike: function(){
        this.removeLike(this.post._id);
      }
    }
}
</script>