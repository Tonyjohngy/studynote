
<script setup>
import { computed,ref, watch } from "vue"
const count = ref([1, 3, 5, 6, 88, 9, 123])
const name = ref('lian')
    const age = ref(12)
    const number = computed(() => {
      return count.value.filter(x=>x>5)
    })
const changeNameAge = () => {
  name.value = 'xixi'
      age.value = 23
    }
    // 多个对象
watch([name, age], ([newName, newAge], [oldName, oldAge]) => {
      console.log('新名字'+newName+'新年龄'+newAge);
    })
    // 复杂对象监视
    const add = () => {
      count.value.push(3)
    }
watch(count, (newValue,oldValue)=> {
      console.log('加了元素3'+'旧的元素'+oldValue+'新的元素'+newValue)
},
{immediate:true},
{deep:true}
)
</script>

<template>
  <div>
   正常数组 {{count}}
  </div>
  <button @click="add">3</button>
  <div>
    过滤数组 {{ number }}
  </div>
  <div>{{ name }}{{ age }}</div>
  <button @click="changeNameAge">改名字和年龄</button>

</template>
