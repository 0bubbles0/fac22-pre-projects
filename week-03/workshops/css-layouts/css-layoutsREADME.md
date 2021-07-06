# CSS Layouts - fac Workshop

## Content
- Questions
- Summary
  - Do
  - Don't
- Notes
  - Layouts
  - Consistency
    - Modifier Classes
    - CSS Variables
    - Stack
  - Center Content
  - Flexbox: Row
  - Grid: control children size & location
- fac-Workshop Tasks
- SmolCSS
- Every Layout



## Questions

## Summary
### Do
- `* {box-sizing: border-box;}`
- **Consistency** & reusability &rarr; pre-determine some allowed values in specialised 
  - **modifier classes** &rarr; e.g. `.width-sm { max-width: 40rem;}`
    - **composite** &rarr; each class does 1 task, e.g. space children vertically
  - or **CSS Variables**: `var(--width, 40rem)`
- **Center** content:
  - max-width
  - **margin** left-right to auto
- Between rows: **Stack**
  - for margin, gap...
  - HTML-**parent**: `class="stack-sm"`
  - CSS b/w siblings: `.stack-sm > * + * {...}`
- Within row: **flexbox** for auto-distribution
  - can add `.align-start {...}` etc. modifier classes
    ```css
      .row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
    ```
- Specific distribution: **grid**
    ```css
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
          gap: 1rem;
        }
    ```


## Notes

### Layouts

- **Flow**: 
  - block elements take full-width. 
  - Inline only necessary width, don't interrupt flow
  - Auto-wrap of content
- **Display** Property:
  - All values: <https://developer.mozilla.org/en-US/docs/CSS/display>
  - Most common: inline, block, none, flex, grid
- Border-box: Prevent margin/padding misbehaving
  - `* {box-sizing: border-box;}`
- **Flex**ible **box**:
  - *1D* alignment of items
  - item placements not exact, just generally automatically ok
  - no auto-wrap, only on demand
- **Grid**:
  - *2D* layouts
  - precise item placements &rarr; less flexible


### Consistency
#### Modifier Classes
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
- Or with CSS **variables**
  - inherited from parent: `.width { max-width: var(--width, 40rem); }`

#### Stack
  - give parent style-class to space children
  - Parent &rarr; `<div class="stack-sm">`
  - All children &rarr; `.stack-sm > * { ... }`
  - All children after a sibling &rarr; `.stack-sm > * + * {...}`
  - E.g. flexbox, grid, margin
  - Pre-set values, e.g. 0.5rem, 1rem, 2rem, 4rem
  - Can nest stacks


### Center content
  - e.g. text
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

### Flexbox: Row
  - Make it with a flexbox & `wrap` &rarr; won't need @media
  - `gap` &rarr; auto for row & column, works for flexbox (not Safari) & grid
  - `align` &rarr; height for row-flex. Usually center
  - `justify` &rarr; push items along width
    ```css
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
      }
      .align-start {
        align-items: start;
      }
      .justify-end {
        justify-content: flex-end;
      }

      <div class="row justify-end">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
      </div>
    ```

### Grid: Control children size & location
- Each child gets specific/consistent size & location (or auto)
- E.g. image gallery. All children same size, auto-amount per row
    ```css
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        gap: 1rem;
      }
    ```


## fac-Workshop Tasks

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

1. `challenge-3/index.html`
    - make flex row for logo (start) & nav (end) &rarr; `justify-content: space-between;`
    - insert CSS code, add classes to HTML 

1. `challenge-4/index.html`
    - Give classes to HTML
    - Don't touch CSS


## SmolCSS
- small snippets of modern layout CSS: <https://smolcss.dev/>
- Responsive grid, flexbox
- Size Range:
  - Use --min, minmax(), min()
  - clamp(min, ideal, max) &rarr; `clamp(1rem, 5%, 3rem)`
- Grid:
  - `place-content: center;`
  - good sidenav: `grid-template-columns: fit-content(20ch) minmax(min(50vw, 30ch), 1fr);`
- Image:
  - Frame: `aspect-ratio: 4/3;`
  - Img: `display: block; object-fit: cover;`


## Every Layout: Boxes
- Separate **concerns**:
  - **Aesthetic**, branding
    - utilise global/general selectors &rarr; `:root`, *, p...
    - **utility classes** for final adjustments &rarr; `.font-size\:big {...!important;}`
  - **Layout**
    - **Composite** layouts &rarr; nested, component layouts
      - 1 component &rarr; space/pad/separate elements vertically/horizontally
    - `display: flex` &rarr; element is still a block, its children will behave like flexboxes
  - **Sizing**:
    - element-size (width for inline, height for block) depends on inner content & outer context &rarr; browser defaults very good, limit interference
    - `box-sizing: content-box;` &rarr; desirable for [Center layout](https://every-layout.dev/layouts/center)
- **Units**:
  - Make own font-size &rarr; `:root { font-size: calc(1rem + 0.5vw);}`
  - em for inline elements (SVG icons)
  - rem for block elements
  - ch for width