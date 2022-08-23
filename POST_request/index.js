let server = require("./utils/c_server");
let router = require("./router");
let requestHandlers = require("./utils/requestHandlers");

let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
