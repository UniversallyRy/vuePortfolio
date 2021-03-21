<template>
<v-card
    class="mx-auto"
    color="red"
    dark
>
    <v-toolbar
      color="red darken-2"
      dark
    >
      <v-toolbar-title>Newest Entries</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="post in posts"
          :key="post.node.title"
          :cols="post.flex"
        >
          <v-card>
            <h4 class=post-title>{{post.node.title}}</h4>
            <p>Published on {{post.node.date}}</p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>
                <g-link :to="post.node.path">Read article</g-link>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style scoped>
.post-card {
  background-color: steelblue;
  color: steelblue
}
.post-list {
  margin-top: 18px;
}
.post-title {
  font-size: 24px;
  border-style: solid;
  border-width: 0.5px;
  padding: 10px;
}

.post {
  padding: 12px 0;
}
</style>