module.exports = app => {
  // console.log('model层')
  const { INTEGER, STRING}  = app.Sequelize;
  const location = app.model.define('total-hotels', {
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
    timestamps: false,
    tableName: 'total-hotels',
    underscored: false
  })
  // console.log(location, '-----')
  return location
}