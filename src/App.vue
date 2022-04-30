<template>
  <!-- <HelloWorld msg="Hello world" /> -->
  <IncremenDecrement title="Increment And Decrement" />
</template>

<script>
import IncremenDecrement from "./components/IncrementDecrement.vue";
export default {
  name: "App",
  components: {
    IncremenDecrement,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
