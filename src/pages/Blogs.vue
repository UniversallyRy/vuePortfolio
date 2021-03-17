<template>
  <Layout>
    <h1>Blogs</h1>
    <p>This is the blog page.</p>
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
  }
}
</script>

<style>
html{
  background-color:steelblue;
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