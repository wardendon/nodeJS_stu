let express = require("express");
let app = express();
let fs = require("fs");
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false });
/** 全局设置
 * https://www.cnblogs.com/baiyygynui/p/13743135.html
 * res.setHeader() 的别名为 res.header(),这两个方法是等效的。
 * 不同的响应头，都有不同的作用：

 - Access-Control-Allow-Origin  允许跨域访问
 - Access-Control-Allow-Headers  向浏览器发送预检请求，询问是否支持跨域的自定义 header 字段
 - Access-Control-Allow-Methods  询问是否支持跨域的请求方法
 - Access-Control-Allow-Credentials  允许客户端携带验证信息去请求，例如 cookie 之类的
*/
app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  next();
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// 启动server
let server = app.listen(3000, () => {
  let port = server.address().port;
  console.log(`应用实例，访问地址为 http://localhost:${port}`);
});

// 获取用户列表 get
app.get("/listUsers", (req, res) => {
  fs.readFile(__dirname + "/data/" + "user.json", "utf-8", (err, data) => {
    console.log(data);
    res.end(data);
  });
});

// 用户用户详情 get
app.get("/user/:id", (req, res) => {
  fs.readFile(__dirname + "/data/" + "user.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    let user = data["user" + req.params.id];
    res.end(JSON.stringify(user));
  });
});

// 删除用户 delete
app.delete("/deleteUser/:id", (req, res) => {
  fs.readFile(__dirname + "/data/" + "user.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    delete data["user" + req.params.id];
    res.end(JSON.stringify(data));
  });
});

// 新增用户 post
let id = 3;
app.post("/addUser", urlencodedParser, (req, res) => {
  let newUser = {
    name: req.body.name,
    password: req.body.password,
    profession: req.body.profession,
    id: id++,
  };
  fs.readFile(__dirname + "/data/" + "user.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    data["user" + id] = newUser;
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

// 修改 put
app.put("/updateUser", (req, res) => {
  res.end("更新数据");
});
