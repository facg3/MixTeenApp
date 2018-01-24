BEGIN;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  post VARCHAR(250) NOT NULL
);

INSERT INTO posts (name, post)
  VALUES ('Ismail', 'Test Post One'),
         ('Walaa', 'Test Post Two'),
         ('Marwa', 'Test Post Three');

COMMIT;
