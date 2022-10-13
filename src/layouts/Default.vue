<template>
  <v-app id="app">
    <v-app-bar v-if="$route.name == 'home'" app clipped-left dense color="red">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ryan Paige</v-toolbar-title>
      <v-row>
        <v-col class="d-flex justify-space-around" sm="2" offset-sm="10">
          <v-icon></v-icon>
          <a v-for="link in links" :href="link.url" :key="link.name">
            <img :key="link.name" class="contact-icon" :src="link.image" />
          </a>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer color="black" v-model="drawer" app clipped>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :to="`#${item.title.toLowerCase()}`"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :to="`${blog[0].title.toLowerCase()}`"
          :key="blog[0].title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ blog[0].icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ blog[0].title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "My Portfolio",
      items: [
        { title: "About", icon: "mdi-account-circle-outline" },
        { title: "Skills", icon: "mdi-diamond-outline" },
        { title: "Projects", icon: "mdi-folder-table-outline" }
      ],
      blog: [{ title: "Blogs", icon: "mdi-blogger" }],
      links: [
        {
          name: "Github",
          url: "https://github.com/UniversallyRy",
          image:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/UniversallyRy",
          image:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/UniversallyRy",
          image:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/",
          image:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
        }
      ],
      right: null,
      drawer: false
    };
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.v-application--wrap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  flex-direction: row;
  background-color: black;
}
.v-list-item {
  background-color: #bdbdbd;
}
.contact-icon {
  height: 25px;
  width: 25px;
  margin: 2px;
}
</style>
