<template lang="pug">
  div#app.container
    //- img(src="./assets/logo.png")
    Steam

</template>

<script>
import Steam from './components/Steam'

export default {
  name: 'app',
  components: {
    Steam
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
