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
    return queryInterface.bulkInsert('total-hotels', [
      {
        hotel_Location: '海口',
        hotel_Count: 169,
        location_Img: 'http://127.0.0.1:7001/public/images/locationImg/972892.webp',
        hotel_Price: 328
      },
      {
        hotel_Location: '三亚',
        hotel_Count: 395,
        location_Img: 'http://127.0.0.1:7001/public/images/locationImg/683818.jpg',
        hotel_Price: 762
      },
      {
        hotel_Location: '新加坡',
        hotel_Count: 846,
        location_Img: 'http://127.0.0.1:7001/public/images/locationImg/619666.jpg',
        hotel_Price: 700
      },
      {
        hotel_Location: '尼斯',
        hotel_Count: 3294,
        location_Img: 'http://127.0.0.1:7001/public/images/locationImg/681827.jpg',
        hotel_Price: 580
      },
      {
        hotel_Location: '阿姆斯特丹',
        hotel_Count: 1920,
        location_Img: 'http://127.0.0.1:7001/public/images/locationImg/972584.jpg',
        hotel_Price: 886
      },
      {
        hotel_Location: '吉隆坡',
        hotel_Count: 4644,
        location_Img: 'http://127.0.0.1:7001/public/images/locationImg/685532.jpg',
        hotel_Price: 338
      },
      {
        hotel_Location: '雅典',
        hotel_Count: 6880,
        location_Img: 'http://127.0.0.1:7001/public/images/locationImg/971373.jpg',
        hotel_Price: 516
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('total-hotels', null, {});
  }
};
