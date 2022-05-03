<template>
  <!-- <HelloWorld msg="Hello world" /> -->
  <!-- <IncremenDecrement title="Increment And Decrement" /> -->
  <!-- <LoginForm title="Login" /> -->
  <ConditionalComp title="ConditionalRendering" />
</template>

<script>
// import IncremenDecrement from "./components/IncrementDecrement/IncrementDecrement.vue";
// import LoginForm from "./components/LoginForm/LoginForm.vue";
import ConditionalComp from "./components/ConditionalRendering/ConditionalRendering.vue";
export default {
  name: "App",
  components: {
    // IncremenDecrement,
    // LoginForm,
    ConditionalComp,
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
