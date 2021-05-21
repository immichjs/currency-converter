<template>
  <div id="app" class="flex flex-col items-center justify-center h-screen bg-gray-100 md:h-full">
    <transition name="bounce" class="z-10">
      <Conversor/>
    </transition>
    <transition name="fade">
      <div class="flex flex-col bg-purple-400 shadow-sm rounded-b-2xl" v-if="coinState">
        <p class="px-6 py-2 text-xs font-medium text-white">Última atualização em: {{ coins.USD.create_date }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Conversor from '@/components/Conversor'

export default {
  name: 'App',
  data () {
    return {
      coinState: false,
    }
  },
  computed: {
    ...mapGetters([
      'coins'
    ])
  },
  methods: {
    ...mapActions([
      'requestCoins'
    ])
  },
  title: 'Moedas | Conversor',
  created() {
    this.requestCoins()
  },
  components: {
    Conversor,
  },
  watch: {
    coins () {
      if (this.coins.length != 0) this.coinState = true
    }
  }
}
</script>

<style src="./assets/css/global.css">
</style>
