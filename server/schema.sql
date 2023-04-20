DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  username varchar(20)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  roomname varchar(20)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  textInMessage varchar(100),
  user_id int NOT NULL,
  room_id int NOT NULL,
  /*user_id int,
  room_id int,*/
  INDEX (user_id),
  INDEX (room_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
  /*FOREIGN KEY (roomid)
    REFERENCES rooms (id)*/
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

