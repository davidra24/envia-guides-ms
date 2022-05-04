CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS GUIDES(
    id_guide UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    status_guide NUMERIC,
    date_admission DATE,
    notes_guide TEXT,
    observations_guide TEXT,
    content_guide TEXT,
    units_in_guide NUMERIC,
    weight_in_guide NUMERIC,
    volume_in_guide NUMERIC,
    weight_payment_guide NUMERIC,
    declared_value_guide NUMERIC,
    service_value_guide NUMERIC,
    freight_guide NUMERIC,
    other_cost_guide NUMERIC,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE IF NOT EXISTS PEOPLE(
    document_person TEXT PRIMARY KEY,
    first_name_person TEXT,
    last_name_person TEXT,
    address_person TEXT,
    phone_person TEXT,
    postal_code_person NUMERIC,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE IF NOT EXISTS EVENTS(
    id_event UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_guide UUID NOT NULL,
    date_event DATE,
    previous_status TEXT,
    new_status TEXT,
    additional_notes TEXT,
    createdAt DATE,
    updatedAt DATE,

    CONSTRAINT fk_guide_events
      FOREIGN KEY(id_guide) 
	  REFERENCES GUIDES(id_guide)
);

CREATE TABLE IF NOT EXISTS GUIDE_PERSON(
    id_guide UUID PRIMARY KEY,
    document_sender TEXT NOT NULL,
    document_addressee TEXT NOT NULL,
    origin_regional TEXT,
    origin_city TEXT,
    destination_city TEXT,
    destination_regional TEXT,
    address_addressee TEXT,
    assigned_route TEXT,
    createdAt DATE,
    updatedAt DATE,
    
    CONSTRAINT fk_guide_person
      FOREIGN KEY(id_guide) 
	  REFERENCES GUIDES(id_guide),

    CONSTRAINT fk_guide_sender
      FOREIGN KEY(document_sender) 
	  REFERENCES PEOPLE(document_person),
      
    CONSTRAINT fk_guide_addressee
      FOREIGN KEY(document_addressee) 
	  REFERENCES PEOPLE(document_person)
);

CREATE OR REPLACE VIEW VIEW_GUIDE_PERSON AS SELECT g.id_guide, g.status_guide, g.date_admission, g.notes_guide, g.observations_guide, g.content_guide, g.units_in_guide, g.weight_in_guide, g.volume_in_guide, g.weight_payment_guide, g.declared_value_guide, g.service_value_guide, g.freight_guide, g.other_cost_guide,
	gp.origin_regional, gp.origin_city, gp.destination_city, gp.destination_regional, gp.address_addressee as address_addressee_in_guide,	gp.assigned_route,
	gp.document_sender, send.first_name_person as first_name_sender, send.last_name_person as last_name_sender, send.address_person as address_sender, send.phone_person as phone_sender, send.postal_code_person as postal_code_sender,
	gp.document_addressee, addr.first_name_person as first_name_addressee, addr.last_name_person as last_name_addressee, addr.address_person as address_addressee, addr.phone_person as phone_addressee, addr.postal_code_person as postal_code_addressee,
  g.createdAt, g.updatedAt
FROM guides AS g
INNER JOIN guide_person AS gp ON g.id_guide = gp.id_guide
INNER JOIN people AS send ON gp.document_sender = send.document_person
INNER JOIN people AS addr ON gp.document_addressee = addr.document_person;
