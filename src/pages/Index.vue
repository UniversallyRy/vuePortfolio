<template>
  <Layout>
    <About class="item" />
    <Skills class="item" />
    <Projects class="item" />
  </Layout>
</template>

<script>
// todos: diagonal header, better spacing, more projects
// style page(cool tone colors?), add more components and optimize code and site speed
// blog categories, add blog entries(summaries, etc) taglike corners for sections
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Blogs from "@/components/BlogPostList.vue";

export default {
  metaInfo: {
    title: "UniversallyRy's Portfolio",
  },
  components: {
    About,
    Skills,
    Projects,
    Blogs,
  },
  methods: {},
};
</script>

<style>
.horizontal-scroll-wrapper {
  overflow-y: scroll;
  transform: rotate(-90deg);
}
/* .item {
    transform: rotate(90deg);
    min-width: 700px;
  } */
</style>
