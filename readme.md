## 仿制booking.com 缤客 
- 仿制booking.com 我准备使用egg + vue + sequelize + mysql

## 创建后台数据库
1. 先安装egg  
  npm init egg --type=simple

2. egg安装sequelize和mysql
  
  [详情可见:](https://blog.csdn.net/weixin_39907636/article/details/88787331)

3. egg.js的使用
  - router
    路由所在文件:

  - Controller
    Controller所在文件夹demo/app/controller/*。eggjs规定在controller中尽量只进行参数的转换、校验、返回值的转换等，复杂的业务操作应在Service中进行。Controller可以再次封装，比如使用BaseController继承eggjs的Controller，然后其它的controller继承BaseController即可，这点与Service不同，Service的父类只能是eggjs的Service。
  - Service
    Service所在文件夹为：demo/app/service/*，Service必须直接继承自eggjs的Service。
  - model
    与数据库进行对接
##安装 sequelize
  npm i sequelize -S
  npm i sequelize-cli -D
  安装数据库依赖
  npm i mysql2
  sequelize init (.\node_modules\.bin\sequelize init)

  初始化完成之后生成的目录
  config: 配置目录
  migrations：迁移文件（数据库表结构）
  seeders： 种子文件（生成测试数据）
  models： 模型文件
## 创建数据库
  sequelize:db create (.\node_modules\.bin\sequelize db:create)

## 构建数据库的迁移结构
.\node_modules\.bin\sequelize migration:create --name user // 创建一张user表

## 数据库结构
- user: 用户表
用来存放用户的基本信息(用户名， 密码等)
其他表一样操作

## 数据库中创建表
- .\node_modules\.bin\sequelize db:migrate 生成表
- .\node_modules\.bin\sequelize db:migrate:undo:all 删除所有表

## 创建种子文件
- seeders 文件夹下创建假数据
- .\node_modules\.bin\sequelize seed:generate --name user // 创建假数据文件

## 导入种子文件的数据
- .\node_modules\.bin\sequelize db:seed:all // 导入种子文件
- .\node_modules\.bin\sequelize db:seed:undo:all // 删除所有导入种子文件

#egg改变的目录结构
├── Readme.md                   // help
├── app                         // 应用
│   ├── controller              //
│   │    ├──booking.js       //
│   │    └──user.js
│   ├── model
│   │    ├── currency.js                 // 实验
│   │    ├── hotelRent.js                // 配置控制
│   │    ├── hotelStation.js
│   │    ├── hotelType.js                  // 实验
│   │    ├── location.js                // 配置控制
│   │    └── user.js
│   ├── public
│   │    └──images                
│   ├── service
│   │    ├──booking.js
│   │    └──user.js        
│   └── router.js              // 本地
├── config                     // 配置
│   ├── config.default.js
│   └── tplugin.js              // 测试环境
├── database                     // 配置
│   ├──migrations
│   ├──seeders           // 测试环境 
│   └──config.json
│
├── .sequelizerc

## 前端页面的编写
vue + axios + stylus
