<template>
  <div class="booking">
    <bookingHeader />
    <router-view />
    <bookingFooter />
  </div>
</template>

<script>
import bookingHeader from '../components/bookingHeader/bookingHeader'
import bookingFooter from '../components/bookingFooter/bookingFooter'
export default {
  name: 'booking',
  components: {
    bookingHeader,
    bookingFooter
  }
}
</script>

<style>

</style>
