<template>
    <section id="projects" class="project-section">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Projects</h1>
                </v-col>
            </v-row>
            <v-sheet
                dark
                class="mx-auto allProjects"
                elevation="8"
                min-width="400"
            >
                <v-slide-group
                    v-model="model"
                    class="pa-13"
                    active-class="success"
                    show-arrows
                >
                    <v-slide-item
                        v-for="project in projects"
                        :key="project.name"
                    >
                        <v-card
                            class="demo ma-3"
                            min-width="200"
                            min-height="400"
                        >
                            <v-img
                                class="white--text align-end"
                                height="550"
                                max-width="400"
                                :src="project.image"
                            >
                                <v-card-title>{{ project.name }}</v-card-title>
                            </v-img>
                            <v-card-text class="text--primary">
                                {{ truncate(project.description) }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    color="red"
                                    text
                                    :href="project.github"
                                >
                                    See Code
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name:"NBA App",
                    github:"https://github.com/UniversallyRy/scoreChecker",
                    description: "An NBA App created with React Native.",
                    image: "https://raw.githubusercontent.com/UniversallyRy/scoreChecker/main/demo/sScoreCard.gif"
                },
                {
                    name:"Affirmation Board",
                    github:"https://github.com/UniversallyRy/rnvisionsdreamsideas",
                    description: "An affirmation app created with React Native.",
                    image: "https://raw.githubusercontent.com/UniversallyRy/rnvisionsdreamsideas/main/demo/visions.gif"
                },
                {
                    name:"Todo App",
                    github:"https://github.com/UniversallyRy/reacttodo",
                    description: "A Todo App created with ReactJS.",
                    image: "https://user-images.githubusercontent.com/24601662/109756755-7f9a1200-7bb6-11eb-9f66-177307887582.png"
                },
                {
                    name:"Pomodoro App",
                    github:"https://github.com/UniversallyRy/pomov2",
                    description: "Pomodoro App Created with ReactJS.",
                    image: ""
                },
                {
                    name:"Tic Tac Toe App",
                    github:"https://github.com/UniversallyRy/reacttactoe",
                    description: "A Tic Tac Toe game created with ReactJS",
                    image: "https://user-images.githubusercontent.com/24601662/109756347-c63b3c80-7bb5-11eb-90c1-ff6ff5b19166.png"
                },
                
            ]
        }
    },
    methods: {
        truncate(str) {
            if (str.length > 70) {
                return str.slice(0, 69) + "..."
            }else {
                return str;
            }
        }
    }
}
</script>

<style>
    .project-section {
        background-color: #242331;
    }
    .v-image {
        border: 1px solid #242331;
    }
    .demo{
        margin-bottom: 15px;
    }
    .v-sheet {
        margin-top: 30px;
    }
</style>