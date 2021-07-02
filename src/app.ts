import express from 'express';
import cors from 'cors';
import routers from './routers';
import DataBase from './database';

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

  private database(): any {
    const database = new DataBase();
  }

  private routes(): void {
    this.express.use(routers.projects);
  }
}

export default new App().express;
