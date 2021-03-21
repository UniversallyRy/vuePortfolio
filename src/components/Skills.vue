<template>
  <v-container
    id="skills"
    fluid
    grey
    style="overflow-x: hidden"
  >
    <h2 class="display-2 mt-9 mb-3 font-weight-bold red--text">Skills</h2>
    <v-divider class="mb-9" />

    <p class="text-center title">Technologies Known</p>
    <v-row class="px-4">
      <v-col
        v-for="skill in skills"
        :key="skill.name"
        cols="4"
        class="px-2"
        data-aos="flip-left"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="bottom-bottom"
      >
      <!-- add href for skills to hover -->
        <v-hover v-model="skill.hover">
          <p class="mb-1 subtitle-1 text-center"
          >
              <v-badge
              :key="skill.name"
              :value="skill.hover"
              color="grey darken-3 accent-4"
              content="Click For More Info"
              left
              transition="slide-x-transition"
              >
                      <v-icon left :color="skill.color">{{ skill.icon }}</v-icon>
              </v-badge>
            {{ skill.name }}
          </p>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    skills: [
        {
          name: "JavaScript",
          icon: "mdi-language-javascript",
          color: "#F0DB4F",
          hover: false,
        },
        {
            name: "HTML",
            icon: "mdi-language-html5",
            color: "#E44D26",
            hover: false,
        },
        { name: "CSS", icon: "mdi-language-css3", color: "#2965f1", hover: false, },
        { name: "ReactJS", icon: "mdi-react", color: "#f89820", hover: false, },
        {
            name: "React Native",
            icon: "mdi-react",
            color: "#4CAF50",
            hover: false,
        },
        {
            name: "React Redux",
            icon: "mdi-react",
            color: "#A41E11",
            hover: false,
        },
        { name: "NodeJS", icon: "mdi-nodejs", color: "#BDBDBD", hover: false, },
        { name: "Vue.js", icon: "mdi-vuejs", color: "#41B883", hover: false, },
        { name: "Vuetify", icon: "mdi-vuetify", color: "#42A5F5", hover: false,},
        { name: "Nuxt.js", icon: "mdi-nuxt", color: "#41B883", hover: false,},
        
        {
            name: "SQL",
            icon: "mdi-database-search",
            color: "#80DEEA",
            hover: false,
        },
        {
            name: "Expo",
            icon: "mdi-airplane-takeoff",
            color: "#3FA037",
            hover: false,
        },
        {
            name: "jQuery",
            icon: "mdi-jquery",
            color: "#0db7ed",
            hover: false,
        },
        {
            name: "Bootstrap",
            icon: "mdi-bootstrap",
            color: "#E44D26",
            hover: false,
        },
        {
            name: "Python",
            icon: "mdi-language-python",
            color: "#306998",
            hover: false,
        },
        {
            name: "Jest",
            icon: "mdi-ab-testing",
            color: "#306998",
            hover: false,
        },
    ],
  }),
};
</script>