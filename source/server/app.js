import path from 'path';
import express from 'express';
import horizon from '@horizon/server';
import devProps from '../../config/webpack/devProps';

const app = express();

app.use('/static', express.static(path.join(__dirname, '../../.build')));

app.use('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>Hello world</title>
      </head>
      <body>
        <div id='root'></div>
        <script src="http://127.0.0.1:${devProps.webpackPort}/static/client.bundle.js"></script>
      </body>
    </html>`);
});

const run = () => {
  const httpServer = app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
      console.log(err); // eslint-disable-line
      return;
    }

    console.log(`Listening at http://localhost:3000`); // eslint-disable-line
  });

  // if we want to start secure, add key and cert props
  const horizonServer = horizon(httpServer, {
    auto_create_table: true,
    auto_create_index: true,
    auth: {
      allow_anonymous: true,
      allow_unauthenticated: true,
      token_secret: 'thisislovlijs'
    }
  });
};

export default {
  run
};
