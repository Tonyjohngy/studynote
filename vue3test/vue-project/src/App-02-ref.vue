<script setup>
import { ref } from 'vue';
const count = ref(1)
const info = ref({
  name: 'lili',
  age: 12
})
const add = () => {
  count.value++
}
</script>

<template>
  <div>{{ count }}</div><span>{{ info.name }}</span>
  <button @click="add">+1</button>
</template>