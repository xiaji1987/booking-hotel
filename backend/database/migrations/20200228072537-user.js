'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,// 允许为空吗
        autoIncrement: true,// 自增
        primaryKey: true,// 主键
        type: Sequelize.INTEGER,// 类型
        comment: '用户id'
      },
      username: {
        type: Sequelize.STRING(50),
        primaryKey: true,// 主键
        allowNull: false,
        defaultValue: '',
        comment: '用户名'
      },
      password: {
        type: Sequelize.STRING(32),
        allowNull: false,
        defaultValue: '',
        comment: '用户密码'
      },
      disabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '是否是禁用状态'
      }
    },
    {
      tableName: 'user',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: []
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('user')
  }
};
