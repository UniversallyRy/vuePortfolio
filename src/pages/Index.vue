<template>
  <Layout>
    <About/>
    <Projects/>
    <!-- <Random/> -->
    <Contact/>
  </Layout>
</template>

<script>
import About from "@/components/About.vue"
import Projects from "@/components/Projects.vue"
import Random from "@/components/Random.vue"
import Contact from "@/components/Contact.vue"
export default {
  metaInfo: {
    title: "Ryan Paige's Portfolio"
  },
  components: {
    About,
    Projects,
    Random,
    Contact,
  }
}
</script>

<style>

</style>
