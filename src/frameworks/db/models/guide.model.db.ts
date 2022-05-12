import Sequelize from 'sequelize';
import { ConnectionDB } from '../connection.db';

const sequelize = ConnectionDB.getInstance().getSequelize();

export const guideModelDB = sequelize.define('guides', {
  id_guide: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  status_guide: {
    type: Sequelize.NUMBER
  },
  date_admission: {
    type: Sequelize.DATE
  },
  notes_guide: {
    type: Sequelize.TEXT
  },
  observations_guide: {
    type: Sequelize.TEXT
  },
  content_guide: {
    type: Sequelize.TEXT
  },
  units_in_guide: {
    type: Sequelize.NUMBER
  },
  weight_in_guide: {
    type: Sequelize.NUMBER
  },
  volume_in_guide: {
    type: Sequelize.NUMBER
  },
  weight_payment_guide: {
    type: Sequelize.NUMBER
  },
  declared_value_guide: {
    type: Sequelize.NUMBER
  },
  service_value_guide: {
    type: Sequelize.NUMBER
  },
  freight_guide: {
    type: Sequelize.NUMBER
  },
  other_cost_guide: {
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
