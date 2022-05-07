<template>
  <nav>
    <router-link to="/">Hello World</router-link> |
    <router-link to="/incremnet-decrement">IncDec</router-link> |
    <router-link to="/login-form">Login</router-link> |
    <router-link to="/conditional-rendering">Conditional</router-link> |
    <router-link to="/loop-concept">Loop</router-link> |
    <router-link to="/increment-by-vue">Incremen By Vuex</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
