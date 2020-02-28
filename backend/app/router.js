'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/booking/currency', controller.booking.getCurrency);
  router.get('/api/booking/location', controller.booking.getLocation);
  router.get('/api/booking/hotelType', controller.booking.getHotelType);
  router.get('/api/booking/hotelRent', controller.booking.getHotelRent);
  router.get('/api/booking/hotelStation', controller.booking.getHotelStation);
  router.post('/api/user/login', controller.user.login)
  router.post('/api/user/register', controller.user.register)
};
