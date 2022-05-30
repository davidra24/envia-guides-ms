import Sequelize from 'sequelize';
import { ConnectionDB } from '../connection.db';

const sequelize = new ConnectionDB().getSequelize();

export const guideViewModelDB = sequelize.define(
  'view_guide_person',
  {
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
    address_addressee_in_guide: {
      type: Sequelize.TEXT
    },
    document_sender: {
      type: Sequelize.TEXT
    },
    assigned_route: {
      type: Sequelize.TEXT
    },
    first_name_sender: {
      type: Sequelize.TEXT
    },
    last_name_sender: {
      type: Sequelize.TEXT
    },
    address_sender: {
      type: Sequelize.TEXT
    },
    phone_sender: {
      type: Sequelize.TEXT
    },
    postal_code_sender: {
      type: Sequelize.NUMBER
    },
    document_addressee: {
      type: Sequelize.TEXT
    },
    first_name_addressee: {
      type: Sequelize.TEXT
    },
    last_name_addressee: {
      type: Sequelize.TEXT
    },
    address_addressee: {
      type: Sequelize.TEXT
    },
    phone_addressee: {
      type: Sequelize.TEXT
    },
    postal_code_addressee: {
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
  },
  {
    tableName: 'view_guide_person'
  }
);
