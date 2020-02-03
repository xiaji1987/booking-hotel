'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/booking/currency', controller.booking.getCurrency);
  router.post('/api/user/login', controller.user.login)
};
