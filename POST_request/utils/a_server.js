let http = require("http");

function start() {
  // 调用http模块提供的函数： createServer
  // 这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
  // createServer() 的唯一参数，一个函数定义
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Server has started.");
}
/** tips
 * 当回调启动，我们的 onRequest() 函数被触发的时候，有两个参数被传入： request 和 response
 * 当收到请求时:
 *  1.使用 response.writeHead() 函数发送一个HTTP状态200和HTTP头的内容类型（content-type）
 *  2.使用 response.write() 函数在HTTP相应主体中发送文本“Hello World"
 *  3.最后，我们调用 response.end() 完成响应
 *
 * 请注意，当我们在服务器访问网页时，我们的服务器可能会输出两次“Request received.”。
 * 那是因为大部分浏览器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico
 */

exports.start = start;
