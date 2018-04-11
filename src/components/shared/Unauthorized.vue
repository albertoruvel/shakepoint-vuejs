<template>
    <section class="unauthorized-section">
        <NavBar securityRole="ANONYMOUS"></NavBar>
        <div>
            <div class="container">
                <div class="row">
                    <div class="unauthorized-container">
                        <div class="alert alert-info" role="alert">
                          <h4 class="alert-heading">OOOPS!</h4>
                          <p>Parece que no tienes acceso al contenido del sitio. <router-link to="/">Regresar a página de inicio</router-link>
                          </p>
                          <hr>
                          <p class="mb-0">Si eres un usuario Shakepoint, puedes descargar la aplicación móvil desde <a href="https://play.google.com/store/apps/details?id=com.shakepoint.mobile" target="_blank">Play Store</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NavBar from '@/components/shared/NavBar'
export default{
  name: 'Unauthorized',
  components: {
    NavBar
  }
}
</script>
<style lang='scss'>
    .unauthorized-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        margin: 0 auto;
    }
    .alert {
        width: 80%;
        margin: 0 auto;
    }
    @media(max-width: 890px){
        html {
            font-size: .8rem;
        }
        .alert {
            width: 100%;
        }
    }
</style>
