<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      dense
      color="red"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ryan Paige</v-toolbar-title>
      <v-row>
        <v-col class="d-flex justify-space-around" sm="2" offset-sm="10">
          <v-icon></v-icon>
          <a 
            v-for="link in links"
            v-bind:href="link.url"
            v-bind:key="link.name"
          >
            <img 
              :key="link.name"
              class="contact-icon" 
              :src="link.image"
            />
          </a>
        </v-col>    
      </v-row>
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
        ],
        links: [
          {
            name:"Github",
            url: "https://github.com/UniversallyRy",
            image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
          },
          {
            name:"Twitter",
            url: "https://twitter.com/UniversallyRy",
            image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
          },
          {
            name:"Instagram",
              url: "https://instagram.com/UniversallyRy",
              image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
          },
          {
              name:"LinkedIn",
              url: "https://linkedin.com/",
              image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
          },
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
  .contact-icon {
        height: 30px;
        width: 30px;
    }
</style>
