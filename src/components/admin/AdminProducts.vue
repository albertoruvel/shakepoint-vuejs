<template>
  <div class="admin-products-section">
    <h3 class="mb-4 text-center">Productos disponibles en <em class="shakepoint-titile">Shakepoint</em></h3>
    <NewEntityContainer message="Necesitas crear un producto?" buttonMessage="Crear producto" buttonPath="createProduct"></NewEntityContainer>

    <table class="table mb-4 table-hover table-striped" v-if="products.length > 0">
        <thead class="">
            <tr>
                <th scope="col" class="hide-md">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products">
                <td class="hide-md"><div><img v-bind:src="product.logoUrl" width="100" height="100"></div></td>
                <td><div><p>{{product.name}}</p></div></td>
                <td><div><p>${{product.price}} MXN</p></div></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import NavBar from '@/components/shared/NavBar'
import NewEntityContainer from '@/components/shared/NewEntityContainer'
import {httpService, getToken} from '@/services/ServiceContainer'
export default {
  name: 'AdminProducts',
  components: {
    NavBar,
    NewEntityContainer
  },
  data: function () {
    return {
      products: []
    }
  },
  mounted: function () {
    window.document.title = "Shakepoint | Productos"
    httpService.get(getToken(), 'admin/getProducts')
      .then(response => {
        for (var i = 0; i < response.data.length; i ++) {
          this.products.push(response.data[i])
        }
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>
<style lang="scss" scoped>
    .admin-products-section {
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .shakepoint-titile {
        color: #F47621;
    }
    .new-product-container{
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    .new-product-container > p{
        font-size: 1.25rem;
    }
    table{
        width: 60%;
        margin: 0 auto;
    }
    td > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    td > div > p{
        margin: 0;
    }
    @media(min-width: 776px){
        table {
            font-size:1.15rem;
            width: 70% !important;
        }
        .new-product-container{
            flex-direction: row;
            align-items: center;
        }
        .new-product-container > p{
            margin-right: 2rem;
            margin-bottom: 0;
        }
    }
    @media(max-width: 576px){
        .hide-md {
            display: none !important;
        }
        table{
            width: 90% !important;
        }
    }
</style>
