import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';

config();

export class ConnectionDB {
  private static instance: ConnectionDB = null;
  private sequelize: Sequelize;
  private CONNECTION = process.env.DATABASE_URL;

  private constructor() {
    this.connectDB();
  }

  connectDB = async () => {
    try {
      this.sequelize = new Sequelize(this.CONNECTION, {
        dialectOptions: {
          ssl: {
            rejectUnauthorized: false
          }
        }
      });
      await this.sequelize.authenticate();
      console.log('Conected!');
      await this.createDatabase();
    } catch (error) {
      console.log(error);
    }
    config();
  };

  createDatabase = async () => {
    const dir = path.join(__dirname, 'db.sql');
    const sql_string = fs.readFileSync(dir, 'utf8');
    await this.sequelize.query(sql_string);
    console.log('Database created');
  };

  public static getInstance(): ConnectionDB {
    if (ConnectionDB.instance === null) {
      ConnectionDB.instance = new ConnectionDB();
    }
    return ConnectionDB.instance;
  }

  getSequelize() {
    return this.sequelize;
  }
}
