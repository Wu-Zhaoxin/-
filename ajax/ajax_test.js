// 修改代码自动更新监听终端代码：npx nodemon ajax_test.js

// 1.引入express（框架）
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
app.get('/buttontest', (req, res)=>{
    //设置响应头：设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // 设置响应体
    res.send('hello button');
});
// axios 服务
app.all('/axios-server', (req, res)=>{
    //设置响应头：设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    const data = {name:'Wu Zhaoxin'};
    // 设置响应体
    res.send(JSON.stringify(data));
});

// 4.监听端口启动服务
app.listen(1234, ()=>{
    console.log("服务已经启动，端口1234监听中。。。");
});