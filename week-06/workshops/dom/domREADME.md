# DOM Manipulation Workshop & Spike

## Questions

## Reading List

- [x] fac Workshop: <https://learn.foundersandcoders.com/workshops/dom-challenge/>
- [ ] NodeList (_MDN_): <https://developer.mozilla.org/en-US/docs/Web/API/NodeList>
- [ ] Content Template Element (_MDN_): <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template>
- [ ] Template element example: <https://codepen.io/oliverjam/pen/yLNEOQO?editors=1010>

## Workshop

| Method/Property                                            | Description                                 | Link                                                                         |
| ---------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------- |
| **DOM element**                                            |                                             | <https://developer.mozilla.org/en-US/docs/Web/API/Element>                   |
| **NodeList**                                               | can only .forEach, or make `Array.from(x)`  | <https://developer.mozilla.org/en-US/docs/Web/API/NodeList>                  |
| **Access**                                                 |                                             |                                                                              |
| `document.querySelector(_css selector_)`                   |                                             | <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector>    |
| `document.querySelectorAll()`                              | makes NodeList                              | <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll> |
| **Create**                                                 |                                             |                                                                              |
| `document.createElement('button')`                         | in JS memory, not on page display           | <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>    |
| `div.appendChild(x, 'word')`                               | ? can display it on page?                   | <https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild>          |
| `parent.append`                                            |                                             | <https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append>         |
| **Attributes** access with .                               | HTML attributes = JS DOM-object properties  |                                                                              |
| `document.querySelector("button").id = "my-id";`           | changes id name                             |                                                                              |
| `x.setAttribute` and `x.removeAttribute`                   | for aria-labels                             | <https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute>      |
| `x.classList.add("my-class"), .remove, .toggle, .contains` | DOMTokenList methods                        | <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList#methods>      |
| **Content**                                                |                                             |                                                                              |
| `.textContent`                                             | overwrite existing text/DOM-element content |                                                                              |
| `.append`                                                  | add text behind existing content            |                                                                              |
| **Style**                                                  |                                             |                                                                              |
| `x.style.background = blue`                                | inline                                      |                                                                              |
| `x.classList.add("dark")`                                  | handle CSS class                            |                                                                              |

## Spike: Advanced DOM

### How can we use advanced DOM features to make rendering complex UIs easier.

### What is a NodeList?

- How is it different from an array?
- What’s the different between “live” and “static” NodeLists?

### What is the <template> element?

- How can we use this to render dynamic UI?
