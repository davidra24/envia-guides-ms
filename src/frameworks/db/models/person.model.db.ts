import Sequelize from 'sequelize';
import { ConnectionDB } from '../connection.db';

const sequelize = new ConnectionDB().getSequelize();

export const personModelDB = sequelize.define('people', {
  document_person: {
    type: Sequelize.TEXT,
    primaryKey: true
  },
  first_name_person: {
    type: Sequelize.TEXT
  },
  last_name_person: {
    type: Sequelize.TEXT
  },
  address_person: {
    type: Sequelize.TEXT
  },
  phone_person: {
    type: Sequelize.TEXT
  },
  postal_code_person: {
    type: Sequelize.NUMBER
  },
  createdAt: {
    field: 'createdat',
    type: Sequelize.DATE
  },
  updatedAt: {
    field: 'updatedat',
    type: Sequelize.DATE
  }
});
