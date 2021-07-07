# Change CSS-Variables with JS

## Content
1. Questions
1. Resources
1. Learn
1. Task
1. Steps
    - HTML
    - CSS
    - JavaScript
1. Variation Ideas

## Questions
## Resources

- [x] Files (*GitHub*): <https://github.com/wesbos/JavaScript30>
- [x] Tutorial Video (*20 min*): <https://courses.wesbos.com/account/access/60cd2fa48981fd4f947005bc/view/194837696>

## Learn
- CSS Variables can now immediately be updated with JS
- JS .querySelectorAll() &rarr; puts results into NodeList, which is *almost* like an array &rarr; can't use many methods on it
- dataset will show all attributes of an element

## Task
## Steps
  ### HTML
    - Given: input types range & color
### CSS
    - make variables: --base, --spacing, --blur
    - `img { background, padding, filter: blur()}`
  ### JavaScript
    - need to understand what user chose on range+color inputs
    - add px or hex
    - update css var
    - reload?

&rarr;
    - select inputs
    - add eventListeners(change & mousemove)
    - check unit format &rarr; HTML again has self-made `data-sizing="px"`
    - make HTML name attribute same as CSS-var &rarr; can update

## Variation Ideas
- Violin Tuner: 440 &rarr; 442