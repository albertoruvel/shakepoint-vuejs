<template>
  <div class="new-partner-section">
      <h3 class="mb-3 text-center">Crear nuevo socio</h3>
      <div class="alert alert-success alert-dismissible fade show mb-3" v-if="created" role="alert">
                            <h4 class="alert-heading">Se ha creado el nuevo socio</h4>
                          <p>Puedes asignarle vendings desde <a href="">aquí</a></p>
                        </div>
                        <div class="alert alert-danger alert-dismissible fade show mb-3" v-if="error" role="alert">
                            <h4 class="alert-heading">Ha ocurrido un error inesperado :(</h4>
                          <p>Carga la página de nuevo y vuelve a intentarlo</p>
                        </div>
      <form>
          <div class="form-group">
              <label>Nombre del nuevo socio</label>
              <input class="form-control" type="text" placeholder="Nombre" v-model="name">
          </div>
          <div class="form-group">
              <label>Correo electrónico del nuevo socio</label>
              <input class="form-control" type="email" placeholder="Correo electrónico" v-model="email">
          </div>
          <div class="form-group">
              <label>Contraseña</label>
              <input class="form-control" type="password" placeholder="Contraseña" v-model="password">
          </div>
          <button class="btn btn-primary submit-button" v-on:click="createPartner">Crear socio</button>
      </form>
  </div>
</template>
<script>
import {httpService, getToken} from '@/services/ServiceContainer'
export default {
  name: 'NewPartner',
  methods: {
      createPartner: function(){
          httpService.post(getToken(), 'admin/createPartner', {
              'name': this.name,
              'email': this.email,
              'password': this.password
          }).then(response => {
              this.created = true
              this.error = false
              this.badRequest = false
          }).catch(error => {
              if (error.response.status == 400){
                  this.badRequest = true
              }else if (error.response.status == 500){
                  this.error = true
              }
          })
      }
  },
  data: function(){
      return {
          name: '',
          email: '',
          password: '',
          created: false,
          error: false,
          badRequest: false
      }
  },
  mounted: function(){
      window.document.title = "Shakepoint | Crear socio"
  }
}
</script>
<style lang="scss" scoped>
    .new-partner-section{
        padding: 1rem;
    }
    form{
        width: 50%;
        margin: 0 auto;
    }
    .alert{
        width: 50%;
        margin: 0 auto;
    }
    .submit-button{
        width: 100%;
    }
    @media(max-width: 890px){
        form{
            width: 90%;
        }
        .alert{
            width: 90%;
        }
    }
</style>
