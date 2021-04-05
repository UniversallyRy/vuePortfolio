<template>
    <section id = "about" class="d-flex">
      <v-container fluid black >
        <v-row>
          <v-col sm="6">
            <g-image class='picture' alt="Spawn Logo" src="~/spawn.png" width="300" />
          </v-col>
          <v-col sm="6">
            <h1 class="title"> Self Taught</h1>
            <h1 class="title"> <span class="jsspan">Javascript</span> Web Developer </h1>
            <p class="bio-paragraph"> Hello, My name is Ryan and I am a self-taught Javscript developer. </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
</template>

<style >
.title{
  color: #BDBDBD;
}
  .bio-paragraph {
    margin-top: 30px;
    color: #BDBDBD;
  }
  .jsspan {
    color: red;
  }
  .picture{
    margin-left: 50px;
  }
</style>