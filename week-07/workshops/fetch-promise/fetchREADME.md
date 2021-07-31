# Fetch & Promise Notes (2h15)

## Questions

-     ((user) => console.log(user)) === (console.log)

## Content

- Reading List
- Summary
- Asynchronicity
- Callbacks
- Promise
- Fetch
- Accessing
  - Promise value
  - Response body
- Errors

## Reading List

- [ ] Workshop (_fac_): <https://learn.foundersandcoders.com/workshops/learn-fetch/>
- [ ] Promise states: <https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md>

## Summary

- Make HTTP requests with JS (promise with fetch):

  ```javascript
  fetch('url').then((response) => {});
  ```

- States:
  - Promise {<state>: "pending"}
  - Promise {<state>: "fulfilled", <value>: Result}
  - Promise {<state>: "rejected", <value>: Error}

```javascript
fetch('url') // Promise {<state>: "pending"}
  .then((response) => response.json()) // Response {type, url, redirected...} --> set another promise
  .then((pikachu) => console.log(pikachu)) // Object { abilities: [],}
  .catch((error) => console.log(error)); // TypeError: ...
```

- GitHub API example:

  ```javascript
  //Make promise to get user object
  const getUser = (username) =>
    fetch(`https://api.github.com/users/${username}`).then((response) =>
      response.json()
    );
  //call with getUser('x').then(console.log).catch(console.error);
  // Promise to get [all repos]
  const getRepos = (user) =>
    fetch(user.repos_url).then((response) => response.json());

  //Nest
  getUser('x').then(getRepos).then(console.log).catch(console.error);

  // Fetch Multiple users:
  Promise.all([getUser('x'), getUser('y')])
    .then(console.log)
    .catch(console.error);
  ```

## Asynchronicity

- Normally: JS happens in order written,
- then asyncronous items pushed to back of queue
- over-nesting is callback hell &rarr; promise with .then

  ```javascript
  function test(x);

  setTimeout(() => test(x), 0);
  setTimeout(() => test(x), 1000);

  function delayer(a, callback) {
    setTimeout(() => callback(a), 1000);
    };

  delayer(a, () => {
    delayer(b, () => {
      console.log('b');
    });
  });

  delayer()
  .then(delayerA)
  .then(delayerB)
  .then(console.log);
  ```

## Promise

- is an object
- represents eventual result of async code
- Return a promise object, when final value hasn't run yet
- **States**: pending, fulfilled, rejected
  - Promise {<state>: "pending"}
  - Promise {<state>: "fulfilled", <value>: Result}
  - Promise {<state>: "rejected", <value>: Error}

## Fetch (make HTTP request)

- global function
- takes (url, options object)
- makes HTTP requests in browser

- Challenge 1
  - fetch request to "https://pokeapi.co/api/v2/pokemon/pikachu"
    --> make result variable, log
  - Sample: `fetch('url').then((response) => {});`
  ```javascript
  let pokePromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  console.log(pokePromise); // Promise {<state>: "pending"}
  ```

## .then (access promise value)

- method
- instructions for when promise is fulfilled
- &rarr; access promise value, what the fetch returns

  ```javascript
  promise.then((result) => console.log(result));
  ```

- Challenge 2
  - Access request result with .then(), log this response object
  ```javascript
  pokePromise.then((resultResponseObject) => console.log(resultResponseObject)); // Response {type:"cors", url:"https:...", redirected: false, status: 200, ok: true, ...}
  ```

## .json().then() Accessing Response body

- access what .then returns
- depends on parsing format, for JSON use method `response.json()`
- this is also an async promise &rarr; need another .then()
- again over-nesting?

  ```javascript
  fetch('url')
    .then((response) => response.json())
    .then((data) => console.log(data));
  ```

- Challenge 3

  - use response.json() &rarr; .then() log body &rarr; should show Pokémon object

  ```javascript
  pokePromise
    .then((response) => response.json())
    .then((bodyArrPokObj) => console.log(bodyArrPokObj)); // Object { abilities: [],}
  ```

## .catch() Errors

- will run if promise rejected
- instead of .then()
- instruction on how to use the error

  ```javascript
  fetch('broken-url')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  ```

- Challenge 4
  - remove url inside fetch &rarr; view browser warning
  - add .catch() to log error
  ```javascript
  // Uncaught (in promise) TypeError: Window.fetch: ... <anonymous>
  pokePromise.catch((error) => console.log(error)); // TypeError: ...
  ```

## Workshop

- Use fetch to get user from GitHub API
- Generate access token in request URL if too many requests: <https://github.com/settings/tokens>
- Token: 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

1.  Write:

    ```javascript
    function getUser(username) {
      //fetch user profile from "https://api.github.com/users/USERNAME_HERE"
    }
    //Callable like:
    getUser('oliverjam')
      .then((user) => console.log(user))
      .catch((error) => console.log(error));

    //Solution:
    const getUser = (username) =>
      fetch(`https://api.github.com/users/${username}`).then((response) =>
        response.json()
      );

    getUser('oliverjam').then(console.log).catch(console.error);
    ```

2.  Write:

    ```javascript
    function getRepos(getUser_responseObject) {
      //fetch repos with userObject {repos_url}
    }
    getUser(user).then(getRepos).log([repos]);

    //Solution:
    const getRepos = (user) =>
      fetch(user.repos_url).then((response) => response.json());

    getUser('oliverjam').then(getRepos).then(console.log).catch(console.error);
    ```

- Repos live in: 'https://api.github.com/users/0bubbles0/repos'
- Should return [{id: , node_id:}, {}]

3. Fetch Multiple Profiles

   - Read Promise.all: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all>
   - Promise.all(iterable of promises) &rarr; returns 1 Promise [results]
   - will resolve when all inputs resolve (or there were none)
   - will reject if any inputs reject/error
   - `Promise.all([p1, p2, p3]).then(console.log); // Array [3, 42, 'foo']`
   - useful for grouping related async tasks
   - Similar: `Promise.allSettled()`

   ```javascript
   const oliverPromise = getUser('oliverjam');
   const starsuitPromise = getUser('starsuit');

   Promise.all([oliverPromise, starsuitPromise])
     .then(console.log)
     .catch(console.error);
   ```

<!--

```javascript

```

-->
