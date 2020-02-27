'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING }  = Sequelize;
    await queryInterface.createTable('total-hotels', {
      id: {
        allowNull: false,// 允许为空吗
        autoIncrement: true,// 自增
        primaryKey: true,// 主键
        type: INTEGER,// 类型
        comment: '地区ID'
      },
      hotel_Location: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',// 默认值
        comment: '各省名称'
      },
      hotel_Count: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '酒店总数'
      },
      location_Img: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '地区图片'
      },
      hotel_Price: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '酒店均价'
      },
    },
    {
      tableName: 'total-hotels',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: []
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('total-hotels');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
