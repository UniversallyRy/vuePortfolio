<template>
    <section id = "about" class="d-flex">
      <v-container fluid black >
        <v-row>
          <v-col sm="6">
            <g-image class='picture' alt="Example image" src="~/spawn.png" width="400" />
          </v-col>
          <v-col sm="6">
            <h1> Self Taught</h1>
            <h1> <span class="jsspan">Javascript</span> Web Developer </h1>
            <p class="bio-paragraph"> Hello, My name is Ryan and I am a self-taught Javscript developer. </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
</template>

<style>
  .bio-paragraph {
    margin-top: 30px;
    color: #BDBDBD
  }
  .jsspan {
    color: red;
  }
  .picture{
    margin-left: 200px;
  }
</style>