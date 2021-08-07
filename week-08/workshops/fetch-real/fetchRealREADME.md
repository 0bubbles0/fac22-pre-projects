# Fetch real-world

## Questions

- [ ] Blob: <https://developer.mozilla.org/en-US/docs/Web/API/Response/blob>

## Reading List

- [x] fac Workshop: <https://learn.foundersandcoders.com/workshops/real-world-fetch/>
- [ ] GET Options Object: <https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters>
- [ ] new FormData() interface: <https://developer.mozilla.org/en-US/docs/Web/API/FormData>
- [ ] Object.fromEntries(): <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries>

## Summary

- use fetch to handle errors, submit data
- **Submit** data to Server:

  ```javascript
  fetch('https://echo.oliverjam.workers.dev/json', {
    method: 'POST',
    body: JSON.stringify(input),
    headers: { 'content-type': 'application/json' },
  });
  ```

- **Catch any error** &rarr; any status != 200

  ```javascript
    .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
    })
  ```

- Access all **form-entries**: get only email OR turn all into Object
  ```javascript
  const formData = new FormData(x);
  const formEmail = formData.get('email'); // name=""
  const formDataObj = Object.fromEntries(formData);
  ```
- **Display Message** upon form-submit
  - html `<output id="board"></output>`
    ```javascript
    const msgH2 = document.createElement('h2');
    msgH2.textContent = '';
    const image = document.createElement('img');
    image.src = '';
    board.append(msgH2, image);
    ```

## Notes

### HTTP errors

- fetch only does HTTP requests &rarr; even 500 server errors counts as successful response

  - **Challenge**:

    - add fetch to "https://echo..../status/404
    - add .then(), .catch()

    ```javascript
    fetch('https://echo.oliverjam.workers.dev/status/404')
      .then(console.log) // this runs Response { ok:false, status: 404 }
      .catch(console.error);
    ```

- Manually make non-200 status as error
  - response.ok is true (200), false (404, 502)
  - **Challenge**:
    - have .then() check response.ok &rarr; if not &rarr; error with .status
    - does .catch run now?
    - throwing error inside .then rejects it
      ```javascript
      fetch('https://echo.oliverjam.workers.dev/status/404')
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          console.log(response);
          // return response.blob();
        })
        .catch(console.error); //this runs now Error: 404
      ```

### Submitting data

- make any HTTP request type with fetch
  - GET doesn't allow to submit data to server
  - add:
    ```javascript
    fetch('example.com', {
      method: 'POST',
    });
    ```
- options object: <https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters>

- **Challenge**

  - make fetch with POST and "https://echo.oliverjam.workers.dev/json"
  - Send a JSON body with object&properties
  - include "content-type"

    ```javascript
    const data = { name: 'oli' };

    fetch('https://echo.oliverjam.workers.dev/json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .catch(console.error);
    // returns { name: "oli", id: 2665, created: "2021-08-07T15:55:34.829Z"}
    ```

### Forms & User input

- use `<form>` to receive user data
- disable submit-button sending default-request
- use fetch to make own submission request
  - `querySelector` to access entered input values
  ```javascript
  document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault(); //disable submit auto-request
  // use fetch to make own submission request
  }))
  ```
- **Challenge**
- make form with 2 inputs, 1 submit button
- add submit.eventListener(preventDefault)
- querySelector to get each input value
- use fetch to POST as JSON to previous URL
- log server-response

### Challenge: new FormData()

- Built-in API mirrors form behaviour
- `new FormData(myForm)` creates default-like FormData interface with all input values
  - FormData interface <https://developer.mozilla.org/en-US/docs/Web/API/FormData>
- turn it into object with `Object.fromEntries(data)`
  - Object.fromEntries(data): <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries>
- **Challenge** use `new FormData()`to get input values &rarr; turn into object

  ```javascript
  <form>
    <input type="text" id="fName" placeholder="Name" />
    <input type="email" id="email" placeholder="Email" />
    <button type="submit" id="submit">
      Submit
    </button>
  </form>;
  const myForm = document.querySelector('form');

  myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = Object.fromEntries(new FormData(myForm));
    fetch('https://echo.oliverjam.workers.dev/json', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .catch(console.error);
  });
  //{id: 7796, created: "2021-08-07T16:55:14.402Z"}
  ```

## Workshop

- use **PokéAPI** to make Pokémon search page
  - <https://pokeapi.co/>
- form, input-search, button-submit
- form("submit") &rarr; request input-value on "https://pokeapi.co/api/v2/pokemon/NAME"
  - success: show Pokémon & sprite
  - fail: relevant error
- **Stretch Goal**: Show other poke-stats. Style results

```html
<form id="poke-search-form">
  <input
    type="text"
    id="poke-search-field"
    name="poke-search-field"
    placeholder="Search Pokémon by name"
  />
  <button type="submit" id="submit">Search</button>
  <output id="poke-board"></output>
</form>
```

```javascript
const pokeForm = document.querySelector('#poke-search-form');
const pokeBoard = document.querySelector('#poke-board');

//Capitalise 1st Letter
function capitaliseStr1(str) {
  let letters = str.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
}

pokeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //Clear Result Board
  pokeBoard.innerHTML = '';

  //Receive User Input
  const formData = new FormData(pokeForm);
  const pokeName = formData.get('poke-search-field'); //name=""
  // const pokeName = document.querySelector('#poke-search-field').value;

  //Look up User Input
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((poke) => {
      // console.log(poke);
      //pokeBoard +<p>${name}</p> + <img src="${spriteURL}">
      const pokeh2 = document.createElement('h2');
      pokeh2.textContent = capitaliseStr1(pokeName);

      const image = document.createElement('img');
      image.src = poke.sprites.front_default;
      image.alt = `Image of ${pokeName}`;

      pokeBoard.append(pokeh2, image);
    })
    // if the request is unsuccessful
    .catch((error) => {
      console.log(error);
      if (error.message === '404') {
        output.textContent = `⚠️ Couldn't find "${name}"`;
      } else {
        output.textContent = '⚠️ Something went wrong';
      }
    });
});
```
