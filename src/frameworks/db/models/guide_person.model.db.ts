import Sequelize from 'sequelize';
import { ConnectionDB } from '../connection.db';
import { guideModelDB } from './guide.model.db';
import { personModelDB } from './person.model.db';

const sequelize = new ConnectionDB().getSequelize();

export const guidePersonModelDB = sequelize.define(
  'guide_person',
  {
    id_guide: {
      type: Sequelize.UUID,
      primaryKey: true,
      references: {
        model: guideModelDB,
        key: 'id_guide'
      }
    },
    document_sender: {
      type: Sequelize.TEXT,
      references: {
        model: personModelDB,
        key: 'document_person'
      }
    },
    document_addressee: {
      type: Sequelize.TEXT,
      references: {
        model: personModelDB,
        key: 'document_person'
      }
    },
    origin_regional: {
      type: Sequelize.TEXT
    },
    origin_city: {
      type: Sequelize.TEXT
    },
    destination_city: {
      type: Sequelize.TEXT
    },
    destination_regional: {
      type: Sequelize.TEXT
    },
    address_addressee: {
      type: Sequelize.TEXT
    },
    assigned_route: {
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
  },
  {
    tableName: 'guide_person'
  }
);

guidePersonModelDB.hasMany;
