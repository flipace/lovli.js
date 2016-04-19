import path from 'path';
import express from 'express';

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
        <script src="http://127.0.0.1:9090/static/client.bundle.js"></script>
      </body>
    </html>`);
});

export default app;
