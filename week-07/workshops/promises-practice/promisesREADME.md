# Promises Practice Workshop notes

## Questions

## Reading List

- [x] Workshop: <https://learn.foundersandcoders.com/workshops/promise-practice/>

## Summary

- Promises to avoid async callback hell

## Notes

- Sequence important for: animation, dataRequest-to-another-API
- Don't always know code-run-length &rarr; tell them to wait
- How avoid over-nesting? &rarr; Promises
- .then() returns a new promise &rarr; can chain to define running-order (possibly of previously defined functions)

## Challenge 1

- Recreate traffic lights with promises &rarr; avoid over-nesting
- Write light(colour) to log with pre-defined wait(1000)

```javascript
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function light(colour) {
  return wait(1000).then(() => console.log(colour));
}

light('green')
  .then(() => light('amber'))
  .then(() => light('red'))
  .then(() => light('amber'))
  .then(() => light('red'))
  .then(() => light('green'))
  .then(() => light('finished'));
```

## Challenge 2

- Use fetch to request data from "https://pokeapi.co/api/v2/pokemon/pikachu"
- Once your code has the response it should grab the species.url property and make a new request to that
- Once your code has that response it should grab the shape.url property and make a final request to that
- Log the final response body. It should look something like this:

```javascript
const fetchURL = (url) => fetch(url).then((response) => response.json());

fetchURL('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((pokemon) => fetchURL(pokemon.species.url))
  .then((species) => fetchURL(species.shape.url))
  .then(console.log)
  .catch(console.error);

/*Result
  {
    "awesome_names": [...],
    "id": 8,
    "name": "quadruped",
    "names": [...],
    "pokemon_species": [...]
  }
*/
```
