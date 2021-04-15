<template>
    <div class="relative flex flex-col w-full gap-4 p-6 py-10 bg-white shadow-xl rounded-xl mx-14 md:w-auto -top-10 md:top-0">
        <h1 class="text-xl text-center text-gray-400">Real Brasileiro / Dolar Americano</h1>
        <input
            type="number"
            placeholder="Digite o valor a ser convertido"
            class="p-3 text-base font-medium text-center text-gray-500 duration-200 bg-transparent border-b-2 shadow-sm outline-none focus:outline-none focus:border-purple-500"
            v-model="brl"
        />
        <input
            type="text"
            v-model="convertedDollar"
            class="mt-2 text-base font-medium text-center text-purple-600 bg-transparent"
            disabled
            v-if="convertedDollar"
        />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            usd: null,
            brl: '',
            convertedDollar: '',
            inputStyle: 'text-center border-2 rounded-lg p-3 text-lg font-medium bg-transparent outline-none text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent duration-200',
        };
    },
    created() {
        axios
            .get('https://economia.awesomeapi.com.br/json/all')
            .then(response => {
                this.usd = response.data.USD;
            });
    },
    watch: {
        brl() {
            if (this.brl <= 0) {
                this.brl = ''
                this.convertedDollar = ''
            } else {
                this.convertedDollar = `$ ${(this.brl * this.usd.bid).toFixed(2)}`
            }
        },
    }
}
</script>
