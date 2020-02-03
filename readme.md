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



