<script setup>
import { ref } from 'vue';
const m = 'good'

const alertMessage = () => {
  console.log('this is the message');
}

defineExpose({
  m,
  alertMessage
})
</script>

<template>
<div>11</div>
</template>


<style>

</style>