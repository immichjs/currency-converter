<template>
    <form class="relative flex flex-col w-full gap-4 p-6 bg-white shadow-xl rounded-xl mx-14 md:w-auto -top-10 md:top-0">
        <h1 class="text-xl text-center text-gray-400">Real Brasileiro / Dolar Americano</h1>
        <input type="number" placeholder="R$" :class="inputStyle" v-model="brl"/>
        <input type="text" placeholder="$" v-model="convertedDollar" :class="inputStyle" disabled/>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            usd: null,
            brl: 0,
            convertedDollar: 0,
            inputStyle: 'text-center border-2 rounded-lg p-3 text-lg font-medium bg-transparent outline-none text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent duration-200',
        };
    },
    created() {
        axios
            .get('https://economia.awesomeapi.com.br/json/all')
            .then((response) => {
                this.usd = response.data.USD;
            });
    },
    watch: {
        brl() {
            this.brl < 0
                ? this.brl = 0
                : this.convertedDollar = `$ ${(this.brl * this.usd.bid).toFixed(2)}`
        },
    }
}
</script>
