'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.prefix('/api')
  router.get('/booking/currency', controller.booking.getCurrency);
  router.get('/booking/location', controller.booking.getLocation);
  router.get('/booking/hotelType', controller.booking.getHotelType);
  router.get('/booking/hotelRent', controller.booking.getHotelRent);
  router.get('/booking/hotelStation', controller.booking.getHotelStation);
  router.post('/user/login', controller.user.login)
  router.post('/user/register', controller.user.register)
};
