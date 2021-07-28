# DOM Manipulation Workshop & Spike

## Questions

- How is this for separation of concerns?

## Reading List

- [x] fac Workshop: <https://learn.foundersandcoders.com/workshops/dom-challenge/>
- [x] NodeList (_MDN_): <https://developer.mozilla.org/en-US/docs/Web/API/NodeList>
- [x] Content Template Element (_MDN_): <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template>
- [x] Template element example: <https://codepen.io/oliverjam/pen/yLNEOQO?editors=1010>

## Workshop

| Method/Property                                                        | Description                                                  | Link                                                                         |
| ---------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **DOM element**                                                        |                                                              | <https://developer.mozilla.org/en-US/docs/Web/API/Element>                   |
| **NodeList**                                                           | can only .forEach, or make `Array.from(x)`                   | <https://developer.mozilla.org/en-US/docs/Web/API/NodeList>                  |
| **Access**                                                             |                                                              |                                                                              |
| `document.querySelector()`                                             | use CSS selector                                             | <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector>    |
| `document.querySelectorAll()`                                          | makes NodeList                                               | <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll> |
| `element.nextElementSibling()`                                         | chooses next sibling of element                              | <>                                                                           |
| **Create**                                                             |                                                              |                                                                              |
| `document.createElement('button')`                                     | in JS memory, not on page display<br>can't immediately chain | <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>    |
| `div.appendChild(x, 'word')`                                           | ? can display it on page?                                    | <https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild>          |
| `parent.append`                                                        |                                                              | <https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append>         |
| **Attributes** access with .                                           | HTML attributes = JS DOM-object properties                   |                                                                              |
| `document.querySelector("button").id = "my-id";`                       | changes id name                                              |                                                                              |
| `x.setAttribute('attr', 'value')` and `x.removeAttribute('attr')`      | for aria-labels, can use ?: for value                        | <https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute>      |
| `x.classList.add("my-class")`<br>`.remove`<br>`.toggle`<br>`.contains` | DOMTokenList methods                                         | <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList#methods>      |
| **Content**                                                            |                                                              |                                                                              |
| `.textContent`                                                         | overwrite existing text/DOM-element content                  |                                                                              |
| `.append`                                                              | add text behind existing content                             |                                                                              |
| **Style**                                                              |                                                              |                                                                              |
| `x.style.background = blue`                                            | inline                                                       |                                                                              |
| `x.classList.add("dark")`                                              | handle CSS class                                             |                                                                              |
| `x.hidden`                                                             | hide/display, opposite is `!x.hidden`                        |                                                                              |

## Spike: Advanced DOM

- **How can we use advanced DOM features to make rendering complex UIs easier.**

### Node List

- **What is a NodeList?**
  - object;
  - collection of nodes, show with `Node.childNodes`, `document.querySelectorAll()`
  - `forEach()`, `Array.from()`, `NodeList.length`, for older browsers `Array.prototype.forEach()`
- **How is it different from an _array_?**
  - also has `length`, `item`,
  - YES `for of` NO `for...in`
- **What’s the different between _live_ and _static_ NodeLists?**

  - **Live** &rarr; collection content auto-updates with DOM changes
    - e.g. `Node.childNodes`
  - **Static** &Rarr; collection content unaffected by DOM changes
    - e.g. `document.querySelectorAll()`
  - helps decision: cache steps, length?, how iterate

| `NodeList`        | Description                                         |
| ----------------- | --------------------------------------------------- |
| `NodeList.length` | # of nodes in list                                  |
| `.item()`         | by index, null if out-of-bounds, use for non-JS DOM |
| `.entries()`      | returns iterator for key-value pairs                |
| `.forEach()`      |
| `.keys()`         | returns iterator for keys                           |
| `.values()`       | returns iterator for values                         |

Read-only

| `Node`                             | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
|                                    | **Read-only**                                                |
| `.parentNode`, `.parentElement`    |                                                              |
| `.childNodes`                      | live NodeList of all children (vs static docu.quSelectAll()) |
| `.firstChild`, `.lastChild`        | `null` if none                                               |
| `.nextSibling`, `.previousSibling` | next node in tree, `null`if none                             |
| `.nodeName`                        | 'audio', '#text', '#document', html-tag,                     |
| `.nodeType`                        | element, attr, text, cdata, document...                      |
|                                    | **Edit**                                                     |
| `.textContent`                     | return/set text of it + children                             |
| `.normalize()`                     | clean up text                                                |
| `.nodeValue`                       | return/set current node value                                |
| `.cloneNode()`                     | node (& content)                                             |
| `.compareDocumentPosition()`       | against other node in other document                         |
| `.isEqualNode()` `.isSameNode()`   |                                                              |
| `.contains(x)`                     | true false?                                                  |
| `.hasChildNodes()`                 |                                                              |
| `.insertBefore()`                  | as a child                                                   |
| `.appendChild(x)`                  | add/move child here                                          |
| `.replaceChild()`                  |                                                              |
| `.removeChild()`                   |                                                              |

### `<template>`

- **What is the `<template>` element?**

  - mechanism for HTML content that won't be rendered immediately (only checked valid?)
  - works for Metadata, flow, phrasing, script-supporting content
  - attributes &rarr; global, content (read-only for DOM subtree)
  - Template element: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement>
  - constructur for new dynamic elements
  - careful of DocumentFragment!
  - see also `<slot>`, `<shadow>`
  - e.g.
    - table template for new rows
    - cards
    - gallery

  ```html
  <table id="table">
    <thead>
      <tr>
        <td>#</td>
        <td>Description</td>
      </tr>
    </thead>
    <tbody>
      <!--insert template-->
    </tbody>
  </table>

  <template id="newRow">
    <tr>
      <td></td>
      <td></td>
    </tr>
  </template>
  ```

  ```javascript
  let tbody = document.querySelector('tbody');
  let template = document.querySelector('#newRow');
  let clone = template.content.cloneNode(true);
  var td = clone.querySelectorAll('td');
  td[0].textContent = '';
  td[1].textContent = '';
  tbody.appendChild(clone);
  ```

- **How can we use this to render dynamic UI?**
  - _HTML_: `<template>` arranges element hierarchy, class/id
  - _CSS_: pre-style classes for `.card`, `.card__image`, `.card__title`
  - _JS_:
    - access (destination, `template.content.cloneNode(true)`)
    - function createCard() { database &rarr; nest into html-tags}
  - _Database_: can store anywhere else, centrally?
  - Auto-generate page content, easy addition of new items
  - e.g. photo gallery, table row
