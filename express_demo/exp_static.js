let express = require("express");
let app = express();
/**
 * Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
 * http://localhost:8081/public/img/joker.png 打开可查看图片
 */
app.use("/public", express.static("public"));
app.get("/", (req, resp) => {
  resp.send("Hello w2gd");
});

app.listen(8081, (req, resp) => {
  console.log("～～～～");
});
// 也可以托管vue打包后的dist文件
// app.use(express.static("dist"));
