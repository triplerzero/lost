const express=require('express');
//引入body-parser中间件，用于转换json格式
const bodyParser=require('body-parser');
//引入cookie-parser中间件，用于设置cookie
const cookieParser=require('cookie-parser');
//引用 express的路由方法
const apiRouter=express.Router();
//导入axios
const axios=require('axios');
//导入数据库
const db=require('./db');
//获取user表
const User=db.getModel('user');
//引用中间件
const app=express();
app.use(bodyParser());
app.use(cookieParser());
//引用路由
app.use('/user',require('./user'));
//引用路由
app.use('/api',apiRouter);
//开端口
app.listen(3001);
