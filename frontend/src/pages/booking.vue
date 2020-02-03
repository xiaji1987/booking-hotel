<template>
  <div class="booking">
    <bookingHeader />
    <router-view />
  </div>
</template>

<script>
import bookingHeader from '../components/bookingHeader/bookingHeader'
export default {
  name: 'booking',
  components: {
    bookingHeader
  }
}
</script>

<style>

</style>
