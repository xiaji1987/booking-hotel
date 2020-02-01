<template>
  <div class="booking">
    <bookingHeader />
    main 主体
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
