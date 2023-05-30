<template>
    <div>
        <TodoHeader />
        <TodoInput />
        <InputAtom :type="text"/>
        <TodoList />
        <TodoFooter />
    </div>
</template>

<script setup>
import TodoHeader from '@/components/Todo/TodoHeader.vue'
import TodoInput from '@/components/Todo/TodoInput.vue'
import TodoList from '@/components/Todo/TodoList.vue'
import TodoFooter from '@/components/Todo/TodoFooter.vue'
</script>
