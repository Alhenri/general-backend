import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

class DataBase {
  private db = mongoose.connection;

  constructor() {
    this.connection();
    this.listeners();
  }

  private async connection() {
    const uri: string = process.env.DB_KEY;
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  private listeners() {
    this.db.on('open', () => {
      console.log('DataBase was connected');
    });

    this.db.on('error', (error) => {
      console.log(`DataBase error`);
    });
  }
}

export default DataBase;
