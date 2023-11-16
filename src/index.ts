import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import connection from './config/database';

import Api from './routes/Api';

const app = express();
const port = 3000;
const route = new Api();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/v1", route.routes())

// const server = http.createServer(app);
// server.listen(port, () => {
//     console.log(`Server running on PORT: ${port}`)
// });

const start = async (): Promise<void> => {
    try {
      await connection.sync();
      app.listen(port, () => {
        console.log(`Server running on PORT: ${port}`);
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  void start();