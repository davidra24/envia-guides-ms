import { Sequelize } from 'sequelize';

export class ConnectionDB {
  private static instance: ConnectionDB = null;
  private sequelize: Sequelize;

  private constructor() {
    const stringConnection = process.env.DB_CONNECTION;
    this.sequelize = new Sequelize(stringConnection);
  }

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
