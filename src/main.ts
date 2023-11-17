require('dotenv').config();

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import db from './config/database';
import Web from './routes/Web';

const app = express();
const port = process.env.PORT || 3000;
const route = new Web();

app.use(cors({
  credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/v1", route.routes())

const start = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log(`Server running on PORT: ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();