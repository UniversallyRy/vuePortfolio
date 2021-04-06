<template>
    <section id="projects" class="project-section">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Projects</h1>
                </v-col>
            </v-row>
            <v-row class=" justify-space-around mb-7 mt-4">
                    <v-card
                        class="demo"
                        v-for="project in projects"
                        :key="project.name"
                        max-width="300"
                    >
                        <v-img
                        class="white--text align-end"
                        height="450px"
                        :src="project.image"
                        >
                        <v-card-title>{{ project.name }}</v-card-title>
                        </v-img>
                        <v-card-text class="text--primary">
                            {{ truncate(project.description) }}
                        </v-card-text>

                        <v-card-actions>
                        <v-btn
                            color="#242331"
                            text
                            :href="project.github"
                        >
                            See Code
                        </v-btn>
                        </v-card-actions>
                    </v-card>
            </v-row>
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
</style>