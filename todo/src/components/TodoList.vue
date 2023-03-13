<template>
    <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
          {{ todoItem }}
          <span v-on:click="removeTodo(todoItem, index)" class="removeBtn">
            x
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      todoItems: []
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        if (localStorage.key(i) !== 'loglever:webpack-dev-server') {
          this.todoItems.push(localStorage.key(i))
        }
      }
    }
  },
  methods: {
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    }
  }
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

li:hover {
    transform: scale(1.1);
}

.removeBtn {
    margin-left: auto;
    color : #de4343;
    cursor: pointer;
}
</style>
