module.exports = app => {
  // console.log('model层')
  const { INTEGER, STRING }  = app.Sequelize;
  const hotelStation = app.model.define('hotel-station', {
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
    timestamps: false,
    tableName: 'hotel-station',
    underscored: false
  })
  // console.log(location, '-----')
  return hotelStation
}