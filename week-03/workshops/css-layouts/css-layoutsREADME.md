# CSS Layouts - fac Workshop

## Content
- Questions


## Questions

## Summary
### Do
- CSS goal &rarr; as reusable as possible &rarr; specialised **modifier classes**
- Consistency &rarr; pre-determine allowed values for width
- `max-width` for *text*, ~80 characters
### Don't

## Layouts
- **Flow**: 
  - block elements take full-width. 
  - Inline only necessary width, don't interrupt flow
  - Auto-wrap of content
- **Flex**ible **box**:
  - *1D* alignment of items
  - item placements not exact, just generally automatically ok
  - no auto-wrap, only on demand
- **Grid**:
  - *2D* layouts
  - precise item placements &rarr; less flexible

## CSS Variables
- inherited &rarr; from parent

## Center Text
  - should limit `max-width`, with fall-back value
  - position with margin
    - `margin: auto;` &rarr; take up all available space
    - `margin-left: auto;` &rarr; pushes to right
    - center a text-box
      ```css
        .center { 
          max-width: 30rem; 
          margin: [?] auto;
        }
      ```

## Classes
- For **Consistency**
- **Modifier Classes**
  - Pre-determine a few allowed values
    ```css
      .width-sm {
        max-width: 20rem;
      }
      .width-lg {
        max-width: 40rem;
      }
      .width-xl {
        max-width: 60rem;
      }
    ```
- **Stack**
  - give parent style-class to space children
  - Parent &rarr; `<div class="stack-sm">`
  - All children &rarr; `.stack-sm > * { ... }`
  - All children after a sibling &rarr; `.stack-sm > * + * {...}`
  - E.g. flexbox, grid, margin
  - Pre-set values, e.g. 0.5rem, 1rem, 2rem, 4rem
  - Can nest stacks



## Tasks
1. `challenge-1/index.html`
    - insert css classes in style, add center+width classes in HTML
    - header &rarr; 60rem;
    - 1st section &rarr; 40rem;
    - contact-section &rarr; 20rem;
1. `challenge-2/index.html`
  - fix vertical spacing
  - insert stack CSS, add classes to HTML
  - 2rem b/w sections
  - 1rem b/w elements in a section
  - 0.5rem b/w a form-field and its label