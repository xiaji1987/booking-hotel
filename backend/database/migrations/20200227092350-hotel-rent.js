'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, FLOAT }  = Sequelize;
    await queryInterface.createTable('hotel-rent', {
      id: {
        allowNull: false,// 允许为空吗
        autoIncrement: true,// 自增
        primaryKey: true,// 主键
        type: INTEGER,// 类型
        comment: '酒店类型ID'
      },
      hotel_rent_Name: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',// 默认值
        comment: '各省名称'
      },
      hotel_rent_Location: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',// 默认值
        comment: '酒店的所在地'
      },
      hotel_rent_ImgSrc: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '酒店图片地址'
      },
      hotel_rent_Price: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '酒店价格'
      },
      hotel_rent_Score: {
        type: FLOAT,
        allowNull: false,
        defaultValue: 0,
        comment: '酒店评分'
      },
      hotel_rent_EvaluateNum: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '酒店评价条数'
      }
    },
    {
      tableName: 'hotel-rent',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: []
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel-rent');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
