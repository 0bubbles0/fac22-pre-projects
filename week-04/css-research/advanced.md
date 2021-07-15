# Advanced CSS

## Content
- Tasks
- Reading List
  - Further Readings
- Notes
  - 1
  - 2
  - 3

## Tasks
  - **What are “combinator” selectors? Can you provide examples where they’re useful?**
    - Descendants any/direct (`header p`, `header > p`), Siblings any/adjacent (`h3 ~ p`, `h3 + p`)
    - Describe relationship/context of selected elements
  - **What are pseudo-elements? Can you provide examples where they’re useful?**
    - ::before, ::after, ::first-line, ::first-letter, ::selection
    - items not in HTML (non-semantic), design-only
    - e.g. layers, shapes, (list) icons, 3D, gleaming button, fade-out, print-only, labels
  - **How might you create custom-styled checkboxes using both of the above?**
    - HTML: `<input type="checkbox"><label>Agree</label>`
    - visually hide `input[type=checkbox] { clip: }`
    - `input[type=checkbox] + label::before { content:''; transition: }`
    - `input[type=checkbox] + label::after { content:''; transform: rotate(0deg); transition:}`
    - `input[type=radio]:checked + label::after { transform: rotate(45deg) }`


## Reading List
- [x] selectors: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors>
- [x] pseudo elements: <https://css-tricks.com/pseudo-element-roundup/>
- [x] Underengineer radio & checkboxes: <https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html>

### Further Readings

## Notes

### What are “combinator” selectors? Can you provide examples where they’re useful?

Syntax | Description
--- | ---
`header p { }` | **all** p **descendants** inside a header
`header > p { }` | **all** p directly nested **children**  
`col || td { }` | **all** td in the col scope  
`h3 ~ p { }` |  **all** p after a h3 inside the same parent &rarr; **general siblings**
`h3 + p { }` | **all** p directly after a h3 inside same parent &rarr; **adjacent siblings** 

- Describe relationship/context of selected elements

### What are pseudo-elements? Can you provide examples where they’re useful?
- `p::first-line` &rarr; first line of all p
- ::before, ::after
- items not in HTML &rarr; useful for non-semantic design-only items
- e.g.: canvas layers, borders, equal height columns, shapes (heart, star, icons, geometrics, special typographics, 3D), custom list icons, tooltips
- clearfix hack, simulate float: center, have text columns
- elements only displayed/expanded if there is space (with @media )
- gleaming button: outside pseudo block with gradient transparent-white-transparent; :hover transition-move across button
- page fade-out
- print-only directions &rarr; e.g. hyperlinks have url displayed in print-outs:
  ```css
    @media print {
      a[href]:after {
        content: " (" attr(href) ") ";
      }
    }
  ```
- labels: 
  ```html
    <pre rel="CSS"></pre>
  ```
  ```css
    pre:after {
      content: attr(rel);
      position: absolute;
      top: 22px;
      right: 12px;
    }
  ```


### How might you create custom-styled checkboxes using combinators & pseudo-elements?
- Why: simple, semantic, accessible, slim code

- HTML:
  ```html
    <input type="checkbox">
    <label>Agree</label>
  ```
- CSS: hide visually, but not from assistive technology:
  ```css
    input[type=radio],
    input[type=checkbox] {
      position: absolute;
      top: auto;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      width: 1px;
      height: 1px;
      white-space: nowrap;
    }
    input[type=radio] + label::before,
    input[type=checkbox] + label::before {
      content: '';
      background: #fff;
      border: .1em solid rgba(0, 0, 0, .75);
      background-color: rgba(255, 255, 255, .8);
      display: block;
      box-sizing: border-box;
      float: left;
      width: 1em;
      height: 1em;
      margin-left: -1.5em;
      margin-top: .15em;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all .1s ease-out;
    }

    input[type=radio] + label::before {
      border-radius: 100%;
    }
    input[type=radio]:checked + label::before {
      background-color: #00f;
      box-shadow: inset 0 0 0 .15em rgba(255, 255, 255, .95);
    }
    input[type=checkbox] + label::after {
      display: block;
      content: '';
      position: absolute;
      top: .5em;
      left: .5em;
      width: 1em;
      height: 1em;
      transform: rotate(0deg);
      transition: all .1s ease-out;
    }

    input[type=checkbox]:checked + label::after {
      top: .4em;
      left: .7em;
      width: .4em;
      height: .8em;
      border-right: .25em solid #00f;
      border-bottom: .25em solid #00f;
      transform: rotate(45deg);
    }
  ```
- transition makes it smoother, em scalable
- dark mode: give sufficient contrast (text, border, outline, shadow)
- may want to revert to defaults for print


