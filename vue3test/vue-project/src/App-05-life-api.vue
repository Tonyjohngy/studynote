
<script setup>
import {onMounted} from 'vue'
console.log('setup');
onMounted(() => {
    console.log('onMounted');
})
onMounted(() => {
    console.log('onMounted2');
  })
</script>

<template>
  <div>
   {{message}}
  </div>
  <button @click="logMessage"></button>
</template>