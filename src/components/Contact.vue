<template>
    <section id="contact" class="contact-section">
        <v-container>
            <v-row>
                <v-column class="mx-auto">
                    <h1>Contact Information</h1>
                </v-column>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-space-around" sm="6" offset-sm="3">
                    <v-icon></v-icon>
                    <img 
                        class="contact-icon" 
                        src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                    />
                    <img 
                        class="contact-icon" 
                        src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
                    />
                    <img 
                        class="contact-icon" 
                        src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                    />
                    <img 
                        class="contact-icon" 
                        src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                    />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style scoped>
    .contact-section {
        background-color: #533E2D;
    }
    .contact-icon {
        height: 50px;
        width: 50px;
    }
</style>