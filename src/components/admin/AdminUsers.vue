<template>
  <div class="partners-section text-center">
      <h3 class="mb-3">Socios existentes en <em>Shakepoint</em></h3>
      <div class="alert alert-success alert-dismissible fade show" v-if  ="created" role="alert">
          <h4 class="alert-heading">Se ha creado el socio</h4>
          <p><router-link to="partners">Regresar a productos</router-link></p>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-if="badRequest" role="alert">
          <h4 class="alert-heading">Error en la petición</h4>
          <p>Revisa la información del socio e inténtalo de nuevo, todos los campos son obligatorios</p>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-if="error" role="alert">
          <h4 class="alert-heading">Ha ocurrido un error inesperado, intéantalo de nuevo</h4>
          <p>Ocurrio un error al realizar la petición, intentalo de nuevo y/o refresca la página</p>
      </div>
      <NewEntityContainer message="Necesitas crear un socio?" buttonMessage="Crear socio" buttonPath="createPartner"></NewEntityContainer>
      <table class="table table-striped table-hover" v-if="partners.length > 0">
          <thead>
              <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col" class="d-none d-md-block d-lg-block">Correo</th>
                  <th scope="col">Activo</th>
                  <th scope="col">Información</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="partner in partners">
                  <td>{{partner.name}}</td>
                  <td  class="d-none d-md-block d-lg-block">{{partner.email}}</td>
                  <td><input readonly type="checkbox" v-model="partner.active" disabled></td>
                  <td><router-link to="">Más</router-link></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script>
import NewEntityContainer from '@/components/shared/NewEntityContainer'
import NavBar from '@/components/shared/NavBar'
import {httpService, getToken} from '@/services/ServiceContainer'
export default {
  name: 'AdminUsers',
  components: {
    NavBar,
    NewEntityContainer
  },
  data: function(){
      return {
          created: false,
          error: false,
          badRequest: false,
          partners: []
      }
  },
  mounted: function(){
      window.document.title = "Shakepoint | Socios"
      //get partners
      httpService.get(getToken(), 'admin/getPartners')
      .then(response => {
          for (var i = 0; i < response.data.length; i ++){
              this.partners.push(response.data[i])
          }
      }).catch(error => {
          console.log(error)
      })
  }
}
</script>
<style lang="scss" scoped>
    $accent: #F47621;
    .partners-section{
        padding: 1rem;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }
    em{
        color: $accent;
    }
    table{
        width: 60%;
        margin: 0 auto;
    }

    @media(max-width: 792px){
      table{
        width: 90% !important;
      }
    }
</style>
