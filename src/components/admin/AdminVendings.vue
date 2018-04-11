<template>
  <div class="admin-vending-section">
    <h3 class="mb-4 text-center">Vendings disponibles en <em class="shakepoint-title">Shakepoint</em></h3>
    <NewEntityContainer message="Necesitas crear una vending?" buttonMessage="Crear vending" buttonPath="createVending"></NewEntityContainer>
        <table class="table table-hover table-striped" v-if="vendings.length > 0">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Socio</th>
                    <th scope="col">Puerto de conexión</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vending in vendings">
                    <td>{{vending.name}}</td>
                    <td>{{vending.partnerName}}</td>
                    <td>{{vending.workingPort}}</td>
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
<style lang="scss">
    .admin-vending-section{
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    table{
        width: 50% !important;
        margin: 0 auto;
    }
    .shakepoint-title{
        color: #F47621;
    }
</style>
