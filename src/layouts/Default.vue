<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      dense
      color="red"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ryan Paige</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer color="black" v-model="drawer" app clipped>
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="`#${item.title.toLowerCase()}`"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: "About", icon: "mdi-account-circle-outline" },
          { title: "Skills", icon: "mdi-post-outline" },
          { title: "Projects", icon: "mdi-folder-table-outline" },
          { title: "Contact", icon: "mdi-card-account-phone-outline" },
        ],
        right: null,
        drawer: false,
      }
    },
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style >
  .v-app {
    scroll-behavior: smooth;
  }
  .v-application--wrap {
    flex-direction: row;
    background-color: black;
  }
  .v-list-item {
    background-color: #BDBDBD;
  }
  .v-main {
    flex: auto;
  }
</style>
