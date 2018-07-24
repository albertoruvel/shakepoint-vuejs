<template>
    <div class="container">
        <h3 class="center text-center mb-2">Promociones para entrenadores</h3>
        <p class="center text-center mb-4">Con esta opción, se crean promociones solo validas para entrenadores, ellos comparten la promoción y al ser canjeada, el usuario podrá recibir un 10% de descuento en su compra, además, por cada 10 promociones canjeadas por entrenador se generará una bebida gratis</p>
        
    </div>
</template>
<script>
    import {
        httpService,
        getToken
    } from '@/services/ServiceContainer'
    export default {
        name: 'NewTrainerPromo',
        data() {
            return {
                promos: []
            }
        },
        methods: {

        },
        components: {},
        mounted: function() {

        }
    }

</script>
<style lang="scss" scoped>
    p {
        width: 70%;
    }

</style>
