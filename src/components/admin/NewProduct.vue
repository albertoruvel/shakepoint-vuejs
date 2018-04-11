<template>
  <div class="admin-new-product-section">
      <h3 class="text-center mb-3">Crear producto</h3>
      <div class="alert alert-success alert-dismissible fade show" v-if  ="created" role="alert">
          <h4 class="alert-heading">Se ha creado el producto</h4>
          <p><router-link to="products">Regresar a productos</router-link></p>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-if="badRequest" role="alert">
          <h4 class="alert-heading">Error en la petición</h4>
          <p>Revisa la información del producto e inténtalo de nuevo, todos los campos son obligatorios</p>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-if="error" role="alert">
          <h4 class="alert-heading">Ha ocurrido un error inesperado, intéantalo de nuevo</h4>
          <p>Ocurrio un error al realizar la petición, intentalo de nuevo y/o refresca la página</p>
      </div>
      <form>
          <div class="form-group">
              <label for="product-name">Nombre del producto</label>
              <input id="product-name" type="text" class="form-control" placeholder="Nombre para el nuevo producto" v-model="name">
          </div>
          <div class="form-group">
              <label for="product-price">Precio del producto</label>
              <input id="product-price" type="number" class="form-control" placeholder="Precio" v-model="price" min="1">
          </div>
          <div class="form-group">
              <label for="product-engine">Tiempo el motor se mantiene encendido para la bebida</label>
              <input id="product-engine" min="10" type="number" class="form-control" placeholder="Milisegundos" v-model="engineUseTime">
          </div>
          <div class="form-group">
              <label for="product-type">Selecciona el tipo de producto</label>
              <select id="product-type" class="form-control" v-model="productType">
                  <option selected>Selecciona una opción</option>
                  <option>Proteína</option>
                  <option>Pre-Entreno</option>
                  <option>Aminoácido</option>
              </select>
          </div>
          <div class="form-group">
              <label for="product-desc">Descripción detallada del producto</label>
              <textarea id="product-desc" type="text" class="form-control" rows="8" placeholder="Descripción" v-model="description"></textarea>
          </div>
          <div class="form-group mb-4">
              <label for="product-img">URL para la imagen del producto</label>
              <input id="product-img" type="url" class="form-control" placeholder="URL" v-model="logoUrl">
          </div>
          <div class="form-group mb-4">
              <label for="product-nutritional" class="file-label btn btn-info">Click para subir imágen de información nutrimental del producto</label>
              <input id="product-nutritional" type="file" class="form-control form-control-file" @change="processFile($event)">
          </div>
          <button class="btn btn-primary" type="button" @click="createProduct">Guardar producto</button>
      </form>
  </div>
</template>
<script>
    import {httpService, getToken} from '@/services/ServiceContainer'
export default {
  name: 'NewProduct',
  mounted: function(){
      window.document.title = "Shakepoint | Crear producto"
  },
  data: function () {
      return {
          name: '',
          price: '0',
          engineUseTime: '0',
          productType: '',
          description: '',
          logoUrl: '',
          file: null,
          created: false,
          error: false,
          badRequest: false
      }
  },
  methods: {
      processFile: function(event){
          this.file = event.target.files[0]
      },
      createProduct: function(){
          let formData = new FormData()
          formData.append('name', this.name)
          formData.append('price', this.price)
          formData.append('file', this.file)
          formData.append('description', this.description)
          formData.append('logoUrl', this.logoUrl)
          formData.append('productType', this.productType)
          formData.append('engineUseTime', this.engineUseTime)
          httpService.multipartFormData(getToken(), 'admin/createProduct', formData)
          .then(response => {
              this.created = true;
          }).catch(err => {
              console.log(err.response.status)
              if (err.response.status == 400) {
                  // bad request
                  this.badRequest = true;
                  this.error = false;
              } else if (err.response.status == 500) {
                  //internal server error
                  this.badRequest = false;
                  this.error = true;
              }
          })
          console.log('Will create new product')
      }
  }
}
</script>
<style lang="scss">
    form{
        width: 50%;
        margin: 0 auto;
    }
    .admin-new-product-section{
        padding: 1rem;
    }
    .form-control-file{
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .form-control-file:focus{
        outline: 1px dotted black;
    }
    .form-group > label{
        white-space: pre-wrap;
    }
    .file-label{
        width:100%;
        cursor: pointer;
    }
    button{
        width: 100%;
    }
    @media(max-width: 796px){
        form{
            width: 90%;
        }
    }
</style>
