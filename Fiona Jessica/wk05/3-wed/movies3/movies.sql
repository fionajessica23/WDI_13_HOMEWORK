
DROP TABLE movies;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  poster_url TEXT,
  title VARCHAR(200),
  year INTEGER,
  rated FLOAT(1),
  released VARCHAR(200),
  runtime VARCHAR(200),
  genre VARCHAR(200),
  director VARCHAR(200),
  writer VARCHAR(200),
  actors VARCHAR(200),
  plot TEXT
);
