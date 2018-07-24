<template>
    <div class="container">
        <h3 class="center text-center mb-2">Promociones vigentes</h3>
        <div v-if="promos.length == 0">
            <h4 class="text-center">No existen promociones activas, puedes agregarlas desde las pestañas dentro de esta misma página</h4>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Expiracón</th>
                    <th>Descuento</th>
                    <th>Tipo</th>
                    <th>Producto</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="promo in promos">
                    <td>{{promo.code}}</td>
                    <td>{{promo.expirationDate}}</td>
                    <td>{{promo.discount}}</td>
                    <td>{{promo.type}}</td>
                    <td>{{promo.product.name}}</td>
                    <td><button class="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="right" title="Esta opción expirará la promoción">Desactivar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import {
        httpService,
        getToken
    } from '@/services/ServiceContainer'
    export default {
        name: 'ActivePromos',
        data() {
            return {
                promos: []
            }
        },
        methods: {

        },
        components: {},
        mounted: function() {
            httpService.get(getToken(), 'admin/getActivePromos')
                .then(response => {
                    for (var i = 0; i < response.data.length; i++) {
                        this.promos.push(response.data[i])
                    }
                }).catch(err => {

                })
        }
    }

</script>
<style lang="scss" scoped>
    form {
        width: 70%;
    }

    .center {
        margin: 0 auto;
        width: 70%;
    }

    .form-button {
        width: 100%;
    }

    .row {
        padding: 2rem;
    }

    .hidden {
        display: none;
    }

</style>
