<template>
    <div>
        <section id="welcome-banner-section" class="welcome-banner-section">
            <NavBar securityRole="ANONYMOUS"></NavBar>
        <div class="header-text">
            <div class="container main-message-container text-center">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 main-message-column">
                    <img class="my-2" src="../assets/img/icon.png" width="150" height="150">
                    <h5 class="main-message-title">Bienvenido a <em>SHAKEPOINT</em></h5>
                    <h4 class="main-message-title">Te interesan nuestras vendings?</h4>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 main-message-column mb-3">
                    <h5 class="main-message-title my-3">Ya cuentas con una vending?</h5>
                    <router-link to="/signin" class="btn btn-primary btn-lg sign-in-button">Iniciar sesión</router-link>
                    <!--<a href="signin" class="btn btn-primary btn-lg sign-in-button">Iniciar sesión</a>-->
                </div>
                </div>
            </div>
        </div>
        <div class="down-arrow">
            <a href="#vending-machine-info-section">
                <i class="arrow-icon fa fa-angle-down"></i>
            </a>
        </div>

    </section>
    <section id="vending-machine-info-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xl-6 col-sm-12 col-xs-12 image-container">
                    <img src="../assets/img/icon_with_settings.svg" width="0" height="0" class="vending-info-icon">
                </div>
                <div class="col-md-6 col-xl-6 col-xs-12 col-sm-12 px-2 my-4">
                    <h3 class="how-it-works-title">Cómo funciona?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus. Auctor bibendum duis ante cum nisl suscipit ultrices facilisi et montes, quisque mollis mattis pharetra massa class congue leo litora arcu, platea taciti nunc pellentesque lectus velit dictumst id sociis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="steps-to-buy-section">
        <div class="container">
            <h2 class="steps-to-buy-title">Pasos para comprar</h2>
            <div class="row">
                <ul class="col-sm-12 col-md-12 col-xl-4 col-lg-4 p-3 steps-list">
                    <li><p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p></li>
                </ul>
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-none d-lg-block d-xl-block text-center">
                    <img src="../assets/img/vending-machine.svg" width="200" height="200" class="vending-machine-icon">
                </div>
                <ul class="col-sm-12 col-md-12 col-xl-4 col-lg-4 p-3 steps-list">
                    <li><p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p></li>
                </ul>
            </div>
        </div>
    </section>
    <section id="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 contact-column">
                    <h3 class="mb-5">Deseas ponerte en contacto con nosotros?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, primis mi nibh vehicula nulla porttitor himenaeos, cursus mattis blandit vitae tortor nullam lectus.</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <form class="form contact-form">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input class="form-control" type="text" placeholder="Tu nombre" id="name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input class="form-control" type="email" placeholder="Tu correo electronico" id="email">
                        </div>
                        <div class="form-group">
                            <label for="message">Mensaje</label>
                                <textarea class="form-control" type="text" placeholder="Mensaje" id="message" rows="5"></textarea>
                        </div>
                        <button class="btn btn-info btn-lg" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import NavBar from './shared/NavBar'
export default {
  name: 'Welcome',
  components: {
    NavBar
  }
}
</script>
<style lang="scss" scoped>
    $accent: #F47621;
.sign-in-button{
    width: 80%;
    margin: 0 auto;
}
footer{
    background-color: black;
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
footer > h4{
    padding: 2rem;
    margin: 0;
    text-align: center;
}
footer > .social-media-footer > li > a{
    text-decoration: none;
    color: white;
}
.social-media-footer > li{
    padding: 1rem;
    margin: 1rem;
}
.social-media-footer{
    list-style: none;
    align-self: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}
footer > .social-media-footer > li > a:hover{
    color: $accent;
}
//----------------------------------------NAVBAR SECTION----------------------------
.welcome-banner-section {
    background: url("../assets/img/home-section-background.svg") no-repeat center top;
    //background-color: black;
    background-size: cover;
    background-attachment: fixed !important;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header-text > .main-message-container {
    display: flex !important;
    align-items: center;
    flex-direction: column;
}
.main-message-container > .row{
    width: 100%;
}
.main-message-title{
    font-size: 1.3rem;
}
.main-message-column{
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

em{
    color: $accent;
}
.down-arrow {
    margin-top: 0rem;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-content: center;
}
.down-arrow > a {
    display: inline-block;
    color: #fff;
    font-size: 4rem;
    animation: animated-arrow 2s ease-in-out infinite;
}
.arrow-icon {
    margin-bottom: 3rem;
    color: white;
}

//------------------------ vending machine info ------------------
#vending-machine-info-section{
    padding: 1rem;
    color:white;
    background-color: $accent;
}
.image-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.vending-info-icon{
    width: 60%;
    height: auto;
}
.how-it-works-title{
    text-align: center;
}
.vending-machine-icon{
    width: 80%;
    height: auto;
}
//---------------------------steps to buy----------------------------
#steps-to-buy-section{
    padding: 1rem;
    color:black;
    //background: url("../assets/img/vending.png")no-repeat center top;
    background-color: white;
}
.steps-list > li > p {
    font-size: 1rem;
}
.steps-list{
    list-style: none;
}
.steps-to-buy-title{
    text-align: center;
    color: $accent;
}

//--------------------------contact section----------------------------
.contact-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#contact-section{
    background-color: $accent;
    color: white;
    padding: 2rem;
}
.contact-form{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.contact-column > h3{
    width: 70%;
    text-align: center;
    margin: 0 auto;
}
//---------------------------MEDIA QUERY---------------------------------
//media query for large screens
@media(min-width: 768px) {
    .main-message-title{
        font-size: 2.1rem;
    }
    .social-media-footer{
        width: 50%;
    }
}
//media queries for medium screens
@media(max-width: 768px){
    .contact-form{
        width: 100%;
    }
    .main-message-column{
        padding: .5rem;
    }
    .main-message-column > img{
        width: 80px;
        height: 80px;
    }
    .vending-info-icon{
        width: 230px;
        height: 230px;
    }
}
//-----------------------------ANIMATIONS-------------------------------
@keyframes animated-arrow {
    from {
        transform: translateY(0);
    }
    50% {
        transform: translateY(6px);
    }
    to {
        transform: translateY(0);
    }
}
.btn-primary {
    color: white;
    background-color: $accent;
    border-color: transparent;
}
.btn-primary:hover{
    border-color: transparent;
    background-color: $accent;
}
.btn-primary:focus:active{
    box-shadow: 0 0 0 0.2rem $accent;
    border-color: transparent !important;
    background-color: $accent !important;
}
.btn-primary:focus{
    box-shadow: 0 0 0 0.2rem $accent;
    border-color: transparent !important;
    background-color: $accent !important;
}
.btn-primary:active{
    box-shadow: 0 0 0 0.2rem $accent;
    border-color: transparent !important;
    background-color: $accent !important;
}
.btn-primary:active:hover {
    box-shadow: 0 0 0 0.2rem $accent;
    border-color: transparent !important;
    background-color: $accent !important;
}
    .btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info:active:hover {
    box-shadow: 0 0 0 0.2rem transparent;
    color:$accent;
    border-color: transparent !important;
    background-color: white !important;
}

.btn-info{
    color: $accent;
    background-color: white;
    border-color: transparent;
}
</style>
