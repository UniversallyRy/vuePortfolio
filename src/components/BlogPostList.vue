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
          <template v-slot:activator="{on}">
            <v-btn
              dark
              v-on="on"
              style="margin:2px"
            >
            </v-btn>
          </template>
          <v-card>
            <v-list dense>
              <v-subheader>Notifications</v-subheader>
              <v-divider></v-divider>
              <v-list-tile
                v-for="notification in notifications"
                :key="`notification-key-${notification.id}`"
              >
                <v-list-tile-title>
                  {{ notification.title }}
                </v-list-tile-title>
              </v-list-tile>
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
  notifications: [
        { id: 1, title: 'Click Me' },
        { id: 2, title: 'Click Me' },
        { id: 3, title: 'Click Me' },
        { id: 4, title: 'Click Me 2' }
      ],
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
  border-width: 0.5px;
  padding: 10px;
  margin: 5px;
}
.post {
  padding: 12px 0;
}
</style>