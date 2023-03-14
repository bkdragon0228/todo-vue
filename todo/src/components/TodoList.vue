<template>
    <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
          {{ todoItem }}
          <span v-on:click="()=> removeTodo(todoItem, index)" class="removeBtn">
            x
          </span>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const todoItems = ref([])

onMounted(() => {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) !== 'loglever:webpack-dev-server') {
        todoItems.value.push(localStorage.key(i))
      }
    }
  }
})

const removeTodo = (todoItem, index) => {
  localStorage.removeItem(todoItem)
  todoItem.value.splice(index, 1)
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  border : 1px solid rgb(129, 255, 249);
  transition: all .3s ease;
}
.removeBtn {
    margin-left: auto;
    color : #de4343;
    cursor: pointer;
}
</style>
