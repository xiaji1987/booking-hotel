<template>
  <div class="B_booking_hotel">
    <bookingSearch />
    <bookingHotelShow />
    <bookingHotelType />
    <bookingHotelRent />
    <bookingHotelStation />
    <bookingHotelPopular />
    <bookingHotelExplore />
  </div>
</template>

<script>
import bookingSearch from '@/components/bookingHotel/bookingSearch.vue'
import bookingHotelShow from '@/components/bookingHotel/bookingHotelShow.vue'
import bookingHotelType from '@/components/bookingHotel/bookingHotelType.vue'
import bookingHotelRent from '@/components/bookingHotel/bookingHotelRent.vue'
import bookingHotelStation from '@/components/bookingHotel/bookingHotelStation.vue'
import bookingHotelPopular from '@/components/bookingHotel/bookingHotelPopular.vue'
import bookingHotelExplore from '@/components/bookingHotel/bookingHotelExplore.vue'
export default {
  name: 'hotel',
  components: {
    bookingSearch,
    bookingHotelShow,
    bookingHotelType,
    bookingHotelRent,
    bookingHotelStation,
    bookingHotelPopular,
    bookingHotelExplore
  }
}
</script>

<style>

</style>
