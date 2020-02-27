module.exports = app => {
  // console.log('model层')
  const { INTEGER, STRING, BOOLEAN}  = app.Sequelize;
  const currency = app.model.define('currency', {
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
    timestamps: false,
    tableName: 'currency',
    underscored: false
  })
  // console.log(currency, '-----')
  return currency
}