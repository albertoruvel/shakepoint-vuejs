<template>
    <header class="navbar-fixed-top header" role="banner">
            <div class="container header-container">
                <router-link to="/">
                    <img src="../../assets/img/black_logo.svg" class="logo" width="150" height="40" alt="">
                </router-link>
                <!--<button type="button" class="menu-button" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
                    <i class="fa fa-bars" aria-hidden="true"></i></button>-->

                <!--<nav class="collapse" id="main-menu">
                    <ul>
                        <li>
                            <a href="sign-in.html">Inicio de sesión</a>
                        </li>
                    </ul>
                </nav>-->
            </div>
        </header>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style>
</style>
