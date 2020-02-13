<template>
  <div class="B_fWheel">
    <bookingfWheelImg />
    <bookingfWheelLocation />
    <bookingfWheelSearch />
    <bookingfWheelMore />
  </div>
</template>

<script>
import bookingfWheelImg from '@/components/bookingfWheel/bookingfWheelImg.vue'
import bookingfWheelLocation from '@/components/bookingfWheel/bookingfWheelLocation.vue'
import bookingfWheelSearch from '@/components/bookingfWheel/bookingfWheelSearch.vue'
import bookingfWheelMore from '@/components/bookingfWheel/bookingfWheelMore.vue'
export default {
  name: 'bookingfWheel',
  components: {
    bookingfWheelImg,
    bookingfWheelLocation,
    bookingfWheelSearch,
    bookingfWheelMore
  }
}
</script>

<style>

</style>
