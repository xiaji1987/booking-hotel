module.exports = app => {
  // console.log('model层')
  const { INTEGER, STRING, FLOAT}  = app.Sequelize;
  const hotelRent = app.model.define('hotel-rent', {
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
    timestamps: false,
    tableName: 'hotel-rent',
    underscored: false
  })
  // console.log(location, '-----')
  return hotelRent
}