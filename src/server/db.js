//引包
const mongoose=require('mongoose')
//连接mongodb并且创建数据库
const DB_URL='mongodb://localhost:27017/db_user'
mongoose.connect(DB_URL)

//表对象，一个或多个
const models={
  user:{
    userId:{type:'String',require:'true'},
    userName:{type:'String',require:'true'},
    pwd:{type:'String',require:'true'}
  },
  admin:{
    userId:{type:'String',require:'true'},
    userName:{type:'String',require:'true'},
    pwd:{type:'String',require:'true'}
  }
}

//循环遍历数据库表
for(m in models){
mongoose.model(m,new mongoose.Schema(models[m]))
}

//导出数据库表
module.exports={
  getModel:function(name){
    return mongoose.model(name)
  }
}