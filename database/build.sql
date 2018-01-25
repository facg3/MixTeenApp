BEGIN;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE IF NOT EXISTS  posts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  post VARCHAR(250) NOT NULL
);
INSERT INTO posts (name, post)
  VALUES ('Ismail', 'Test Post One'),
         ('Walaa', 'Test Post Two'),
         ('Marwa', 'Test Post Three');

CREATE TABLE IF NOT EXISTS comment(
                    id SERIAL PRIMARY KEY,
                    username VARCHAR(25) NOT NULL,
                    email VARCHAR(40) NOT NULL,
                    message VARCHAR(1000) NOT NULL
                  );

CREATE TABLE IF NOT EXISTS users(
          id SERIAL PRIMARY KEY,
          username VARCHAR(30)  NOT NULL UNIQUE,
          email VARCHAR(40) NOT NULL,
          password text NOT NULL
        );
  INSERT INTO comment (username, email,message)
           VALUES ('Ismail', 'ismail12@gmail.com','website its very good');

COMMIT;
