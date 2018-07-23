<template>
    <div class="container">
        <h3 class="center text-center mb-2">Crear nuevo código de descuento abierto</h3>
        <p class="text-center mb-4 center">Una vez creado el código de promoción, todos los usuarios recibirán un correo electrónico de notificación; puedes deshabilitar promociones desde esta <a href="">liga</a></p>
        <form class="center">
            <div class="form-group">
                <label for="expirationDate">Fecha de expiración</label>
                <input type="date" class="form-control" id="expirationDate">
            </div>
            <div class="form-group">
                <label for="discount">% de descuento</label>
                <input type="number" class="form-control" id="discount" min="1" max="100" placeholder="%">
            </div>
            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea rows="5" id="description" class="form-control" placeholder="Descripción"></textarea>
            </div>
            <button class="btn btn-primary form-button">Crear promoción</button>
        </form>
    </div>
</template>
<script>
     export default {
        name: 'NewPromoCode',
        data() {
            return {}
        },
        components: {}
    }
</script>
<style lang="scss" scoped>
    form{
        width: 70%;
    }
    .center{
        margin: 0 auto;
        width: 70%;
    }
    .form-button{
        width: 100%;
    }
</style>