import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const todoListStore = defineStore('todolist', () => {
  const todoList = ref([])

  const addTodoList = (item) => {
    todoList.value.push(item)
  }

  const clearTodoList = () => {
    todoList.value = []
  }

  const getTodoLength = computed(() => todoList.value.length)

  return { todoList, addTodoList, getTodoLength, clearTodoList }
})
