<template>
  <section class="partner-trainers-section center">
      <h3 class="text-center">Entrenadores disponibles</h3>
      <form>
        <div class="form-group">
            <label for="name">Nombre</label>
            <input class="form-control" v-model="trainer.name" placeholder="Nombre" id="name">
        </div>
        <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input id="email" placeholder="Correo" class="form-control" v-model="trainer.email">
        </div>
          <div class="form-group">
            <label for="pass">Correo electrónico</label>
            <input type="password" id="pass" placeholder="Contraseña" class="form-control" v-model="trainer.password">
        </div>
          
          <button class="btn btn-primary" @click="createTrainer">Crear entrenador</button>
      </form>
  </section>
</template>
<script>
    import {
        httpService,
        getToken
    } from '@/services/ServiceContainer'
    export default {
        name: 'PartnerIndex',
        mounted: function() {
            window.document.title = "Shakepoint | Crear entrenador"
        },
        data() {
            return {
                trainer: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            createTrainer: function() {
                httpService.post(getToken(), 'partner/createTrainer', this.trainer)
                    .then(response => {
                        alert('Se ha registrado el entrenador')
                        this.trainer = {
                            name: '',
                            email: '',
                            password: ''
                        }
                    }).catch(err => {
                        console.error(err)
                    })
            }
        }
    }

</script>
<style lang="scss" scoped="true">
    .center {
        margin: 0 auto;
    }

    form {
        width: 70%;
    }

    .partner-trainers-section {
        padding: 1rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn {
        width: 100%;
    }

</style>
