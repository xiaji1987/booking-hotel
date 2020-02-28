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
    return queryInterface.bulkInsert('hotel-rent', [
      {
        hotel_rent_Name: '帕特奥斯昂托艾斯特瓦-自助式公寓酒店',
        hotel_rent_Location: '里斯本',
        hotel_rent_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelRentImg/74148425.jpg',
        hotel_rent_Price: 1361,
        hotel_rent_Score: 9.4,
        hotel_rent_EvaluateNum: 387
      },
      {
        hotel_rent_Name: '多米纳别墅酒店',
        hotel_rent_Location: '斯普利特',
        hotel_rent_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelRentImg/16379302.jpg',
        hotel_rent_Price: 381,
        hotel_rent_Score: 9.6,
        hotel_rent_EvaluateNum: 755
      },
      {
        hotel_rent_Name: '苏利圣保罗公寓',
        hotel_rent_Location: '巴黎',
        hotel_rent_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelRentImg/98926221.jpg',
        hotel_rent_Price: 1067,
        hotel_rent_Score: 8.1,
        hotel_rent_EvaluateNum: 188
      },
      {
        hotel_rent_Name: '休格公寓式酒店',
        hotel_rent_Location: '里约热内卢',
        hotel_rent_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelRentImg/74529578.jpg',
        hotel_rent_Price: 388,
        hotel_rent_Score: 9.1,
        hotel_rent_EvaluateNum: 305
      },
      {
        hotel_rent_Name: '兰布拉海滩巴塞隆纳斯托夫公寓酒店',
        hotel_rent_Location: '巴塞罗那',
        hotel_rent_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelRentImg/44245380.jpg',
        hotel_rent_Price: 724,
        hotel_rent_Score: 8.2,
        hotel_rent_EvaluateNum: 398
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
   return queryInterface.bulkDelete('hotel-rent', null, {});
  }
};
