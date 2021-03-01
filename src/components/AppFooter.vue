<template>
  <footer>
    <p id='date'>Copyright &copy; {{getYear}} </p>
  </footer>
</template>

<script>
export default {
  computed: {
    getYear: function () {
        return new Date().getFullYear()   
    }
  }
}
</script>