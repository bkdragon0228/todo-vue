<template>
  <div id="app">
      <header class="title" @click="pushToMain">TO-VUE</header>
      <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const pushToMain = () => {
  router.push('/')
}

</script>

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

.title {
  padding : 20px;
  widows: 100px;
  text-align: center;
  font-size: 2rem;
  color : black;
}

.title:hover {
  text-decoration: underline;
}
</style>
