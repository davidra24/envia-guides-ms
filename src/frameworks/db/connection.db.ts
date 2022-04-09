import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

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
    } catch (error) {
      console.log(error);
    }
    config();
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
