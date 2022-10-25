<template>
  <v-container id="skillContainer" fluid grey style="overflow-x: hidden">
    <v-row no-gutters>
      <v-layout align-start column>
        <div
          v-for="category in categories"
          :key="category"
          class="categories"
          :color="category.color"
        >
          <subtitle-2
            v-bind:style="{ color: category.color }"
            class="font-italic"
          >
            {{ category.name }}
          </subtitle-2>
        </div>
      </v-layout>
      <v-container align-start>
        <h2 class="display-2 font-weight-bold red--text">Skills</h2>
      </v-container>
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
                  <v-icon v-on="listeners" v-bind="attrs" :color="skill.color">
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
                  <v-progress-linear
                    rounded
                    striped
                    :value="skill.experience"
                    :color="skill.barColor"
                  />
                </v-card>
              </template>
            </v-hover>
          </template>
          <span>{{ skill.info }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import skillData from "~/skillsData.ts";

export default {
  data: () => skillData
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
