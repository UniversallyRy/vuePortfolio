<template>
    <section id="contact" class="contact-section">
        <v-container>
            <v-row>
                <v-column class="mx-auto">
                    <h1>Contact Me</h1>
                </v-column>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-space-around" sm="6" offset-sm="3">
                    <v-icon></v-icon>
                        <a 
                            v-for="link in links"
                            v-bind:href="link.url"
                            v-bind:key="link.name"
                        >
                        <img 
                            :key="link.name"
                            class="contact-icon" 
                            :src="link.image"
                        />
                        </a>
                </v-col>    
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name:"Github",
                    url: "https://github.com/UniversallyRy",
                    image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                },
                {
                    name:"Twitter",
                    url: "https://twitter.com/UniversallyRy",
                    image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
                },
                {
                    name:"Instagram",
                    url: "https://instagram.com/UniversallyRy",
                    image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                },
                {
                    name:"LinkedIn",
                    url: "https://linkedin.com/",
                    image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                },
                
            ]
        }
    },
    methods: {
        clickMethod(item) {
        // future methods
        }
    }
}
</script>
<style scoped>
    .contact-section {
        background-color: #533E2D;
    }
    .contact-icon {
        height: 50px;
        width: 50px;
    }
</style>