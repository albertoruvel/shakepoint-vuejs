<template>
    <div class="admin-vending-section">
        <h3 class="text-center mb-3">Crear vending</h3><div class="alert alert-success alert-dismissible fade show mb-3" v-if="created" role="alert">
          <h4 class="alert-heading">Se ha creado la vending</h4>
          <p>Puedes asignarle productos desde <a href="">aquí</a></p>
        </div>
        <div class="alert alert-danger alert-dismissible fade show mb-3" v-if="error" role="alert">
          <h4 class="alert-heading">Ha ocurrido un error inesperado :(</h4>
          <p>Carga la página de nuevo y vuelve a intentarlo</p>
        </div>
        <form>
            <div class="form-group">
                <label>Nombre de la vending</label>
                <input type="text" class="form-control"  placeholder="Nombre" v-model="name">
            </div>
            <div class="form-group">
                <label>Descripción de la vending</label>
                <textarea type="text" class="form-control" rows="5" placeholder="Descripción" v-model="description"></textarea>
            </div>
            <div class="form-group">
                <label>Asigna la vending a un socio existente</label>
                <select class="form-control" v-model="partnerId">
                    <option value="" selected>Selecciona un socio</option>
                    <option v-bind:value="partner.id" v-for="partner in partners" v-model="partnerId">{{partner.name}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Ubicación de la vending (Latitud)</label>
                <input class="form-control" type="number" readonly placeholder="Arrastra el marcador hacia la ubicación de la vending" v-model="coords.lat">
            </div>
            <div class="form-group">
                <label>Ubicación de la vending (Longitud)</label>
                <input class="form-control" type="number" readonly placeholder="Arrastra el marcador hacia la ubicación de la vending" v-model="coords.lon">
            </div>
            <div style="width: 100%;height: 400px;" class="map-container" id="map"></div>
            <button class="btn btn-primary" v-on:click="createVending">Crear vending</button>
        </form>
    </div>
</template>
<script>
import {httpService, getToken} from '@/services/ServiceContainer'
var map = null;
export default {
  name: 'NewVending',
  mounted: function(){
      window.document.title = "Shakepoint | Crear vending"
      // get partners
      httpService.get(getToken(), 'admin/getPartners').then(response => {
          for (var i = 0; i < response.data.length; i ++){
              this.partners.push(response.data[i])
          }
      }).catch(error => {
          //if (error.response.status == 400) {
              // bad request
          //} else if (error.response.status == 500){
              // server error
          //}
          console.log(error)
      })
      //create map
      if (navigator.geolocation){
          // Use method getCurrentPosition to get coordinates
            navigator.geolocation.getCurrentPosition(position => {
                // Access them accordingly
                //this.lat =  position.coords.latitude
                //this.lon = position.coords.longitude
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map = new google.maps.Map(document.getElementById('map'), {
                    center: { lat: position.coords.latitude, lng: position.coords.longitude },
                    zoom: 8
                })
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: 'Arrastra el marcardor a la ubicación de la vending',
                    draggable: true
                })
                google.maps.event.addListener(marker, 'dragend', a => {
                    this.setCoords(a.latLng.lat, a.latLng.lng)
                })
            });
      }
  },
  data: function(){
      return {
          coords: {
            lat: 27.4828091,
            lon : -109.940881
          },
          partners: [],
          name: '',
          description: '',
          partnerId: '',
          created: false,
          error: false
      }
  },
  methods: {
    setCoords: function(lat, lon){
        this.coords = {
          lat: lat(),
          lon: lon()
        }
    },
    createVending: function(){
        httpService.post(getToken(), 'admin/createVending', {
            name: this.name,
            description: this.description,
            technicianId: this.partnerId,
            location: this.coords.lat + "," + this.coords.lon
        })
        .then(response => {
            this.created = true
        }).catch(error => {
            if (error.response.status == 500){
                this.error = true
            } else if (error.response.status == 400){
                this.error = true
            }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
    .admin-vending-section{
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }
    form {
        width: 50%;
        margin: 0 auto;
    }
    .alert{
        width: 50%;
        margin: 0 auto;
    }
    button{
        width: 100%;
    }
    .map-container{
        width: 100%;
        height: 400px;
        margin-bottom: 1.5rem;
    }
    @media(max-width: 776px){
        form{
            width: 80%;
        }
        .alert{
            width: 80%;
            margin: 0 auto;
        }
    }
</style>
