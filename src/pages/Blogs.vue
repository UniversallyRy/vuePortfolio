<template>
  <Layout>
    <h1 class='text-style'>Blogs</h1>
    <p class='text-style'>This is the blog page.</p>
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
  .text-style {
    color: #BDBDBD;
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