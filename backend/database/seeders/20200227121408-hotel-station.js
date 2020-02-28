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
    return queryInterface.bulkInsert('hotel-station', [
      {
        hotel_station_Title: '情迷美利坚丨美妙自然风光',
        hotel_station_Detail: '如果你不曾到过美国，不曾为其壮丽的大自然感动过，一定要收下这篇旅行者攻略',
        hotel_station_ImgSrc: 'http://127.0.0.1:7001/public/images/stationImg/29920094.jpg',
      },
      {
        hotel_station_Title: '澳大利亚不可错过的自然之美',
        hotel_station_Detail: '在这些旅友们甄选的人气目的地，发现澳大利亚令人惊叹的自然美景',
        hotel_station_ImgSrc: 'http://127.0.0.1:7001/public/images/stationImg/30796666.jpg',
      },
      {
        hotel_station_Title: '咖啡狂人旅行宝典',
        hotel_station_Detail: '6大终极目的地，只为那一口馥郁香醇',
        hotel_station_ImgSrc: 'http://127.0.0.1:7001/public/images/stationImg/22859079.jpg',
      },
      {
        hotel_station_Title: '7块蛋糕带你环游世界',
        hotel_station_Detail: '以地名命名的美味蛋糕，边走边吃不怕胖',
        hotel_station_ImgSrc: 'http://127.0.0.1:7001/public/images/stationImg/29857283.jpg',
      },
      {
        hotel_station_Title: '遇见欧若拉，全球十大极光观赏地',
        hotel_station_Detail: '追捕北极光的季节即将到来。根据全球旅行者点评，为你推荐理想观赏地',
        hotel_station_ImgSrc: 'http://127.0.0.1:7001/public/images/stationImg/29987677.jpg',
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
   return queryInterface.bulkDelete('hotel-station', null, {});
  }
};
