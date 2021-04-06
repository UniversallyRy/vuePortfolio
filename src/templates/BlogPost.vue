<template>
  <Layout>
    <v-card-actions class="justify-left">
        <v-btn icon color="red" :to="'/blogs'">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-card-actions>
    <article>
      <header>
      <p class='text-style text-center'>Published on {{$page.post.date}}</p>
      <p class='text-style'><i>{{$page.post.timeToRead}}min to read</i></p>
      </header>

      <main key="$page.post.id" class="content text-style text-center" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<style>
  article > header {
    text-align: center;
  }
  a {
      text-decoration: none;
  }
  .text-style {
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