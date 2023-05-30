<template>
    <header>
        <h1>You have to {{ getTodoLength }} works</h1>
    </header>
</template>

<script setup>
import { todoListStore } from '@/stores/list'

const { getTodoLength } = todoListStore()

</script>

<style>
h1 {
    color : #2f3b52;
    font-weight: 900;
    margin : 2.5rem 0 1.5rem;
}
</style>
