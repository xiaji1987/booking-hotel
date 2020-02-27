'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/booking/currency', controller.booking.getCurrency);
  router.get('/api/booking/location', controller.booking.getLocation);
  router.post('/api/user/login', controller.user.login)
};
