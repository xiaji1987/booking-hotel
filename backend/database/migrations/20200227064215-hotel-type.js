'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING }  = Sequelize;
    await queryInterface.createTable('hotel-type', {
      id: {
        allowNull: false,// 允许为空吗
        autoIncrement: true,// 自增
        primaryKey: true,// 主键
        type: INTEGER,// 类型
        comment: '酒店类型ID'
      },
      hotel_type_Name: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',// 默认值
        comment: '各省名称'
      },
      hotel_type_ImgSrc: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '酒店图片地址'
      },
      hotel_type_Num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '酒店类型数量'
      }
    },
    {
      tableName: 'hotel-type',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: []
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hotel-type');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
