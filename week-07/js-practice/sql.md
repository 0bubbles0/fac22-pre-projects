# SQL - Execute

## Notes

## Intro

- **S**tructured **Q**uery **L**anguage (pronounce S-Q-L or "sequel")
- communicate with **database** (**SQLite, PostgreSQL, MySQL**) &rarr; manage relational database systems
- can mix SQL & JavaScript
- stores data in **tables**: columns (categories) & rows (1 user)
- ? errors here are typically Runtime errors?

## Use

```jsx
exec(`CREATE TABLE users (email TEXT, name TEXT)`);
exec(`INSERT INTO users (email, name) VALUES ('am@ex.com', 'Amir')`);
exec(`SELECT * FROM users`);
// Result: [{email: 'am@ex.com', name: 'Amir'}]
```

- **exec**(`**CREATE TABLE** x (a **TEXT**, b **TEXT**)`);
- **exec**(`**INSERT INTO** x (a, b) **VALUES** ('...', '...')`);
- **exec**(`**SELECT** * **FROM** x **WHERE** ...`);

  - ? makes a network query
  - SELECT always returns [{}, {}] (query always returns [])
    - if empty src &rarr; [ ]
  - `*` &rarr; all columns
    - `exec(`SELECT name, age FROM users`);` &rarr; only chooses columns name, age
  - FROM &rarr; all rows
    - `exec(`SELECT age FROM users WHERE name='Amir' OR name='Betty'`);` &rarr; returns all ages that match
    - WHERE can have AND, OR, [f()](https://www.postgresql.org/docs/12/functions.html)
    - `exec(SELECT name FROM users WHERE length(name) > 4);`

- DELETE, ALTER, BEGIN
- all except SELECT don't retrieve anything, but still need to return sth &rarr; **return [ ]**

- **Spelling**

  - SQL **keywords** (CREATE TABLE, TEXT...) &rarr; Großschreibung egal
  - tables & columns &rarr; lower_snake_case
  - JS functions, var &rarr; lowerCamelCase
  - = < > is equality/comparison (it isn't == or ===). Not is != or <>

- **Columns**
  - **Non-existing columns** &rarr; **error** for any attempted operation (INSERT INTO, SELECT)
  - **Data Types:** TEXT, INTEGER, REAL (i.e. JS numbers), [others](https://www.postgresql.org/docs/11/datatype.html) (IP address...)
    - SQLite: doesn't enforce type, but turns every TEXT entry into string
- **Rows**
  - 1mio for production applications

## Lessons

| No  | Lesson                        | Date       |
| --- | ----------------------------- | ---------- |
| 1   | Basic tables                  | Wed, 4 Aug |
| 2   | Basic column types            | Wed, 4 Aug |
| 3   | Selecting columns             | Wed, 4 Aug |
| 4   | SELECT ... WHERE              | Wed, 4 Aug |
| 5   | No type enforcement in SQLite | Wed, 4 Aug |
| 6   | Null                          | Wed, 4 Aug |
