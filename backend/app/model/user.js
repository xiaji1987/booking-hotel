module.exports = app => {
  // console.log('model层')
  const { INTEGER, STRING, BOOLEAN }  = app.Sequelize;
  const user = app.model.define('user', {
    id: {
      allowNull: false,// 允许为空吗
      primaryKey: true,// 主键
      autoIncrement: true,// 自增
      type: INTEGER,// 类型
      comment: '用户id'
    },
    username: {
      type: STRING(50),
      primaryKey: true,// 主键
      allowNull: false,
      defaultValue: '',
      comment: '用户名'
    },
    password: {
      type: STRING(32),
      allowNull: false,
      defaultValue: '',
      comment: '用户密码'
    },
    disabled: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '是否是禁用状态'
    }
  },
  {
    timestamps: false,
    tableName: 'user',
    underscored: false
  })
  // console.log(location, '-----')
  return user
}