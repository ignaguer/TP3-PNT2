<template>
    <div>
      <NavBar />
      <RouterView />

    </div>
</template>

<script>
import NavBar from './componentes/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
  .jumbotron {
    background-color: rgb(205, 39, 39);
    color: black;
  }

  h2 {
    color: black;
    text-align: center;
  }

  hr {
    background-color: black;
  }

  label {
    text-transform: capitalize;
  }
</style>