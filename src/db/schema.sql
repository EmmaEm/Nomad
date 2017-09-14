DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255),
  country VARCHAR(255),
  picture VARCHAR(255)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  join_date DATE DEFAULT CURRENT_DATE,
  photo VARCHAR(255) DEFAULT 'default_profile.jpg'
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review_title VARCHAR(70) NOT NULL,
  content VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  city_id INT NOT NULL,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
