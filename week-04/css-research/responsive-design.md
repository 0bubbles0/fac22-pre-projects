# Responsive Design

## Content
- Tasks
- Reading List
  - Further Readings
- Notes
  - 1
  - 2
  - 3

## Tasks
  - **What CSS units should we use for dimensions? What are absolute and relative units?**
    unit | context
    ---|---
    . | **Font-Relative**
    rem | for block elements, 1rem = :root font-size
    em | for inline elements, SVG icons. 1em = 1 current rem
    ch | set (text) element max-width
    . | **Viewport-Relative**
    vw | viewport width: responsive spacing
    vh | viewport height: responsive spacing
    vmin, vmax | good to find true screen, sizemin(vh, vw) or max(vh, vw)
    % | based on parent

  - **When should you use a media query? Are they only for screen size?**
    - mobile first (min), desktop first (max), or combination (cater for tablets)
    - can make a hard break. Rather use viewport units, flexbox, grid?
    - Other media queries:
      `@media not|only mediatype[all/print/screen/speech] and (expressions, size, orientation:landscape) { }`

  - **How can mobile-first CSS make responsive styling easier?**
    - take full advantage of defaults that work fine for mobile
    - code simpler, shorter, faster performance

## Reading List
- [x] Units: <https://every-layout.dev/rudiments/units/>
- [x] length: <https://css-tricks.com/the-lengths-of-css/>
- [x] mobile-first: <https://zellwk.com/blog/how-to-write-mobile-first-css/>

### Further Reading
- Mobile-first
  - Build responsive layouts with Susy (zellwk.com)

## Notes


### What CSS units should we use for dimensions? What are absolute and relative units?
unit | context
---|---
. | **Absolute**
px | basis for other lengths, JS
in | 96px
cm | 37.8px, physical measurement, also mm
. | **Font-Relative**
rem | for block elements, 1rem = :root font-size
em | for inline elements, SVG icons. 1em = 1 current rem
ch | set (text) element max-width
ex | (text) element height
pt | also pc
. | **Viewport-Relative**
vw | viewport width: responsive spacing
vh | viewport height: responsive spacing
vmin, vmax | good to find true screen, sizemin(vh, vw) or max(vh, vw)
% | based on parent


- Which units are there:
  - **px**: screen-light-dots, geometries vary/manipulated (sub-pixel rendering makes it fuzzy, screen resolutions, zoom), disregards browser settings
  - *Font-based* units: **rem, ch, ex**: relative to user's default font size
    - `:root { font-size: 1rem;}` is default
    - *dependent*: **em** relates to immediate context 2em = 2 * context-rem &rarr; good for inline-elements
    - *ch, ex**: width of a 0 & height of an x
  - *Viewport* units: **vw, vh**
    - can scale/enlarge proportionately from min &rarr; `:root { font-size: calc(1rem + 0.5vw);}`

### When should you use a media query? Are they only for screen size?
- can make a hard break. Rather use viewport units?


### How can mobile-first CSS make responsive styling easier?
- **What** is mobile-first approach
  - in design and coding (especially CSS)
  - code styles for mobile devices, then add/override with
  - `@media (min-width: ...px)`
  - vs. desktop-first approach &rarr; `@media (max-width: ...px)`
- **Why** mobile-first
  - **simplifies** code, because smaller screens may have simpler designs
  - Often **default** widths etc will work fine on mobile, would have to reinstate if using desktop-first
- **Combine** @media min & max
  - keep code **DRY**, e.g. for tablets





<!--
### Which dimension units: absolute, relative

### Length

### When @media

### How is mobile-first easier?
-->



