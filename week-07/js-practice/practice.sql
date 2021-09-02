const email = "' oh no '";
CREATE TABLE users (email TEXT UNIQUE);
INSERT INTO users (email) VALUES ('" + email + "');