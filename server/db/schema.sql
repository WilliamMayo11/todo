BEGIN;

DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  description VARCHAR
);

COMMIT;
