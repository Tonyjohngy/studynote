<script setup>
import mid from './components/middle-com.vue'
import { provide,ref } from 'vue';
const count = ref(500)
const method = () => {
  console.log('底层方法');
}
// 
provide('num',11)
provide('count',count)
provide('method',method)
</script>

<template>
  <h3>高层组件</h3>
  <mid></mid>
  
</template>



<style>

</style>