<script setup>
import { inject } from 'vue';

const count = inject('count')
const method = inject('method')
const num = inject('num')
</script>

<template>
  <h3>底层组件</h3>
  <span>高层数据{{ count }}</span>
  <span>{{ num }}</span>
  <button @click="method">方法</button>
</template>



<style>

</style>