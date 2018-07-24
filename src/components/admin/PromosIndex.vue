<template>
    <section class="admin-promos-section center">
      <div class="row">
        <div class="container">
            <ul class="nav nav-tabs center" role="tablist">
                <li class="active" role="presentation"><a href="#activePromos" role="tab" data-toggle="tab">Promociones activas</a></li>
                <li class="" role="presentation"><a href="#newPromo" role="tab" data-toggle="tab">Crear promoción</a></li>
            </ul>
            
            <div class="tab-content">
                <div class="tab-pane active" role="tabpanel" id="activePromos">
                    <ActivePromos></ActivePromos>
                </div>
                <div class="tab-pane" role="tabpanel" id="newPromo">
                    <NewPromoCode></NewPromoCode>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
    import NewPromoCode from '@/components/admin/NewPromoCode'
    import ActivePromos from '@/components/admin/ActivePromos'
    import NewTrainerPromo from '@/components/admin/NewTrainerPromo'
    export default {
        name: 'PromoCodesIndex',
        data() {
            return {}
        },
        components: {
            NewPromoCode,
            ActivePromos,
            NewTrainerPromo
        }
    }

</script>

<style>
    .admin-promos-section {
        padding: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .center {
        margin: 0 auto;

    }

    .nav-tabs {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .nav-tabs>li {
        margin: 1rem;
    }

    .tab-pane {
        padding: 1rem;
    }

    .row {
        width: 100%;
    }

    @media(max-width: 990px) {
        .nav-tabs {
            width: 90%;
        }
    }

    @media(max-width: 770px) {
        .nav-tabs {
            width: 100%;
        }
    }

    @media(max-width: 430px) {
        .nav-tabs {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }

</style>
