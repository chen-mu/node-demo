
//node服务
const express = require("express");  //导入express框架
const app = express();  //生成实例

//设置跨域访问
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "*");
    // res.header("Cache-Control", "no-cache");
    //设置响应头信息
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

//实现第一个post接口
app.post("/api/index", function (req, res) {
    console.log('post请求，进来了-------')
    res.send({ code: 200, data: { name: '皎月' }, message: '成功' })
})

//实现第一个get接口
app.get("/api/index", function (req, res) {
    console.log('get请求，进来了-------')
    res.send({ code: 200, data: { name: '皎月' }, message: '成功' })
})

app.listen(3000, function () {
    console.log("服务已启动，监听3000端口")
})
