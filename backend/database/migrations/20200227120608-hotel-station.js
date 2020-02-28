'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING }  = Sequelize;
    await queryInterface.createTable('hotel-station', {
      id: {
        allowNull: false,// 允许为空吗
        autoIncrement: true,// 自增
        primaryKey: true,// 主键
        type: INTEGER,// 类型
        comment: '风景ID'
      },
      hotel_station_Title: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',// 默认值
        comment: '风景介绍'
      },
      hotel_station_Detail: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',// 默认值
        comment: '风景详情'
      },
      hotel_station_ImgSrc: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '风景图片地址'
      }
    },
    {
      tableName: 'hotel-station',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: []
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel-station');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
