<template>
  <Layout>
    <v-card outlined color="transparent" class="header">
      <v-card-actions class="justify-left">
        <v-btn icon color="red" :to="'/'">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-title class="text-style justify-center">My Blogs</v-card-title>
      <p class="text-style text-center">
        My blogs about a number of different topics, ranging from programming to
        books.
      </p>
    </v-card>
    <BlogPostList :posts="$page.posts.edges" />
  </Layout>
</template>

<script>
import BlogPostList from "~/components/BlogPostList.vue";

export default {
  metaInfo: {
    title: "Blogs"
  },
  components: {
    BlogPostList
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.header {
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.text-style {
  color: #bdbdbd;
  margin: 5px;
}
</style>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        date (format: "MMMM D, YYYY")
        path
      }
    }
  }
}
</page-query>
