<template>
  <Layout>
    <h1>Blog</h1>
    <p>This is the blog page.</p>
    <BlogPostList :posts="$page.posts.edges"/>
  </Layout>
</template>

<script>
import BlogPostList from '~/components/BlogPostList.vue';

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    BlogPostList
  }
}
</script>

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