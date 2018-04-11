<template>
  <section class="admin-main-section">
      <NavBar securityRole="ADMIN" activeTab="NONE"></NavBar>
      <router-view/>
  </section>
</template>
<script>
import NavBar from '@/components/shared/NavBar'
export default {
  name: 'Admin',
  components: {
    NavBar
  }
}
</script>
<style lang="scss"></style>
