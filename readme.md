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

4. egg跨域问题
  步骤一：
  1. 下载 egg-cors 包
  npm i egg-cors --save
  
  步骤二：
  2. 在plugin.js中设置开启cors 
  exports.cors = {
    enable: true,
    package: 'egg-cors',
  };
  
  步骤三：
  3. 在config.{env}.js中配置，注意配置覆盖的问题
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  };
  
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };


tsconfig.json

include 自动编译路径下的文件

npm i @types/koa
npm install koa-controllers --save
npm install reflect-metadata --save

## 初始化
安装 sequelize
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

- user-profile: 用户的扩展信息
用来存放用户不常用的信息(性别， 生日， 个人简介。。。不常用的数据)

- login-log: 用户的登陆日志
存放用户的登录日志(用户每一次登陆的时间， IP信息存放在这里)

- categoty: 美食分类表
用来存放美食分类信息(热菜， 凉菜。。。)

- cookbook: 存放美食信息
用来存放美食信息(标题， 图片等)

- step: 每一道美食的烹饪步骤
用来存放美食烹饪步骤， 在每一步骤又一个字段与cookbook表的id进行关联

- commit: 评论表
用来存放用户对某个具体的cookbook的评论

- favorite: 收藏夹
用来存放用户收藏的美食

## 数据库中创建表
- .\node_modules\.bin\sequelize db:migrate 生成表
- .\node_modules\.bin\sequelize db:migrate:undo:all 删除所有表

## 创建种子文件
- seeders 文件夹下创建假数据
- .\node_modules\.bin\sequelize seed:generate --name user // 创建假数据文件

## 导入种子文件的数据
.\node_modules\.bin\sequelize db:seed:all // 导入种子文件
.\node_modules\.bin\sequelize db:seed:undo:all // 删除所有导入种子文件
