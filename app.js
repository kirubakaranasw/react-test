/*var fs = require("fs");
fs.readdir("./", function(err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log("Files", files);
  }
});*/

/*const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", arg => {
  console.log("Listener called", arg);
});
logger.log("New Message");*/

/*const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000..");*/

const _ = require("underscore");

var result = _.contains([1, 2, 3], 2);
console.log(result);
