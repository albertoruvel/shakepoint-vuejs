<template>
    <section class="sign-in-section">
        <NavBar></NavBar>
        <div>
            <div class="container">
                <div class="row">
                    <div class="sign-in-container">
                       <div class="alert alert-danger alert-dismissible fade show" v-if="invalidCredentialsError == true" role="alert">
                            <h4 class="alert-heading">Credenciales son invalidas</h4>
                          <p>Tu correo o contraseña son incorrectos, vuelve a intentarlo</p>
                        </div>
                        <div class="alert alert-danger alert-dismissible fade show" v-if="error == true" role="alert">
                            <h4 class="alert-heading">Ha ocurrido un error inesperado :(</h4>
                          <p>Carga la página de nuevo y vuelve a intentarlo</p>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="emailAddress">Correo electrónico</label>
                                <input id="emailAddress" type="email" class="form-control" v-model="emailAddress">
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input id="password" type="password" class="form-control" v-model="password">
                            </div>
                            <button class="btn btn-primary btn-lg" v-on:click="signIn">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import router from '../router'
import NavBar from './shared/NavBar'
import {authService, httpService} from '@/services/ServiceContainer'

export default {
  name: 'SignIn',
  created: function () {
    window.document.title = 'Shakepoint | Inicio de sesión'
  },
  components: {
    NavBar
  },
  data: function () {
    return {
      emailAddress: '',
      password: '',
      error: false,
      invalidCredentialsError: false
    }
  },
  methods: {
    signIn: function () {
      httpService.post(authService.getToken(), 'security/signIn', {
        email: this.emailAddress,
        password: this.password
      }).then(response => {
        if (response.data.success) {
          // save token
          console.log(this.authService)
          this.authService.saveToken(response.data.authenticationToken)
          router.push('/admin')
        } else {
          this.invalidCredentialsError = true
        }
      }).catch(err => {
        this.error = true
        this.invalidCredentialsError = false
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">
    .alert{
        width: 50%;
        margin: 0rem auto;
    }
    .sign-in-container{
        width: 100%;
        padding: 3rem;
    }
    form{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        margin-top: 2rem;
    }
    @media(max-width: 962px){
        form{
            width: 90%;
            margin: 0 auto;
        }
        .alert{
            width: 90%;
            margin: 0 auto;
        }
    }
</style>
