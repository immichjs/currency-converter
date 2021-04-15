<template>
  <div id="app" class="flex flex-col items-center justify-center h-screen bg-gray-100 md:h-full">
    <transition name="bounce" class="z-10">
      <Conversor v-if="show"/>
    </transition>
    <transition name="fade">
      <div class="flex flex-col bg-purple-400 shadow-sm rounded-b-2xl" v-if="show">
        <p class="px-6 py-2 text-xs font-medium text-white">Última atualização em: {{ coin }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

import Conversor from '@/components/Conversor'

export default {
  name: 'App',
  data() {
    return {
      show: false,
      coin: null
    }
  },
  title: 'Moedas | Conversor',
  created() {
    axios
      .get('https://economia.awesomeapi.com.br/json/all')
      .then(response => {
          this.coin = response.data.USD.create_date
      });
  },
  components: {
    Conversor,
  },
  mounted() {
    this.show = true
  }
}
</script>

<style src="./assets/css/global.css">
</style>
