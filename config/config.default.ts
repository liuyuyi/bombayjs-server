import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1566973855378_2564';

  // add your egg config in here
  config.middleware = [];

  // mongodb 服务
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/bombayjs',
      options: {
          poolSize: 20,
      },
    },
  };

  // redis配置
  config.redis = {
    client: {
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        password: '',
        db: 0,
    },
  };

  config.security = {
    domainWhiteList: [ 'http://127.0.0.1:18090' ],
    csrf: {
        enable: false,
        ignore: '/api/v1/report/**',
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,PUT,POST,DELETE',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    origin: 'http://127.0.0.1:7002',
    user_pwd_salt_addition: 'BOMBAYJSUSERSALT',
    user_login_timeout: 86400, // 用户登录态持续时间 1 天
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
