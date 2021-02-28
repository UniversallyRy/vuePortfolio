<template>
  <div>
    <my-header></my-header>
    <h1>Hello from root vue component</h1>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue'

export default {
  components: {
    'my-header': Header
  }
}
</script>

<style>
  *{
      box-sizing:border-box;
      margin:0;
  }
</style>
