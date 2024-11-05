<script setup>
import { ref } from 'vue';
import sonCom from './components/son-com.vue'
const count = ref(200)
const getMessage = (msg) => {
  console.log(msg);
}
</script>

<template>
  <h3>父组件</h3>
  <sonCom :count="count" @get-message="getMessage" ></sonCom>
  <div>
   父组件{{count}}
  </div>
</template>