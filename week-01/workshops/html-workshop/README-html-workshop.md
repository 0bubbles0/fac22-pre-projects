# Semantic HTML - Notes on Founders and Coders Workshop

## Contents

- Questions
- Reading List
- Reading notes
- Checklist
  - Semantics
  - Non-semantics
- Task
- Steps

## Questions

## Reading List

- [x] Semantic HTML (fac Workshop): <https://learn.foundersandcoders.com/workshops/semantic-html/>
- [ ] Safari Reader Mode: <https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9>
- [x] Non-semantic HTML structure: https://oliverjam.es/blog/complete-guide-to-making-web-pages/


## Reading Notes

- `<button>` better than `<div class="button">`, because it **lets browser help us**
  - Browser defaults on styles & complex behaviours &rarr; **faster** coding, only need to overwrite few things
  - Machine-readability &rarr; increases **functionality**
  - Browser defaults as **backup** if CSS loading error
  - **Accessibility** &rarr; accommodates assistive technologies (voice, screen readers), user customisation, easy navigation


## Checklist
### Semantics:
- Important page area &rarr; `<header>, <footer>`, etc.
- Start label of a new section &rarr; `<h_>`
- Link &rarr; `<a href="_">`
- JS trigger &rarr; `<button>`
- Asking for user input &rarr; `<form><label><input></form>`
- Styling handle &rarr; `<div class="flex-parent">`, `<span class="text-bold">`, etc.


### Non-semantics:
- Structure:
  - my-page (folder)
    - index.html (homepage of website)
      ```
        <!DOCTYPE html>
        <html lang="en"> (Root element, set language)
          <head>
            <meta charset="utf-8"> (Set doc encoding)
            <meta name="viewport" content="width=device-width, initial-scale=1"> (Responsive sizing)
            <title>Page Title</title>
            <link rel="icon" href="/favicon.ico"> (little icon on tab-bar. Check <https://realfavicongenerator.net/>)
            <link rel="stylesheet" href="/my-styles.css">
            <meta name="description" content="This is for search engines">
            <script src="/my-script.js" defer></script>
          </head>
          <body>
            <h1>Page Title</h1>
          </body>
        </html>
      ```


## Tasks:

- [x] Rewrite HTML page &rarr; Replace all `<div>`s
- [x] *Bonus*: Improve non-semantic errors, check <https://oliverjam.es/blog/complete-guide-to-making-web-pages/>
- [x] Compare my attempt to solution.


## Steps:

- [x] Terminal: **Set up** files:
    - `$ npx degit 'foundersandcoders/coursebook/src/workshops/semantic-html/starter-files#main' semantic-html`
    - `$ cd semantic-html`
    - `$ ls`
    - `$ code challenge.html` &rarr; VS Code
    - `$ open challenge.html` &rarr; standard Browser (or `firefox -P`)
- [x] HTML: Rename **`<div>`** tags:
    - `<header>`, `<main>`, `<footer>`
    - `<sections>`, headings, `<p>`, `<img>`, quote
- [x] HTML: Fix form:
    - wrap in `<form>`, `<label>`, useful attributes, placeholder, fix button
- [x] HTML: Fix **`<head>`**:
    - language, utf-8, viewport
    - title, description, keywords, author
- [x] CSS: Basic **style**:
    - Page margin
    - img responsive
    - headings center
    - form inputs: stack
    - footer: horizontal line, centre text

