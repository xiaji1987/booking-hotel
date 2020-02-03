<template>
  <div class="bookingHeader">
    <bookingTop />
    <bookingRaChart />
  </div>
</template>

<script>
import bookingTop from './bookingTop'
import bookingRaChart from './bookingRaChart'
export default {
  name: 'bookingHeader',
  components: {
    bookingTop,
    bookingRaChart
  }
}
</script>

<style>

</style>
