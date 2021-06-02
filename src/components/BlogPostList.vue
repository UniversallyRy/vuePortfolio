<template>
<v-card
    class="post-card justify-center"
    color="red"
    dark
>
    <v-toolbar
      color="red darken-2"
      dark
    >
      
      <v-toolbar-title class="text-left">Newest Entries</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-text-field
          hide-details
          label="Search for Blogs"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          single-line
          rounded
          filled
          dense
          clearable
          class="shrink"
          style="margin:10px"
        ></v-text-field>
        <v-menu offset-y>
          <template v-slot:activator="{on, attrs}">
            <v-btn
              dark
              v-on="on"
              v-bind="attrs"
              style="margin:2px"
            >
              Categories
            </v-btn>
          </template>
          <v-card>
            <v-list dark>
              <v-list-item
                dense
                v-for="category in categories"
                :key="`notification-key-${category.id}`"  
              >
                <v-list-item-title>
                  {{ category.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="post in posts"
          :key="post.node.title"
          :cols="post.flex"
        >
          <v-card>
            <h4 class="post-title text-center">{{post.node.title}}</h4>
            <p class="text-center">Published on {{post.node.date}}</p>
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center">
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
  props: ['posts'],
  data () {
      return {
        categories: [
              { id: 1, title: 'Programming' },
              { id: 2, title: 'Books' },
              { id: 3, title: 'Visions' },
              { id: 4, title: 'Thoughts' }
            ],
      }
  }
}
</script>

<style>
.post-card {
  align-items: center;
  justify-content: center;
  margin: 5px;
}
.post-list {
  margin-top: 18px;
}
.post-title {
  font-size: 24px;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  margin-bottom: 5px;
  padding: 10px;
}
.post {
  padding: 12px 0;
}
</style>