<template>
    <div class="relative flex flex-col w-full gap-4 p-6 py-10 bg-white shadow-xl rounded-xl mx-14 md:w-auto -top-10 md:top-0">
        <h1 class="text-xl text-center text-gray-400">Real Brasileiro / Dolar Americano</h1>
        <input
            type="number"
            placeholder="Digite o valor a ser convertido"
            class="p-3 text-base font-medium text-center text-gray-500 duration-200 bg-transparent border-b-2 shadow-sm outline-none focus:outline-none focus:border-purple-500"
            v-model="brl"
        />
        <span
            v-if="convertedDollar"
            class="mt-2 text-base font-medium text-center text-purple-600 bg-transparent"
        >{{ convertedDollar }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            brl: '',
            convertedDollar: '',
        };
    },
    computed: {
        ...mapGetters(['coins'])
    },
    watch: {
        brl () {
            if (this.brl <= 0) {
                this.brl = ''
                this.convertedDollar = ''
            } else {
                this.convertedDollar = `$ ${(this.brl * this.coins.USD.bid).toFixed(2)}`
            }
        },
    },
}
</script>
