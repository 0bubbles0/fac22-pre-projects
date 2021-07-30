# Fetch & Promise Notes (2h15)

## Questions

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

1.  Write:

    ```javascript
    function getUser(username) {
      //fetch user profile from "https://api.github.com/users/USERNAME_HERE"
    }
    //Callable like:
    getUser('oliverjam')
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
    ```

2.  Write:

```javascript
function getRepos(getUser_responseObject) {
  //fetch repos with userObject {repos_url}
}
getUser(user).then(getRepos).log([repos]);
```

<!--


```javascript

```

-->
