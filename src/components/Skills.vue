<template>
  <v-container
    id="skillContainer"
    fluid
    grey
    style="overflow-x: hidden"
  >
    <v-row>
      <v-col 
        v-for="category in categories"
        :key="category"
        cols="auto"
        class="categories" 
        :color="category.color"
      >
        <subtitle-2 v-bind:style="{ color: category.color}" class="font-italic d-block">
          {{category.name}}
        </subtitle-2>  
      </v-col>
      <v-col align-self="center" justify-self="center" offset="2" cols="1">
        <h2 class="display-2 font-weight-bold red--text">Skills</h2>
      </v-col>
    </v-row>
    <v-divider class="mb-6" />
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
        <v-tooltip top>
          <template #activator="{ on: listeners, attrs  }">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card 
                  class="px-2 py-2 mx-auto cardColor transition-swing"
                  :class="`elevation-${hover ? 6 : 1}`"
                  max-width="300"
                  
                >
                  <v-icon 
                    v-on="listeners"
                    v-bind="attrs"
                    :color="skill.color"
                  >
                    {{ skill.icon }}
                  </v-icon>
                  <v-card-title
                    v-on="listeners"
                    v-bind="attrs"
                    class="mb-1 subtitle-2 justify-center"
                    align="center"
                  >
                    {{ skill.name }}
                  </v-card-title>
                  <v-progress-linear rounded striped :value="skill.experience" :color="skill.barColor"/>
                </v-card>
              </template>
            </v-hover>
          </template>
          <span>{{skill.info}}</span>
        </v-tooltip>  
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
        info: 'Programming language used in web development, web apps, and a lot more. Allows dynamic features on websites that cannot be done with just HTML and CSS.',
        experience: "100",
        icon: "mdi-language-javascript",
        color: "#F0DB4F",
        barColor: "#F0DB4F",
        hover: false,
      },
      {
        name: "HTML",
        info: 'HyperText Markup Language, standardized system for tagging text files to make font, color, graphic and hyperlink effects on websites.',
        experience: "100",
        icon: "mdi-language-html5",
        color: "#e34c26",
        barColor: "#F0DB4F",
        hover: false,
      },
      {   
        name: "CSS", 
        info: 'Cascading Style Sheet, used to format the layout and other visual aspects of websites.',
        experience: "85",
        icon: "mdi-language-css3",
        color: "#2965f1", 
        barColor: "#F0DB4F",
        hover: false,
      },
      {   
        name: "React", 
        info: 'JavaScript library specializing in helping create user interfaces and other interactive elements.',
        experience: "90",
        icon: "mdi-react", 
        color: "#61DBFB", 
        barColor: "#764abc",
        hover: false,
      },
      {
        name: "React Native",
        info: 'Allows developers to build mobile apps with React.',
        experience: "70",
        icon: "mdi-react",
        color: "#61DBFB",
        barColor: "#764abc",
        hover: false,
      },
      {
        name: "Redux Toolkit",
        info: 'React library and utilities for storing data state and reducers.',
        experience: "65",
        icon: "mdi-react",
        color: "#764abc ",
        barColor: "#764abc",
        hover: false,
      },
      {
        name: "TypeScript",
        info: 'JavaScript extension that adds types to the language. Supports tighter integration into code editors, catching errors and providing fixes.',
        experience: "50",
        icon: "mdi-language-typescript",
        color: "#719af4",
        barColor: "#764abc",
        hover: false,
      },
      {   
        name: "Vue.js", 
        info: 'JavaScript framework for building user interfaces and single-page applications.',
        experience: "70",
        icon: "mdi-vuejs", 
        color: "#41B883", 
        barColor: "#61DBFB",
        hover: false,
      },
      {   
        name: "Vuetify", 
        info: 'Complete UI framework built on top of Vue.js. Provides mobile-first support, making page components work correctly whether on a phone, tablet, or desktop computer.',
        experience: "70",
        icon: "mdi-vuetify", 
        color: "#42A5F5", 
        barColor: "#61DBFB",
        hover: false,
      },
      {
        name: "native-base",
        info: 'Component library built on top of React Native, allows developers to build universal designs.',
        experience: "60",
        icon: "mdi-palette",
        color: "#0e7490",
        barColor: "#3a5311",
        hover: false,
      },
      {
        name: "chakra-ui",
        info: 'Simple, modular and accesible component library, provides building blocks for React apps.',
        experience: "50",
        icon: "mdi-palette",
        color: "#3a5311",
        barColor: "#3a5311",
        hover: false,
      },
      {
        name: "styled-components",
        info: 'Utilizes JavaScript template literals enhancing CSS to allow the ability to write direct CSS code to style React components.',
        experience: "90",
        icon: "mdi-palette",
        color: "#e16b8b",
        barColor: "#3a5311",
        hover: false,
      },
      {
        name: "reanimated",
        info: 'React Native Library used to create smooth animations and interactions that run on the UI thread.',
        experience: "40",
        icon: "mdi-animation",
        color: "#61DBFB",
        barColor: "#ff00f7",
        hover: false,
      },
      {
        name: "moti",
        info: 'Powered by Reanimated 2, provides animations and transitions that work well across websites and native apps.',
        experience: "70",
        icon: "mdi-animation",
        color: "#b042ff",
        barColor: "#ff00f7",
        hover: false,
      },
      {
        name: "framer-motion",
        info: 'React motion library that enables developers to create fully custom components, integrate 3rd party tools, and leverage other external code libraries.',
        experience: "50",
        icon: "mdi-animation",
        color: "#ff00f7",
        barColor: "#ff00f7",
        hover: false,
      },
      {
        name: "graphQL",
        info: 'Query language and server-side runtime for APIs that prioritizes giving clients exactly the data they request and nothing more.',
        experience: "40",
        icon: "mdi-graphql",
        color: "#e535ab",
        barColor: "#F0DB4F",
        hover: false,
      },
      {
        name: "expo",
        info: 'React framework and platform, comes with tools and services built around React Native nad other native platforms that help develop, build and deploy on iOS, Android and web apps from Javascript codebases.',
        experience: "90",
        icon: "mdi-chevron-up",
        color: "#000",
        barColor: "#61DBFB",
        hover: false,
      },
      {
        name: "Bootstrap",
        info: 'JavaScript framework, one of the most popular used in development to make responsive, mobile-first sites and apps.',
        experience: "70",
        icon: "mdi-bootstrap",
        color: "#563d7c",
        barColor: "#61DBFB",
        hover: false,
      },
      {   
        info: 'JavaScript run-time enviroment, based off Google\'s V8 engine, that helps execute JavaScript code outside of a web browser.',
        name: "NodeJS", 
        experience: "100",
        icon: "mdi-nodejs", 
        color: "#3c873a", 
        hover: false,
      },
      {
        name: "Jest",
        info: 'JavaScript testing framework, designed to ensure correctness of JavaScript codebases.',
        experience: "60", 
        icon: "mdi-ab-testing",
        color: "#15c213",
        barColor: "#61DBFB",
        hover: false,
      },
    ],
    categories: [
      {
        name:"*Languages",
        color: "#F0DB4F",
      },
      {
        name:"*Framework",
        color: "#61DBFB",
      },
      {
        name:"*Libraries",
        color: "#764abc",
      },
      {
        name:"*UI",
        color: "#3a5311",
      },
      {
        name:"*Animation",
        color: "#ff00f7",
      },
      {
        name:"*Misc",
        color: "",
      },
    ]
  }),
};
</script>

<style>
  .category-text {
    transform: rotate(90deg);
  }
  .categories {
    font-size: 0.7em;
  }
  .cardColor {
   background-color: rgba(255, 255, 255, 0) !important;
  }
</style>