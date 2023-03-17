<template>
    <div>
      <div>
        {{ getTodoLength }}개
      </div>
      <ul>
        <li v-for="(todoItem, index) in todoList" v-bind:key="todoItem">
          {{ todoItem }}
          <span v-on:click="()=> removeTodo(todoItem, index)" class="removeBtn">
            x
          </span>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { todoListStore } from '../stores/list'

const { todoList, getTodoLength } = todoListStore()

const removeTodo = (todoItem, index) => {
  console.log(todoItem)
  todoList.splice(index, 1)
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
