const http = require('http');
const port = 3000;
const startTime = new Date().getTime();
let failed = false;
let startupDelay = 0;
if (!isNaN(process.env.STARTUP_DELAY_SECONDS)) {
  startupDelay = parseInt(process.env.STARTUP_DELAY_SECONDS, 10) * 1000;
};

const requestHandler = (request, response) => {
  console.log(request.url);

  if (request.url === '/fail') {
    failed = true;
  } else if (request.url === '/recover') {
    failed = false;
  } else if (request.url === '/crash') {
    throw new Error('Something broke');
  }

  if (failed) {
    response.statusCode = 500;
    response.end('500 - Something bad happened');
  } else {
    response.end('200 - Everything looks good');
  }
}

const server = http.createServer(requestHandler);

setTimeout(() => {
  server.listen(port, (err) => {
    if (err) {
      return console.error('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
  });
}, startupDelay);
