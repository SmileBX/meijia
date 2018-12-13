//1.构建web服务器
const express=require('express')
//导入路由器

//引入中间件
const bodyParser=require('body-parser')
var app=express();
app.listen(3002);

//2.托管静态资源-----内置中间件
app.use(express.static('./public'))

//调用中间件
app.use(bodyParser.urlencoded({
    extended:false
}));

//写入路由