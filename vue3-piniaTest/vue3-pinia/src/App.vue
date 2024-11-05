<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from './store/count'
const store = useStore()
const {num2,num3} = storeToRefs(store)
</script>
<template>
    <div>数字：{{ store.num }}</div>
    <div>数字2：{{ num2 }}</div>
    <div>数字3：{{ num3 }}</div>
    <div>两倍数字 {{ store.mutiply }}</div>
    <button @click="store.addNum">+1</button>
    <button @click="store.subnum">-1</button>
    <button @click="store.getList">得到列表</button>
    <ul>
      <li v-for=" (item,index) in store.list" :key="index">{{ item }}</li>
    </ul>

</template>

<style scoped>

</style>
