'use strict';

module.exports = {
  // 创建货币表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, BOOLEAN}  = Sequelize;
    await queryInterface.createTable('currency', {
      id: {
        allowNull: false,// 允许为空吗
        autoIncrement: true,// 自增
        primaryKey: true,// 主键
        type: INTEGER,// 类型
        comment: '货币ID'
      },
      currency_Name: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',// 默认值
        comment: '货币名'
      },
      currency_Unit: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '货币单位'
      },
      is_currency_use: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '是否是常用货币'
      }
    },
    {
      tableName: 'currency',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: []
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('currency');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
