exec(`CREATE TABLE users (id INTEGER NOT NULL, name TEXT)`);
exec(`INSERT INTO users (id, name) VALUES (1, 'Amir')`);
exec(`INSERT INTO users (id, name) VALUES (2, 'Betty')`);
exec(`INSERT INTO users (id, name) VALUES (3, 'Betty')`);
function findUser(id) {
  return exec(`SELECT * FROM users WHERE id = ?`, [id]);
}

console.log(findUser(1));
