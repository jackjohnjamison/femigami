const https = require("https");
require("dotenv").config();

const main = require("../main");
const debug = require("debug")("server:server");

/**
 * Get port from environment and store in Express.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val; // named pipe
  }
  if (port >= 0) {
    return port; // port number
  }
  return false;
}

const port = normalizePort(process.env.PORT);
main.set("port", port);

// Decodes base 64 strings. Used for SSL keys and certs
function decodeBase64(string) {
  return Buffer.from(string, "base64").toString("ascii");
}

const SSL_KEY = decodeBase64(process.env.SSL_KEY);
const SSL_CRT = decodeBase64(process.env.SSL_CRT);

/**
 * Create server.
 */
function setServer() {
  return https.createServer(
    {
      key: SSL_KEY,
      cert: SSL_CRT,
    },
    main
  );
}
const server = setServer();

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTPS server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
