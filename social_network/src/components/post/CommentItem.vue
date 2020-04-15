<template>
<v-flex md6>
    
    <!-- <div>{{comment.name}}</div> -->
    <v-container>
       
            <v-card max-width="500" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="grey darken-3">
        <v-img :src="comment.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content class="grey ma-1 pa-5 rounded">
        <v-list-item-title class="headline">{{comment.name}}</v-list-item-title>
        <v-list-item-subtitle> {{comment.text}}</v-list-item-subtitle>
        <!-- <v-list-item>{{comment.date}}</v-list-item> -->
      </v-list-item-content>
    </v-list-item>
    <v-card-text>{{comment.date}}</v-card-text>
  </v-card>
    </v-container>
    
    
</v-flex>
</template>

<script>
export default {
    name: "CommentItem",
    props: ['comment'],
}
</script>

<style scoped>
    .rounded{
        border-radius: 20%;
    }
</style>