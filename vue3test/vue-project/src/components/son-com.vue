<script setup>
import { ref } from 'vue';
const emits = defineEmits('get-message')
const prop = defineProps({
  count:Number
})
const addMoney = () => {
  emits('get-message',message.value)
}
const message = ref('加钱')
</script>

<template>
  <h3>子组件</h3>
<div>{{ count }}</div>  
<button @click="addMoney">{{ message }}</button>
</template>



<style>

</style>