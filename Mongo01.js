use DEMO 
// 创建/切换 数据库

show dbs 
//显示数据库

db.createCollection("myCollection") 
// 创建集合（显性）

db.myCollection.drop() 
// 删除集合

db.democol.insert({"A":"23","time":new Date(),"num":Number(10),"state":null}) 
// 单文档插入/隐形创建

db.democol.find() 
// 查询选定集合中的文档内容（全部）

db.democol.update({"A":"23"},{$set:{"A":"18"}})
// 修改文档

db.democol.find()

db.democol.remove({"A":"18"}) 
// 删除带有{"A":"18"}的文档

db.democol.find()

db.democol.insert([
{"articleid":"10015","A":"23","time":new Date(),"num":Number(10),"state":null},
{"articleid":"10010","A":"20","time":new Date(),"num":Number(5),"state":null},
{"articleid":"10005","A":"18","time":new Date(),"num":Number(15),"state":null}
]) 

db.democol.remove({})

db.democol.find()

db.democol.find({$and:[{"articleid":"10015"},{"age":"30"}]})

db.democol.find({$or:[{"articleid":"10015"},{"age":"30"}]})

db.democol.find({"articleid":{$gt:"10015"}})

db.democol.find({"articleid":{$lt:"10015"}})

db.democol.find({"articleid":{$gte:"10015"}})