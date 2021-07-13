# A11y: ARIA Labels

## Contents
  - Questions
  - Reading List
  - Tasks
  - Notes
    - A11y
    - Semantic HTML
    - Progressive Enhancement
    - ARIA labels

## Questions

## Reading List
  - [x] My Notes from [Week 1 - 2](../../week-01-02/workshops/accessibility-workshop/accessibility.md)

  - [x] What a Year of Learning and Teaching Accessibility Taught Me: <https://www.24a11y.com/2019/what-a-year-of-learning-and-teaching-accessibility-taught-me/>
  - [x] Why, How, and When to Use Semantic HTML and ARIA: <https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria/>


  - [ ] Inclusive Design Principles: <https://inclusivedesignprinciples.org/#provide-comparable-experience>
  - [ ] Resilient Web Design (*Jeremy Keith*): <https://resilientwebdesign.com/>
  - [ ] When to use ARIA: <https://www.w3.org/TR/using-aria/>
  - [ ] Technical vs Practical a11y (Derek Featherstone): <http://feather.ca/inclusion/aea2019>
<!--
  - [ ] 
  - [ ] 
-->

## Tasks
- ARIA labels &rarr; what & why used?
  - What: 
  - Why
  - Use:
  - When
  - How:
- Include ARIA labels in my projects

## Notes

### A11y
- A11y &rarr; simple, robust interface
- opens page to browser defaults, SEO, screen readers, RSS readers, Reading Mode, smart devices (interoperability), readablity of code
- consider practically inclusive UX vs. *technical* a11y
  - different user profiles &rarr; physical/personal/technical limitations
  - debated issues, e.g. **Modal overlays** &rarr; tricky first-focusable elements: none, close-button/prompt, no-context-input-field &rarr; answer lies in best UX
- **Experts**:
  - Leonie Watson: <https://tink.uk>
  - Derek Featherstone <http://feather.ca/>
  - Scott O’Hara <http://scottohara.me/>
  - Marcy Sutton <https://marcysutton.com/>
  - Rob Dodson <https://www.youtube.com/channel/UCJAtIv92EJqzG2EOzo92sdQ>
  - Alice Boxhall <https://twitter.com/sundress>
  - Marco Zehe <https://marcozehe.de/>
  - Eric Bailey <https://ericwbailey.design/>
  - Steve Faulkner <https://twitter.com/stevefaulkner>
  - The Paciello Group <https://www.paciellogroup.com/>

### Semantic HTML
- preference
- `<input type="tel">` can sometimes open keypad on mobiles 
- Landmarks: header, nav, main, footer
- enables quick navigation with hot keys
- UX can drive semantics (ARIA can help here): an item doesn't always need to look like what it does (e.g. a video-player "link" is actually a `<button>`, because it causes an action, but doesn't take you anywhere)


### Progressive Enhancement
  - prepare for user to not have access to JavaScript: <https://kryogenix.org/code/browser/everyonehasjs.html>
  - create resilient/a11y base (semantic HTML) &rarr; layer CSS & JS as appropriate
  - e.g. Tabs &rarr; HTML: table of contents, then multiple sections(title, content), style hook
    - JS: use interactivity to change layout & display
- **Bad**:
  - non-descriptives: div, span
  - CSS-only styling to make an item look like something &rarr; deprives of intuitive/useful defaults


### ARIA labels
- last resort
- can provide more a11y context &rarr; *describe, but don't change content/behaviour*
- last resort to close a11y gaps (try to solve most with HTML)
- **A**ccessible **R**ich **I**nternet **A**pplications, w3 standard for assistive technologies
- **Good** examples:
  - can make error message be read on-focus
      `<input type="text" name="first-name" id="first-name" aria-describedby="first-name-error">`
  - describe toggle-button (JS to change false/true) or Tab widgets (`role=tab`, `tablist`, `tabpanel`):
    ```html
      <button aria-expanded="false">Toggle content</button>
      <div hidden>Some content</div>`
    ```
  - accessible tooltip: <https://sarasoueidan.com/blog/accessible-tooltips>
- **Bad** examples:
  - `<div role="checkbox" aria-checked="false" tabindex="0"></div>`
    better: `<input type="checkbox">` &rarr; good defaults


