<template>
  <div class="B_booking_rentCar">
    <bookingRentCarSearch />
    <bookingRentCarBrand />
    <bookingRentCarDestination />
  </div>
</template>

<script>
import bookingRentCarSearch from '@/components/bookingRentCar/bookingRentCarSearch.vue'
import bookingRentCarBrand from '@/components/bookingRentCar/bookingRentCarBrand.vue'
import bookingRentCarDestination from '@/components/bookingRentCar/bookingRentCarDestination.vue'
export default {
  name: 'rentCar',
  components: {
    bookingRentCarSearch,
    bookingRentCarBrand,
    bookingRentCarDestination
  }
}
</script>

<style>

</style>
