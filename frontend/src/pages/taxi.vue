<template>
  <div class="B_taxi">
    <bookingTaxiSearch />
    <bookingTaxiDeliver />
    <bookingTaxiService />
  </div>
</template>

<script>
import bookingTaxiSearch from '@/components/bookingTaxi/bookingTaxiSearch.vue'
import bookingTaxiDeliver from '@/components/bookingTaxi/bookingTaxiDeliver.vue'
import bookingTaxiService from '@/components/bookingTaxi/bookingTaxiService.vue'
export default {
  name: 'taxi',
  components: {
    bookingTaxiSearch,
    bookingTaxiDeliver,
    bookingTaxiService
  }
}
</script>

<style>

</style>
