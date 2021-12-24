<template>
  <v-container
    id="skillContainer"
    fluid
    grey
    style="overflow-x: hidden"
  >
    <h2 class="display-2 mt-9 mb-3 font-weight-bold red--text">Skills</h2>
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
      <!-- add href for skills to hover -->
        <v-tooltip bottom>
          <template #activator="{ on: listeners, attrs }">
            <p 
              class="mb-1 subtitle-1 text-center"
            >
              <v-icon 
                left 
                v-on="listeners"
                v-bind="attrs"
                :color="skill.color"
              >
                {{ skill.icon }}
              </v-icon>
              {{ skill.name }}
            </p>
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
        icon: "mdi-language-javascript",
        color: "#F0DB4F",
        category: 'language',
        hover: false,
        info: 'Programming language used in web development, web apps, and a lot more. Allows dynamic features on websites that cannot be done with just HTML and CSS.',
      },
      {
        name: "HTML",
        icon: "mdi-language-html5",
        color: "#e34c26",
        category: 'language',
        hover: false,
        info: 'HyperText Markup Language, standardized system for tagging text files to make font, color, graphic and hyperlink effects on websites.'
      },
      {   
        name: "CSS", 
        icon: "mdi-language-css3",
        color: "#2965f1", 
        category: 'language',
        hover: false,
        info: 'Cascading Style Sheet, used to format the layout and other visual aspects of websites.'
      },
      {   
        name: "React", 
        icon: "mdi-react", 
        color: "#61DBFB", 
        category: 'library',
        hover: false,
        info: 'JavaScript library specializing in helping create user interfaces and other interactive elements.'
      },
      {
        name: "React Native",
        icon: "mdi-react",
        color: "#61DBFB",
        category: 'library',
        hover: false,
        info: 'Allows developers to build mobile apps with React.'
      },
      {
        name: "Redux Toolkit",
        icon: "mdi-react",
        color: "#764abc ",
        category: 'library',
        hover: false,
        info: 'React library and utilities for storing data state and reducers.'
      },
      {
        name: "TypeScript",
        icon: "mdi-language-typescript",
        color: "#719af4",
        category: 'library',
        hover: false,
        info: 'JavaScript extension that adds types to the language. Supports tighter integration into code editors, catching errors and providing fixes.'
      },
      {   
        name: "Vue.js", 
        icon: "mdi-vuejs", 
        color: "#41B883", 
        category: 'framework',
        hover: false,
        info: 'JavaScript framework for building user interfaces and single-page applications.'
      },
      {   
        name: "Vuetify", 
        icon: "mdi-vuetify", 
        color: "#42A5F5", 
        category: 'framework',
        hover: false,
        info: 'Complete UI framework built on top of Vue.js. Provides mobile-first support, making page components work correctly whether on a phone, tablet, or desktop computer.'
      },
      {
        name: "Native-base",
        icon: "mdi-palette",
        color: "#e535ab",
        category: 'ui',
        hover: false,
        info: 'Component library built on top of React Native, allows developers to build universal designs.'
      },
      {
        name: "Chakra-UI",
        icon: "mdi-palette",
        color: "#e535ab",
        category: 'ui',
        hover: false,
        info: 'Simple, modular and accesible component library, provides building blocks for React apps.'
      },
      {
        name: "styled-components",
        icon: "mdi-palette",
        color: "#e535ab",
        category: 'ui',
        hover: false,
        info: 'Utilizes JavaScript template literals enhancing CSS to allow the ability to write direct CSS code to style React components.'
      },
      {
        name: "Reanimated",
        icon: "mdi-animation",
        color: "#e535ab",
        category: 'animation',
        hover: false,
        info: 'React Native Library used to create smooth animations and interactions that run on the UI thread.'
      },
      {
        name: "Moti",
        icon: "mdi-animation",
        color: "#e535ab",
        category: 'animation',
        hover: false,
        info: 'Powered by Reanimated 2, provides animations and transitions that work well across websites and native apps.'
      },
      {
        name: "Framer-motion",
        icon: "mdi-animation",
        color: "#e535ab",
        category: 'animation',
        hover: false,
        info: 'React motion library that enables developers to create fully custom components, integrate 3rd party tools, and leverage other external code libraries.'
      },
      {
        name: "GraphQL",
        icon: "mdi-graphql",
        color: "#e535ab",
        category: 'language',
        hover: false,
        info: 'Query language and server-side runtime for APIs that prioritizes giving clients exactly the data they request and nothing more.'
      },
      {
        name: "Expo",
        icon: "mdi-chevron-up",
        color: "#000",
        category: 'framework',
        hover: false,
        info: 'React framework and platform, comes with tools and services built around React Native nad other native platforms that help develop, build and deploy on iOS, Android and web apps from Javascript codebases.'
      },
      {
        name: "Bootstrap",
        icon: "mdi-bootstrap",
        color: "#563d7c",
        category: 'framework',
        hover: false,
        info: 'JavaScript framework, one of the most popular used in development to make responsive, mobile-first sites and apps.'
      },
      // {
      //   name: "Python",
      //   icon: "mdi-language-python",
      //   color: "#306998",
      //   hover: false,
      //   info: 'Hello'
      // },
      {   
        name: "NodeJS", 
        icon: "mdi-nodejs", 
        color: "#3c873a", 
        category: 'misc',
        hover: false,
        info: 'JavaScript run-time enviroment, based off Google\'s V8 engine, that helps execute JavaScript code outside of a web browser.'
      },
      {
        name: "Jest",
        icon: "mdi-ab-testing",
        color: "#15c213",
        category: 'framework',
        hover: false,
        info: 'JavaScript testing framework, designed to ensure correctness of JavaScript codebases.'
      },
    ],
  }),
};
</script>

<style>
  .category-text {
    transform: rotate(90deg);
  }
</style>