# 共享笔记

下载本项目后 运行 `` npm install || cnpm install``  
启动服务`npm run start `
监听`npm run watch`  
默认监听端口是`3000` 可以在`.env`的`LISTEN_PORT`修改端口




## 仿写npm包
dotenv主文件做了注释
dotenv使用方法
````
    const dotenv = require("./dotenv");
    dotenv.config(); // 设置路径，默认为当前文件路径，可以自己配置
    process.env.variableName  //获取了.env里面的值
````

