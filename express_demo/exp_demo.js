let express = require("express");
let app = express();

app.get("/", (req, resp) => {
  // response.send()：传送HTTP响应
  resp.send("Hello World");
});

let server = app.listen(8081, () => {
  let port = server.address().port;

  console.log(`应用实例，访问地址为 http://localhost:${port}`);
});
