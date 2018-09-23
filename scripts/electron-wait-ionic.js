/**
 * What this does is, it tries to connect to the port 8100, which is active
 * when electron serves the project. If connection fails, it waits and tries
 * again. If you use other port to serve using ionic, update the port in the file.
 */

const net = require('net');
const client = new net.Socket();
const exec = require('child_process').exec;

const port = 8100;
process.env.E_URL = `http://localhost:${port}`;
let electronIsStarted = false;
const tryConnection = function () {
  client.connect({port: port}, function () {
      client.end();
      if(!electronIsStarted) {
          console.log('starting electron...');
          electronIsStarted = true;
          exec('electron .');
      }
  }
}


tryConnection();
client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});
