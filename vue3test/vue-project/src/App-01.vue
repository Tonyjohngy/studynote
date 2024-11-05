<!-- <script>
export default {
  setup() {
    console.log('setup');
    const message = 'hello vue3'
    const logMessage = () => {
    console.log(message);
    }
    return {
      message,logMessage
      }
  },
  beforeCreate() {
    console.log('beforeCreated');
    }
  }
</script> -->
<script setup>
  console.log('setup');
    const message = 'hello vue3'
    const logMessage = () => {
    console.log(message);
} 
</script>

<template>
  <div>
   {{message}}
  </div>
  <button @click="logMessage"></button>
</template>