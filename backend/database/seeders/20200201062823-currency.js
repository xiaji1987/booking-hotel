'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('currency', [
      {
        // id: 1,
        currency_Name: '人名币',
        currency_Unit: '元',
        is_currency_use: true
      },
      {
        // id: 1,
        currency_Name: '港币',
        currency_Unit: 'HK$',
        is_currency_use: true
      },
      {
        // id: 1,
        currency_Name: '日元',
        currency_Unit: '￥',
        is_currency_use: false
      },
      {
        // id: 1,
        currency_Name: '澳元',
        currency_Unit: 'AUD',
        is_currency_use: false
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('currency', null, {});
  }
};
