<template>
    <section class="create-trainer-section center">
        <h4 class="text-center mb-3">Entrenadores disponibles para el socio</h4>
        
        <h5 v-if="trainers.length == 0" class="text-center">No hay entrenadores disponibles, registra uno desde <router-link to="createTrainer">aquí</router-link></h5>
        
        <table v-if="trainers.length > 0" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo electrónico</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="trainer in trainers">
                    <td>{{trainer.name}}</td>
                    <td>{{trainer.email}}</td>
                    <td><button class="btn btn-warning btn-sm">Dar de baja</button></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
    import {
        httpService,
        getToken
    } from '@/services/ServiceContainer'
    export default {
        name: 'Trainers',
        mounted: function() {
            window.document.title = "Shakepoint | Entrenadores"
            httpService.get(getToken(), 'partner/trainers')
                .then(response => {
                    for (var i = 0; i < response.data.length; i++) {
                        this.trainers.push(response.data[i])
                    }
                }).catch(err => {

                })
        },
        data() {
            return {
                trainers: []
            }
        },
        methods: {

        }
    }

</script>
<style lang="scss">
    .create-trainer-section {
        padding: 1rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .center {
        margin: 0 auto;
    }

</style>
