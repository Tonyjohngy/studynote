import { defineStore } from "pinia"
import { ref, computed } from "vue"
import axios from "axios"
export const useStore = defineStore('counter', () => {
  const num = ref(2000)
  const num2 = ref(2100)
  const num3 = ref(2200)
  const addNum = () => {
    num.value++
  }

  const subnum = () => {
    num.value--
  }

  const mutiply = computed(() => {
    return num.value * 2
  })
  const list = ref([])
  const getList = async () => {
    const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
    list.value = data.channels
    console.log(list);
  }
  return { num, addNum, subnum, mutiply, getList, list, num2, num3 }
},
  {
    persist: {
      key: 'my-count',
      pick: ['num', 'num2']
    }
  })