<template>
  <section id="projects" class="project-section">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="red--text">Projects</h1>
        </v-col>
      </v-row>
      <v-divider class="mb-6 mt-1" />
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            dark
            :class="`elevation-${hover ? 20 : 10}`"
            class="mx-auto mb-2"
            min-width="400"
          >
            <v-slide-group v-model="model" class="pa-4" show-arrows>
              <v-slide-item v-for="project in projects" :key="project.name">
                <v-card class="ma-2" width="250" height="525">
                  <v-img
                    class="white--text align-end"
                    height="400"
                    max-width="245"
                    :width="width"
                    :aspect-ratio="16 / 9"
                    :src="project.image"
                  >
                    <v-card-title>{{ project.name }}</v-card-title>
                  </v-img>
                  <v-card-text class="text--primary">
                    {{ truncate(project.description) }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn bottom color="red" text :href="project.github">
                      See Code
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Score Checker",
          github: "https://github.com/UniversallyRy/scoreChecker",
          description: "Score checking app created with React Native.",
          image:
            "https://raw.githubusercontent.com/UniversallyRy/scoreChecker/main/demo/dateChange.gif"
        },
        {
          name: "Affirmation Board",
          github: "https://github.com/UniversallyRy/rnvisionsdreamsideas",
          description: "An affirmation app created with React Native.",
          image:
            "https://raw.githubusercontent.com/UniversallyRy/rnvisionsdreamsideas/main/demo/visions.gif"
        },
        {
          name: "Book Search",
          github: "https://github.com/UniversallyRy/booksAndPoetry",
          description: "Next.js SPA using Google Book's API.",
          image:
            "https://github.com/UniversallyRy/booksAndPoetry/raw/main/public/dark.png"
        },
        {
          name: "Todo App",
          github: "https://github.com/UniversallyRy/reacttodo",
          description: "A Todo App created with React and Redux.",
          image:
            "https://user-images.githubusercontent.com/24601662/109756755-7f9a1200-7bb6-11eb-9f66-177307887582.png"
        },
        {
          name: "Tic Tac Toe App",
          github: "https://github.com/UniversallyRy/reacttactoe",
          description: "A Tic Tac Toe game created with React",
          image: "https://i.postimg.cc/tTrv6qfj/reactacttoescreenshot.png"
        }
      ]
    };
  },
  methods: {
    truncate(str) {
      if (str.length > 70) {
        return str.slice(0, 69) + "...";
      } else {
        return str;
      }
    }
  }
};
</script>

<style>
.project-section {
  background-color: #242331;
}
.v-image {
  border: 1px solid #242331;
}
</style>
