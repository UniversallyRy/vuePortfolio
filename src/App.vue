<template>
  <div>
    <my-header></my-header>
    <h1>Hello from root vue component</h1>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from '@/components/AppHeader.vue'
import Footer from '@/components/AppFooter.vue'

export default {
  components: {
    'my-header': Header,
    'my-footer': Footer
  }
}
</script>

<style>
  *{
      box-sizing:border-box;
      margin:0;
  }
</style>
