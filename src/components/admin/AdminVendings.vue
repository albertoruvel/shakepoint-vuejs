<template>
  <div class="admin-vending-section">
    <h3 class="mb-4 text-center">Vendings disponibles en <em class="shakepoint-title">Shakepoint</em></h3>
    <NewEntityContainer message="Necesitas crear una vending?" buttonMessage="Crear vending" buttonPath="createVending"></NewEntityContainer>
        <table class="table table-hover table-striped" v-if="vendings.length > 0">
            <thead>
                <tr>
                    <th class="d-none d-md-block d-lg-block" scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Socio</th>
                    <th scope="col">Puerto</th>
                    <th scope="col">Ver</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vending in vendings">
                    <td class="d-none d-md-block d-lg-block">{{vending.id}}</td>
                    <td>{{vending.name}}</td>
                    <td>{{vending.partnerName}}</td>
                    <td>{{vending.workingPort}}</td>
                    <td><router-link :to="{ path: '/admin/vending', query: {id: vending.id} }">Productos</router-link></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>
<script>
import NewEntityContainer from '@/components/shared/NewEntityContainer'
import {httpService, getToken} from '@/services/ServiceContainer'
export default {
  name: 'AdminVendings',
  mounted: function(){
      window.document.title = "Shakepoint | Vendings"
      //get vendings
      httpService.get(getToken(), 'admin/getVendings')
      .then(response => {
          for (var i = 0; i < response.data.length; i ++){
              this.vendings.push(response.data[i])
          }
      }).catch(error => {
          console.log(error)
      })
  },
  components: {
      NewEntityContainer
  },
  data: function(){
      return {
          vendings: []
      }
  }
}
</script>
<style lang="scss" scoped>
    .admin-vending-section{
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    table{
        width: 60% !important;
        margin: 0 auto;
    }
    .shakepoint-title{
        color: #F47621;
    }
    @media(max-width: 792px){
      table{
        width: 90% !important;
      }
    }
</style>
