<template>
    <footer class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">
            Clear All
        </span>
    </footer>
</template>

<script setup>
const clearTodo = () => {
  localStorage.clear()
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
  transition: all 0.3s ease;
}

.clearAllBtn:hover {
    background: red;
    color : white;
}
</style>
