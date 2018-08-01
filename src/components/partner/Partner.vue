<template>
  <section class="partner-main-section">
      <NavBar securityRole="PARTNER" activeTab="NONE" indexPath="/partner/"></NavBar>
      <router-view/>
  </section>
</template>
<script>
    import NavBar from '@/components/shared/NavBar'
    export default {
        name: 'Partner',
        components: {
            NavBar
        }
    }

</script>
<style lang="scss"></style>
