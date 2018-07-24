<template>
    <div class="container">
        <h3 class="center text-center mb-2">Crear nuevo código de descuento abierto</h3>
        <p class="text-center mb-4 center">Una vez creado el código de promoción, todos los usuarios recibirán un correo electrónico de notificación; puedes deshabilitar promociones desde esta <a href="">liga</a></p>
        <form class="center">
            <div class="form-group">
                <label for="type">Tipo de promoción</label>
                <select class="form-control" id="type" v-model="promotionType">
                    <option value="0">Selecciona el tipo de promoción</option>
                    <option value="1">Crear promoción para todos los productos</option>
                    <option value="2">Crear promoción para un solo producto</option>
                    <option value="3">Crear promoción para entrenadores para todos los productos</option>
                    <option value="4">Crear promoción para entrenadores para un producto</option>
                    <option value="5">Crear promoción de temporada</option>
                    <option value="6">Crear promoción de temporada para un producto</option>
                </select>
            </div>
            <div class="form-group" v-if="promotionType == 2 || promotionType == 4 || promotionType == 6">
                <label for="product">Producto promocionado</label>
                <select class="form-control" id="product" v-model="promoRequest.productId">
                    <option value="">Selecciona un producto a promocionar</option>
                    <option v-for="product in availableProducts" :id="product.id" :value="product.id">{{product.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="expirationDate">Fecha de expiración</label>
                <input type="date" class="form-control" id="expirationDate" v-model="promoRequest.expirationDate">
            </div>
            <div class="form-group">
                <label for="discount">% de descuento</label>
                <input type="number" class="form-control" id="discount" min="1" max="100" placeholder="%" v-model="promoRequest.discount">
            </div>
            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea rows="5" id="description" class="form-control" placeholder="Descripción" v-model="promoRequest.description"></textarea>
            </div>
            <button class="btn btn-primary form-button" v-on:click="createPromotion">Crear promoción</button>
        </form>
    </div>
</template>
<script>
    import {
        httpService,
        getToken
    } from '@/services/ServiceContainer'
    export default {
        name: 'NewPromoCode',
        data() {
            return {
                promotionType: "0",
                availableProducts: [],
                promoRequest: {
                    productId: '',
                    expirationDate: '',
                    discount: 0,
                    description: ''
                }
            }
        },
        methods: {
            createPromotion: function() {
                if (this.promotionType == "1" || this.promotionType == "2") {
                    //open promo 
                    httpService.post(getToken(), 'admin/createOpenPromoCode', this.promoRequest)
                        .then(response => {
                            alert('Se ha creado exitosamente la promoción')
                            this.promoRequest = {
                                productId: '',
                                expirationDate: '',
                                discount: 0,
                                description: ''
                            }
                        }).catch(err => {
                            alert('Ningún campo debe de estar vacío, intenta de nuevo')
                        })
                } else if (this.promotionType == "3" || this.promotionType == "4") {
                    //promotion for all trainers
                    httpService.post(getToken(), 'admin/createTrainersPromoCode', this.promoRequest)
                        .then(response => {
                            alert('Se ha creado exitosamente la promoción')
                            this.promoRequest = {
                                productId: '',
                                expirationDate: '',
                                discount: 0,
                                description: ''
                            }
                        }).catch(err => {
                            alert('Ningún campo debe de estar vacío, intenta de nuevo')
                        })
                }
            }
        },
        components: {},
        mounted: function() {
            httpService.get(getToken(), 'admin/getProducts')
                .then(response => {
                    for (var i = 0; i < response.data.length; i++) {
                        this.availableProducts.push(response.data[i])
                    }
                }).catch(err => {
                    console.error('Could not get products', err)
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
