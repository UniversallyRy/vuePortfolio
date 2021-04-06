<template>
  <Layout >
    <v-banner class='header'>
      <h1 class='text-style'>Blogs</h1>
      <p class='text-style'>This is the blog page.</p>
      <v-btn>
        <g-link :to="'/'">Back Home</g-link>
      </v-btn>
    </v-banner>
    <BlogPostList :posts="$page.posts.edges"/>
  </Layout>
</template>

<script>
import BlogPostList from '~/components/BlogPostList.vue';

export default {
  metaInfo: {
    title: 'Blogs'
  },
  components: {
    BlogPostList
  }, 
}
</script>

<style>
  a {
      text-decoration: none;
  }
  .header {
    align-self: center;
    margin: 10px;
  }
  .text-style {
    color: #BDBDBD;
    align-self: center;
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