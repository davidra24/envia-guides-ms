CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS GUIDES(
    id_guide UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    status_guide NUMERIC,
    date_admission DATE,
    notes_guide TEXT,
    content_guide TEXT,
    units_in_guide NUMERIC,
    weight_in_guide NUMERIC,
    volume_in_guide NUMERIC,
    weight_payment_guide NUMERIC,
    volume_in_guide NUMERIC,
    weight_payment_guide NUMERIC,
    declared_value_guide NUMERIC,
    service_value_guide NUMERIC,
    freight_guide NUMERIC,
    other_cost_guide NUMERIC
)

CREATE TABLE IF NOT EXISTS PEOPLE(
    document_person NUMERIC PRIMARY KEY,
    first_name_person TEXT,
    last_name_person TEXT,
    address_person TEXT,
    phone_person TEXT,
    postal_code_person NUMERIC
)

CREATE TABLE IF NOT EXISTS EVENTS(
    id_event UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_guide UUID NOT NULL,
    date_event DATE,
    previous_status TEXT,
    new_status TEXT,
    additional_notes TEXT,

    CONSTRAINT fk_guide_events
      FOREIGN KEY(id_guide) 
	  REFERENCES GUIDES(id_guide),
)

CREATE TABLE IF NOT EXISTS GUIDE_PERSON(
    id_guide UUID PRIMARY KEY,
    document_sender NUMERIC NOT NULL,
    document_addressee NUMERIC NOT NULL,
    origin_city TEXT,
    destination_city TEXT,
    destionation_regional TEXT,
    
    CONSTRAINT fk_guide_person
      FOREIGN KEY(id_guide) 
	  REFERENCES GUIDES(id_guide),

    CONSTRAINT fk_guide_sender
      FOREIGN KEY(document_sender) 
	  REFERENCES PEOPLE(document_person),
      
    CONSTRAINT fk_guide_addressee
      FOREIGN KEY(document_addressee) 
	  REFERENCES PEOPLE(document_person)
)

