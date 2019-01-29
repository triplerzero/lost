//引入express框架
const express = require('express');
//引用express框架的路由方法
const Router = express.Router();
//导入数据库
const db = require('./db');
//获取user表
const User = db.getModel('user');
//引入加密中间件
const utils = require('utility');

//查看user表中所有数据
// Router.get('/list',(req,res)=>{

// });
// //往user表插入数据
// let pwds=md5Pwd('2015354146');
// let {userId,userName,pwd}={userId:'2015354146',userName:'zero',pwd:pwds};
// User.create({userId,userName,pwd});

//清空user表中的数据
Router.get('/remove', (req, res) => {
  User.remove({}, () => {});
  res.json({
    code: 0
  });
});

//登录
Router.post('/login', (req, res) => {
  let {
    userId,
    pwd
  } = req.body;
  pwd=md5Pwd(pwd);
  User.findOne({
    userId,
    pwd
  }, (err, doc) => {
    if (!doc) {
      return res.json({
        code: 1,
        msg: '学号或密码有误'
      })
    }
    res.cookie('username',doc.userName);
    return res.json({code:0,data:doc})
  })
})

//加密
function md5Pwd(pwd){
  const salt = "novazero";
  return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router;
