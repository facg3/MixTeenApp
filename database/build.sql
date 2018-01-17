BEGIN;
DROP TABLE IF EXISTS levels CASCADE;

CREATE TABLE levels (
  level_id SERIAL PRIMARY KEY,
  level_name VARCHAR(25) NOT NULL,
  instruction VARCHAR(1000) NOT NULL

);

INSERT INTO levels (level_name, instruction)
  VALUES ('Level-1', 'Instruction Level One'),
         ('Level-2', 'Instruction level Two'),
         ('Level-3', 'Instruction level Three');

COMMIT;
