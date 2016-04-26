const host = '127.0.0.1';
const webpackPort = 9095;

module.exports = {
  host,
  webpackPort,
  baseUrl: `http://${host}:${webpackPort}`
};
