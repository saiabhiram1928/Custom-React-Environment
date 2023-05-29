
const client  = require('./webpack.client')
const server  = require('./webpack.server')
const webpack = require('webpack');

const compiler = webpack(
  [client , server]
);

const watching = compiler.watch(
  {
    // Example
    aggregateTimeout: 300,
    poll: undefined,
  },
  (err, stats) => {
    // Print watch/build result here...
    console.log(stats);
  }
);