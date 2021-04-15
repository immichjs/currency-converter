<template>
  <div id="app" class="flex items-center justify-center h-screen bg-indigo-200 md:h-full">
    <Conversor/>
  </div>
</template>

<script>
import Conversor from '@/components/Conversor'

export default {
  name: 'App',
  title: 'Moedas | Conversor',
  components: {
    Conversor,
  },
}
</script>

<style src="./assets/css/global.css">
</style>
