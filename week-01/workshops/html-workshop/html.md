# HTML

## Contents

- Questions
- Reading List
- Workshop: Semantic HTML (fac)

## Questions

## Reading List

- [ ] Semantic HTML (fac Workshop): <https://learn.foundersandcoders.com/workshops/semantic-html/>
- [ ] Safari Reader Mode: <https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9>
- [ ] Non-semantic HTML structure: https://oliverjam.es/blog/complete-guide-to-making-web-pages/

## Workshop: Semantic HTML

### Founders and Coders (22/06/2021)

#### Semantic HTML

- `<button>` better than `<div class="button">`, because it **lets browser help us**
  - Browser defaults on styles & complex behaviours &rarr; **faster** coding, only need to overwrite few things
  - Machine-readability &rarr; increases **functionality**
  - Browser defaults as **backup** if CSS loading error
  - **Accessibility** &rarr; accommodates assistive technologies (voice, screen readers), user customisation, easy navigation

#### Checklist

- Important page area &rarr; `<header>, <footer>`, etc.
- Start label of a new section &rarr; `<h_>`
- Link &rarr; `<a href="_">`
- JS trigger &rarr; `<button>`
- Asking for user input &rarr; `<form><label><input></form>`
- Styling handle &rarr; `<div class="flex-parent">`, `<span class="text-bold">`, etc.

#### Task

- Rewrite HTML page &rarr; Replace all `<div>`s
- *Bonus*: Improve non-semantic errors, check <https://oliverjam.es/blog/complete-guide-to-making-web-pages/>

#### Steps:
1. Terminal
1. copy & paste download command
1. `cd semantic-html`
1. `ls`
1. `code challenge.html` &rarr; VS Code
1. `open challenge.html` &rarr; standard Browser (or `firefox -P`)
