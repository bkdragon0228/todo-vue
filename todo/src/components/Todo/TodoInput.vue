<template>
    <div class="inputBox shadow">
        <InputAtom :type="text" :on-click="addTodo" v-model="newTodoItem"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { todoListStore } from '../../stores/list'
import InputAtom from '../InputAtom.vue'

const { addTodoList } = todoListStore()
const newTodoItem = ref('')

const addTodo = () => {
  if (!newTodoItem.value) return

  addTodoList(newTodoItem.value)
  newTodoItem.value = ''
}

</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    width : 200px;
    height: 30px;
    border: 1px solid cyan;
    font-size : 0.9rem;
    box-shadow: 20px;
    transition: all .3s ease;
}

.addBtn {
    width : 3rem;
    height: 30px;
    background : linear-gradient(to right, #62EAC6, #32CEE6);
    color : white;
    vertical-align: middle;
    border-radius: 0 5px 5px 0;
    border : none;
}
</style>
