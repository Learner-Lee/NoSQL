# 本学期Mongodb命令大全



1. 运行mongodb

```
mongod -f /opt/servers/mongodb/conf/mongod.conf
```

2. 用命令行编写mongodb

```
mongo
```

3. 创建/切换 数据库

```
use articledb
```

4. 显示数据库

```
show dbs
```

5. 创建集合（显性）

```
db.createCollection("myCollection")
```

6. 删除集合

```
db.myCollection.drop()
```

7. 单文档插入/隐形创建

```
db.comment.insert({"";"","":""})
```

8. 多行文档插入/隐形创建

```
db.comment.insertMany(
[
{"";"","":""},
{"";"","":""},
{"";"","":""}
]
)
```

9. 查询选定集合中的文档内容（全部）

```
db.comment.find()
```

10. 修改文档

```
db.comment.update({"A":"20"},{$set:{"A":"18"}}}
```

11. 删除带有{"age":"18"}的文档

```
db.comment.remove({"age":"18"})
```

12. 与操作符	查找同时满足两个条件的文档

```
db.comment.find({$and:[{"articleid":"10015"},{"age":"30"}]})
```

13. 或操作符	查找两个条件满足其中之一的文档

```
db.comment.find({$or:[{"articleid":"10015"},{"age":"30"}]})
```

14. 大于操作符

```
db.comment.find({"articleid":{$gt:"10015"}})
```

15. 小于操作符

```
db.comment.find({"articleid":{$lt:"10015"}})
```

16. 大于等于操作符

```
db.comment.find({"articleid":{$gte:"10015"}})
```

17. 删除全部文档

```
db.democol.remove({})
```

