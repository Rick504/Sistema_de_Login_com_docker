-- table users
CREATE TABLE IF NOT EXISTS users (
    user_id serial NOT NULL,
    u_name varchar(45) UNIQUE NOT NULL,
    email varchar(45) UNIQUE NOT NULL,
    password varchar(150) NOT NULL,
    PRIMARY KEY (user_id)
);