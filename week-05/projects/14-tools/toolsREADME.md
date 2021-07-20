# JS30: 14 DevTools

## Questions

## Resources

- [ ] Video Tutorial: <>

## Learn

- Dev tools
- Console tricks

## Tips

### Browser Dev Tools

### Find script line for a reaction

- HTML element &rarr; right-click &rarr; break on...attr modification &rarr; perform action &rarr; open html-file in debugger &rarr; show script line

### Console.

| Console           | Description                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Table**         | `console.table(dogs);`                                                                                                                                  |
| **Interpolation** | `console.log('Hello I am a %s string!', ':poop:');` will insert :poop: for %s &rarr; better use ES6 ``                                                  |
| **Style**         | `console.log('%cI am some great text','font-size:50px;');`                                                                                              |
| **Warn**          | `console.warn('console.warn(), but doesnt work?');`                                                                                                     |
| **Error**         | `console.error('console.error()');`                                                                                                                     |
| **Info**          | `console.info('console.info');`                                                                                                                         |
| **Test**          | ` console.assert(p.classList.contains('ouch'), 'That is wrong!'); //writes test case`                                                                   |
| **Clear**         | `console.clear();` clears console                                                                                                                       |
| **View Element**  | `console.log(p); //whole element`<br>`console.dir(p); //dropdown: class list, children, datasets, style, properties, methods that live on this element` |

**Group**

```javascript
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.groupEnd(`${dog.name}`);
});
```

**Count**

```javascript
console.count('A');
console.count('A');
console.count('B');
console.count('A');
console.count('B');
console.count('B'); // B: 3
console.count('A'); // A: 4
```

**Time/Speed**

```javascript
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
```

## Variation Ideas

```

```
