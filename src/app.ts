import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routers from './routers';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private database(): void {
    // TODO: conexão com banco de dados
  }

  private routes(): void {
    this.express.use(routers.projects);
  }
}

export default new App().express;
