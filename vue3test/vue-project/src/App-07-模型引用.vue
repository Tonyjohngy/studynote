<script setup>
import refCom from './components/son-refCom.vue'
import { ref,onMounted } from 'vue'
const inputRef = ref(null)
const sonRef = ref(null)

onMounted(() => {
  inputRef.value.focus()
 
})

const getMes = ()=>{
  console.log(sonRef.value.m);
  sonRef.value.alertMessage()
}
</script>

<template>
  <input type="text" ref="inputRef">
  <refCom ref="sonRef"></refCom>
  <button @click="getMes">通过ref获取子组件的属性和方法</button>
</template>