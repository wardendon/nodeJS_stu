let express = require("express");
let app = express();
let bodyParser = require("body-parser");
// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// 获取get请求的参数 req.query
app.get("/process_get", function (req, res) {
  // 输出 JSON 格式
  let response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

// 获取post请求的参数 req.body
app.post("/process_post", urlencodedParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" }); //设置response编码为utf-8
  // 输出 JSON 格式
  let response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

let server = app.listen(8081, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
