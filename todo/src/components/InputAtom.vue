<template>
    <div>
        <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="onClick"/>
        <button @click="onClick">add</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['modelValue', 'onClick'])
defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
    width : 200px;
    height: 30px;
    border : 1px solid lightgray;
}

button {
    margin-left: 0.5rem;
    width : 3rem;
    height: 30px;
    color : black;
    vertical-align: middle;
    border : 1px solid lightgray;
}
</style>
