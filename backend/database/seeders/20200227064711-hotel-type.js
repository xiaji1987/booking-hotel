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
    return queryInterface.bulkInsert('hotel-type', [
      {
        hotel_type_Name: '公寓',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
        hotel_type_Num: 822390
      },
      {
        hotel_type_Name: '度假村',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
        hotel_type_Num: 21842
      },
      {
        hotel_type_Name: '别墅',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
        hotel_type_Num: 430438
      },
      {
        hotel_type_Name: '木屋',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
        hotel_type_Num: 14237
      },
      {
        hotel_type_Name: '乡村别墅',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg',
        hotel_type_Num: 126606
      },
      {
        hotel_type_Name: '豪华帐篷',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg',
        hotel_type_Num: 10082
      },
      {
        hotel_type_Name: '公寓式酒店',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/10e092f390b128dcff92727912299eef7824b751.jpg',
        hotel_type_Num: 35161
      },
      {
        hotel_type_Name: '度假屋',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg',
        hotel_type_Num: 430438
      },
      {
        hotel_type_Name: '旅馆',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/70618d86d515349ce56296a56d2eaaf283fd1542.jpg',
        hotel_type_Num: 140778
      },
      {
        hotel_type_Name: '青旅',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/cd5489c0d29025a9ca9daa602ac1581ba042bc69.jpg',
        hotel_type_Num: 27440
      },
      {
        hotel_type_Name: '汽车旅馆',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/9673cd1b55cbc1e1cdaeae09d87d16aa9d84d5f7.jpg',
        hotel_type_Num: 15799
      },
      {
        hotel_type_Name: '住宿加早餐',
        hotel_type_ImgSrc: 'http://127.0.0.1:7001/public/images/hotelTypeImg/a6a4a3f904284337c187771d94a4bb6169b168d7.jpg',
        hotel_type_Num: 247351
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
   return queryInterface.bulkDelete('hotel-type', null, {});
  }
};
