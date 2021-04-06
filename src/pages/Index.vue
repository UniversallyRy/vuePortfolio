<template>
  <Layout>
    <About/>
    <Skills/>
    <Projects/>
  </Layout>
</template>

<script>
// todos: decide if blog will be priv/publ, diagonal header, better spacing, more projects
// style page(spawn/cool tone colors?), add more components and optimize code and site speed
// Dream Journal Component needed
import About from "@/components/About.vue"
import Skills from "@/components/Skills.vue"
import Projects from "@/components/Projects.vue"
import Blogs from "@/components/BlogPostList.vue"
export default {
  metaInfo: {
    title: "UniversallyRy's Portfolio"
  },
  components: {
    About,
    Skills,
    Projects,
    Blogs,
  }
}
</script>

<style>

</style>
