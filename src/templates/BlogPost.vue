<template>
  <Layout>
    <article>
      <header>
      <h2 class='text-style'>{{$page.post.title}}</h2>
      <p class='text-style'>Published on {{$page.post.date}}</p>

      <p class='text-style'><i>{{$page.post.timeToRead}}min to read</i></p>
      </header>

      <main class="content text-style" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<style scoped>
  article > header {
    text-align: center;
  }
  .text-style {
    margin-left: 200px;
    color: #BDBDBD;
    }
  .content {
    margin-top: 48px;
  }
</style>

<page-query>
query Post ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    date (format: "MMMM D, YYYY")
    timeToRead
    content
  }
}
</page-query>