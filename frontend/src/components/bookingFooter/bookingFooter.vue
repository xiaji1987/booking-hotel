<template>
  <div class="B_bookingFooter">
    <bookingContainer />
    <bookingMyHotel />
  </div>
</template>

<script>
import bookingContainer from '@/components/bookingFooter/bookingContainer.vue'
import bookingMyHotel from '@/components/bookingFooter/bookingMyHotel'
export default {
  name: 'bookingFooter',
  components: {
    bookingContainer,
    bookingMyHotel
  }
}
</script>

<style>

</style>
