<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo"/>
        <button v-on:click="addTodo" class="addBtn">add</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem === '') return

      const todoData = {
        completed: false,
        item: this.newTodoItem
      }

      localStorage.setItem(this.newTodoItem, JSON.stringify(todoData))
      this.clearInput()

      window.location.reload() // 새로고침
    },
    clearInput: function () {
      this.newTodoItem = ''
    }
  }
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
    border: 1px solid lightcyan;
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
