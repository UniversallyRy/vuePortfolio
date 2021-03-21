<template>
  <v-app>
    <v-navigation-drawer
    width="200"
    permanent
    fixed
    class="nav-drawer"
    color="black"
    >
      <template>
        <v-list-item two-line>
          <!-- <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar> -->
          <v-list-item-content>
            <v-list-item-title class="title" >
              Ryan Paige
            </v-list-item-title>
            <v-list-item-subtitle>
              Software Developer
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

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
    margin-left: 11vw;
  }
</style>
