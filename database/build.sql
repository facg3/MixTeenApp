BEGIN;


CREATE TABLE IF NOT EXISTS levels(
  level_id SERIAL PRIMARY KEY,
  level_name VARCHAR(25) NOT NULL,
  instruction VARCHAR(1000) NOT NULL

);

INSERT INTO levels (level_name, instruction)
  VALUES ('Level-1', 'Instruction Level One'),
         ('Level-2', 'Instruction level Two'),
         ('Level-3', 'Instruction level Three');

CREATE TABLE IF NOT EXISTS comment(
           id SERIAL PRIMARY KEY,
           username VARCHAR(25) NOT NULL,
           email VARCHAR(40) NOT NULL,
           message VARCHAR(1000) NOT NULL
         );
CREATE TABLE IF NOT EXISTS users(
          id SERIAL PRIMARY KEY,
          username VARCHAR(30) NOT NULL,
          email VARCHAR(40) NOT NULL,
          password VARCHAR(300) NOT NULL
        );
  INSERT INTO comment (username, email,message)
           VALUES ('Ismail', 'ismail12@gmail.com','website its very good');

COMMIT;
