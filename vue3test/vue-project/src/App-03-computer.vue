
<script setup>
import { computed,ref } from "vue"
    const count = ref([1,3,5,6,88,9,123])
    const number = computed(() => {
      return count.value.filter(x=>x>5)
    })
</script>

<template>
  <div>
   正常数组 {{count}}
  </div>
  <div>
    过滤数组 {{ number }}
  </div>
</template>