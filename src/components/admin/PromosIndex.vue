<template>
    <section class="admin-promos-section center">
      <div class="row">
        <div class="container">
            <ul class="nav nav-tabs" role="tablist">
                <li class="active" role="presentation"><a href="#newPromo" role="tab" data-toggle="tab">Crear promoción</a></li>
                <li class="active" role="presentation"><a href="#promos" role="tab" data-toggle="tab">Promociones</a></li>
            </ul>
            
            <div class="tab-content">
                <div class="tab-pane active" role="tabpanel" id="newPromo">
                    <NewPromoCode></NewPromoCode>
                </div>
                <div class="tab-pane" role="tabpanel" id="promos">Promos</div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
    import NewPromoCode from '@/components/admin/NewPromoCode'
    export default {
        name: 'PromoCodesIndex',
        data() {
            return {}
        },
        components: {
            NewPromoCode
        }
    }

</script>

<style>
    .admin-promos-section {
        padding: 1rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .center {
        margin: 0 auto;
        width: 100%;

    }
    .nav-tabs > li{
        margin: 1rem;
    }
    .tab-pane{
        padding: 1rem;
    }
    .row{
        width: 100%;
    }

</style>
