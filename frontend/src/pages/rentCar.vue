<template>
  <div class="B_booking_rentCar">
    <bookingRentCarSearch />
    <bookingRentCarBrand />
    <bookingRentCarDestination />
    <bookingRentCarInfo />
    <bookingRentCarProblem />
    <bookingRentCarLocation />
  </div>
</template>

<script>
import bookingRentCarSearch from '@/components/bookingRentCar/bookingRentCarSearch.vue'
import bookingRentCarBrand from '@/components/bookingRentCar/bookingRentCarBrand.vue'
import bookingRentCarDestination from '@/components/bookingRentCar/bookingRentCarDestination.vue'
import bookingRentCarInfo from '@/components/bookingRentCar/bookingRentCarInfo.vue'
import bookingRentCarProblem from '@/components/bookingRentCar/bookingRentCarProblem.vue'
import bookingRentCarLocation from '@/components/bookingRentCar/bookingRentCarLocation.vue'
export default {
  name: 'rentCar',
  components: {
    bookingRentCarSearch,
    bookingRentCarBrand,
    bookingRentCarDestination,
    bookingRentCarInfo,
    bookingRentCarProblem,
    bookingRentCarLocation
  }
}
</script>

<style>

</style>
