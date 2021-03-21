<template>
  <Layout>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </Layout>
</template>

<script>
// todos: decide if blog will be priv/publ, diagonal header, better spacing, more projects
// style page(spawn/cool tone colors?), add more components and optimize code and site speed
import About from "@/components/About.vue"
import Skills from "@/components/Skills.vue"
import Projects from "@/components/Projects.vue"
import Contact from "@/components/Contact.vue"
export default {
  metaInfo: {
    title: "UniversallyRy's Portfolio"
  },
  components: {
    About,
    Skills,
    Projects,
    Contact,
  }
}
</script>

<style>

</style>
