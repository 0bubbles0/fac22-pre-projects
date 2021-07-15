# Week 4 Overview

## Content
- Questions
- Schedule
- Summary & Sessions
- Additional Readings
- Homework

## Questions

## Schedule
- [x] **P**: Dark Mode
- [x] **P**: JS30 Panels
- [x] **P**: JS30 ArrayCardio2
- [x] **R**: Architecture (BEM, Composition, Guidelines)
- [x] **R**: Responsive Design (Units, length, mobile-first)
- [x] **R**: Advanced (selectors, pseudo elements, underengineer radio)


- [ ] **R**: Guest Prep


- [ ] **R**: Challenges: Write & Read
- [ ] **P**: Portfolio Gallery &rarr; refactor

## Summary & Sessions

## Additional Readings:

### CSS
- [ ] 
- [ ] 

### Design
- [ ] Refactoring UI E-Book: <https://www.refactoringui.com/book>
- [ ] 
- [ ] 

### JavaScript
- [ ] 
- [ ] 


## Homework

### Routine
- [ ] Execute
- [ ] Khan Academy: 
  - [ ] Computer Science
  - [ ] Algebra 1, 2
- [ ] Terminal, GitHub
- [ ] Twitter

### Projects
- [x] Dark Mode (Bobby Sebolao): <https://github.com/bobbysebolao/learn-css-variables>
- [x] Array Cardio 2 (JS30):
- [x] Flex Panels Gallery (JS30):
- [ ] My Portfolio Gallery &rarr; refactor

### Research
- [x] **CSS Architecture**
  - [x] Guidelines: <https://cssguidelin.es/>
  - [x] BEM: <http://getbem.com/introduction/>
  - [x] Composition: <https://every-layout.dev/rudiments/composition/>
  - Questions:
    - Why are CSS naming conventions useful? 
      - Structure, Speed, Reusable &rarr; BEM (`.button__state--danger {}`)
    - When might specificity become a problem? 
      - Inconsistency, Later adjustment, collaboration, large projects
    - How can composition help us build UIs?
      - consistent layout system, component-based UI, (`.box-m {}`), primitive/reusable/responsive classes (e.g. space children vertically)

- [x] **Responsive Design**
  - [x] Units: <https://every-layout.dev/rudiments/units/>
  - [x] length: <https://css-tricks.com/the-lengths-of-css/>
  - [x] mobile-first: <https://zellwk.com/blog/how-to-write-mobile-first-css/>
  - Questions:
    - What CSS units should we use for dimensions? What are absolute and relative units?
      - rem (block elements), em (inline elements), ch (max-width), vw & vh (responsive spacing), vmin & vmax (find true screen size), % (based on parent)
    - When should you use a media query? Are they only for screen size?
      - mobile (min) or desktop (max) first or combination. Can make hard break
      - Others: `@media not|only mediatype[all/print/screen/speech] and (expressions, size, orientation:landscape) { }`
        - high-contrast
    - How can mobile-first CSS make responsive styling easier?
      - defaults often work fine on mobiles

- [x] **Advanced CSS**
  - [x] selectors: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors>
  - [x] pseudo elements: <https://css-tricks.com/pseudo-element-roundup/>
  - [x] underenginerr radio: <https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html>
  - Questions:
    - What are “combinator” selectors? Can you provide examples where they’re useful?
      - Descendants any/direct (`header p`, `header > p`), Siblings any/adjacent (`h3 ~ p`, `h3 + p`)
      - Describe relationship/context of selected elements
    - What are pseudo-elements? Can you provide examples where they’re useful?
      - ::before, ::after, ::first-line, ::first-letter, ::selection
      - items not in HTML (non-semantic), design-only
      - e.g. layers, shapes, (list) icons, 3D, gleaming button, fade-out, print-only, labels
    - How might you create custom-styled checkboxes using both of the above?
      - HTML: `<input type="checkbox"><label>Agree</label>`
      - visually hide `input[type=checkbox] { clip: }`
      - `input[type=checkbox] + label::before { content:''; transition: }`
      - `input[type=checkbox] + label::after { content:''; transform: rotate(0deg); transition:}`
      - `input[type=radio]:checked + label::after { transform: rotate(45deg) }`

### Set JS Challenges
- [ ] Read: understand a code block
- [ ] Solve a task

### Guest Prep
- [ ] Tom Dignan (Apolitical)
- [ ] Siebe Van Dijck (This is Undefined)
  - [ ] Research: website/blog, team, social media
  - [ ] Prep Questions
