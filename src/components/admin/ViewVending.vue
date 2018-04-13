<template>
  <div class="container">
    <div class="row">
      <h4>Detalles para la vending {{vending.vendingName}}</h4>
    </div>
  </div>
</template>
<script>
import {httpService, getToken} from '@/services/ServiceContainer'
export default{
  name: 'ViewVending',
  mounted: function(){
    window.document.title = 'Shakepoint | Detalles de vending'
    this.vendingId = this.$route.query.id
    httpService.get(getToken(), 'admin/getVendingProducts?machineId=' + this.vendingId)
    .then(response => {
      this.vending = response.data
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  },
  data: function(){
    return {
      vendingId: '',
      vending: {
        name: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
