<template>
  <div class="container">
    <div class="row text-center">
      <div class="products-container">
        <h3>Detalles para la vending <em>{{vending.vendingName}}</em></h3>
        <p class="mb-4">Relaciona los productos disponibles en la tienda a la vending, recuerda asignarle el número del slot en el que va situado</p>
        <div class="tables-container">
          <div class="table-container col-lg-6 col-md-12 col-sm-12" >
            <h5>Productos disponibles en <em>Shakepoint</em></h5>
            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Slot</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products">
                  <td>{{product.name}}</td>
                  <td>
                    <form>
                      <input type="number" max="6" min="0" class="form-control" placeholder="Slot" v-model="product.slot">
                    </form>
                  </td>
                  <td><button class="btn btn-info btn-sm" v-on:click="addProduct(product)">Agregar</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-container col-lg-6 col-md-12 col-sm-12">
            <h5>Productos registrados en la vending</h5>
            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Slot</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="vending.products" v-for="product in vending.products">
                  <td>{{product.name}}</td>
                  <td>{{product.slot}}</td>
                  <td><button class="btn btn-primary btn-sm" v-on:click="removeProduct(product)">Eliminar</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {httpService, getToken} from '@/services/ServiceContainer'
export default{
  name: 'ViewVending',
  methods: {
    addProduct(product){

    },
    removeProduct(product){

    }
  },
  mounted: function(){
    window.document.title = 'Shakepoint | Detalles de vending'
    this.vendingId = this.$route.query.id
    httpService.get(getToken(), 'admin/getProducts')
    .then(response => {
      for (var i = 0; i < response.data.length; i ++) {
        this.products.push({
          id: response.data[i].id,
          name: response.data[i].name,
          logoUrl: response.data[i].logoUrl,
          slot: 0
        })
      }
    }).catch(error => {

    })
    httpService.get(getToken(), 'admin/getVendingProducts?machineId=' + this.vendingId)
    .then(response => {
      this.vending = response.data
    }).catch(error => {
      console.log(error)
    })
  },
  data: function(){
    return {
      vendingId: '',
      vending: {
        name: ''
      },
      products: []
    }
  }
}
</script>
<style lang="scss" scoped>
$accent: #F47621;
.products-container{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}
em{
  color: $accent;
}
.table-container{
  flex-direction: column;
  display: flex;
  margin-bottom: 2rem;
}
.table-container > h5{
  margin-bottom: 2rem;
}
.tables-container{
  display: flex;
  flex-direction: column;
}
.btn-info{
  background-color: transparent !important;
}
@media(min-width: 964px){
  .tables-container{
      display: flex;
      flex-direction: row;
      justify-content: center;

  }
}
</style>
