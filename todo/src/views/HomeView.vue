<template>
  <div class="homeButtons">
    <button class="button">
      <router-link to="/todo">TO-DO</router-link>
    </button>
    <button class="button">
      <router-link to="/weather">Weaders</router-link>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>

.homeButtons {
  padding : 20px;
  width : 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
}

.button {
  padding : 20px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 20px;
}
</style>
