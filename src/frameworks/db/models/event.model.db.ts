import Sequelize from 'sequelize';
import { ConnectionDB } from '../connection.db';

const sequelize = new ConnectionDB().getSequelize();

export const eventModelDB = sequelize.define('events', {
  id_event: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  id_guide: {
    type: Sequelize.UUID
  },
  date_event: {
    type: Sequelize.DATE
  },
  previous_status: {
    type: Sequelize.NUMBER
  },
  new_status: {
    type: Sequelize.NUMBER
  },
  additional_notes: {
    type: Sequelize.TEXT
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
