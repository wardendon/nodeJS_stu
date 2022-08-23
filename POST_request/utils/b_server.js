let http = require("http");
let url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

/**
 * 我们的应用现在可以通过请求的URL路径来区别不同请求了--这使我们得以使用路由来将请求以URL路径为基准映射到处理程序上
 */
