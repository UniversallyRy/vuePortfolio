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
              content="Click Icon For More Info"
              left
              transition="slide-x-transition"
              >
                <v-icon 
                  @click="skill.expand=!skill.expand" 
                  left 
                  :color="skill.color"
                >
                  {{ skill.icon }}
                </v-icon>
              </v-badge>
              {{ skill.name }}
              <v-expand-transition>
                <v-card
                  v-show="skill.expand"
                  height="100"
                  width="100"
                  class="mx-auto secondary"
                ></v-card>
              </v-expand-transition>
            
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
          expand: false,
        },
        {
            name: "HTML",
            icon: "mdi-language-html5",
            color: "#E44D26",
            hover: false,
            expand: false,
        },
        {   name: "CSS", 
            icon: "mdi-language-css3",
            color: "#2965f1", 
            hover: false,
            expand: false, 
        },
        {   name: "ReactJS", 
            icon: "mdi-react", 
            color: "#f89820", 
            hover: false,
            expand: false, 
        },
        {
            name: "React Native",
            icon: "mdi-react",
            color: "#4CAF50",
            hover: false,
            expand: false,
        },
        {
            name: "React Redux",
            icon: "mdi-react",
            color: "#A41E11",
            hover: false,
            expand: false,
        },
        {   name: "NodeJS", 
            icon: "mdi-nodejs", 
            color: "#BDBDBD", 
            hover: false,
            expand: false, 
        },
        {   name: "Vue.js", 
            icon: "mdi-vuejs", 
            color: "#41B883", 
            hover: false,
            expand: false, 
        },
        {   name: "Vuetify", 
            icon: "mdi-vuetify", 
            color: "#42A5F5", 
            hover: false,
            expand: false,
        },
        {   name: "Nuxt.js", 
            icon: "mdi-nuxt", 
            color: "#41B883", 
            hover: false,
            expand: false,
        },
        {
            name: "SQL",
            icon: "mdi-database-search",
            color: "#80DEEA",
            hover: false,
            expand: false,
        },
        {
            name: "Expo",
            icon: "mdi-airplane-takeoff",
            color: "#3FA037",
            hover: false,
            expand: false,
        },
        {
            name: "jQuery",
            icon: "mdi-jquery",
            color: "#0db7ed",
            hover: false,
            expand: false,
        },
        {
            name: "Bootstrap",
            icon: "mdi-bootstrap",
            color: "#E44D26",
            hover: false,
            expand: false,
        },
        {
            name: "Python",
            icon: "mdi-language-python",
            color: "#306998",
            hover: false,
            expand: false,
        },
        {
            name: "Jest",
            icon: "mdi-ab-testing",
            color: "#306998",
            hover: false,
            expand: false,
        },
    ],
  }),
};
</script>