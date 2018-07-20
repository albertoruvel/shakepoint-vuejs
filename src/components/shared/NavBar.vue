<template>
    <header class="navbar-fixed-top header" role="banner">
            <div class="container header-container">
                <div class="header-main-container">
                    <router-link to="/">
                        <img src="../../assets/img/black_logo.svg" class="logo" width="150" height="40" alt="">
                    </router-link>
                    <button v-if="securityRole !== 'ANONYMOUS'" type="button" class="menu-button" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
                        <i class="fa fa-bars" aria-hidden="true"></i></button>
                </div>

                <nav v-if="securityRole !== 'ANONYMOUS'" class="collapse" id="main-menu">
                    <ul v-if="securityRole == 'ADMIN'">
                      <li>
                            <router-link to="/admin/products" v-bind:class="{active: productsActive}">Productos</router-link>
                        </li>
                       <li>
                            <router-link to="/admin/partners" v-bind:class="{active: usersActive}">Socios</router-link>
                        </li>
                        <li>
                            <router-link to="/admin/vendings" v-bind:class="{active: vendingsActive}">Vendings</router-link>
                        </li>
                        <li>
                            <router-link to="">Salir</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
</template>
<script>
export default {
  name: 'NavBar',
  props: ['securityRole', 'activeTab'],
  data: function(){
      return {
          productsActive: false,
          vendingsActive: false,
          usersActive: false
      }
  },
  mounted: function(){
      if (this.activeTab === 'PRODUCTS'){
          this.productsActive = true
      } else if (this.activeTab === 'VENDINGS'){
          this.vendingsActive = true
      } else if (this.activeTab === 'USERS'){
          this.usersActive = true
      }
  }
}
</script>
<style lang="scss" scoped>
$primary: #000;
$accent: #F47621;
    .active{
        color: $accent;
        border-bottom: 1px solid $accent;
    }
.header-container {
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
}
    .header-main-container{
        width:100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
.header-main-container > a {
    display: flex;
    align-items: center;
}
    #main-menu > ul {
    padding: 0;
    list-style: none;
    margin: 1rem 0 0 0;
}
#main-menu > ul > li > a {
    display: block;
    color: white;
    padding: .8rem 0;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
}
#main-menu > ul > li > a:hover {
    color: $accent;
}
#navbar-menu > li {
    padding: .4rem;
}
#main-menu {
    background: black;
    flex: 1 1 100%;
}
    .header {
    background-color: $primary !important;
    color: white;
    padding: .5rem 0;
}
    .menu-button {
    text-align: end;
    border: 0;
    font-size: 2rem;
    margin: 0;
    padding: 0 .5rem;
    background: transparent;
    color: #fff;
}
    @media(min-width: 768px) {
    #main-menu {
        height: auto !important;
        display: flex;
        justify-content: flex-end;
        flex: 1 1 auto;
        margin-left: auto;
    }
    #main-menu > ul {
        align-items: center;
        display: flex;
        margin: 0 0 0 0;
        justify-content: flex-end;
    }
    #main-menu > ul > li > a {
        padding: .8rem;
        text-transform: capitalize;
        margin: 0 .3rem;
        border-top: 0px;
        transition: all .5s ease;
    }
    #main-menu > ul > li > a:hover {
      color: $accent;
        //border-bottom: 4px solid $accent;
    }
    .menu-button {
        display: none;
    }
}
@media(max-width: 768px) {
    .header-container {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: nowrap;
}
}
</style>
