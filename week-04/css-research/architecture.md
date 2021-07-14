# CSS Architecture

13:30 - 14:30
## Content
- Tasks
- Reading List
  - Further Reading
    - BEM
- Notes
  - General
  - Specificity
  - Naming conventions
  - BEM
  - Composition

## Tasks
- **Why are CSS naming conventions useful?**
  - What: BEM (`.button__state--danger {}`), OOCSS, SMACSS, SUITCSS, Atomic
  - Give code **structure**:
    - identify/find **reusable** parts &rarr; consistency
    - readability/**maintenance** later, collaboration
  - **Speed**: coding, fixing, updating, loading/performance
  - For large & legacy projects
  - HTML: shows dependencies/function/where-to-use

- **When might specificity become a problem?**
  - interfering with regular cascade &rarr; **confusing** later / in **collaboration** / large projects
  - creating **over-specific** selector &rarr; can't easily increase specificity later &rarr; **knock-on** effects of renaming or adding more specific selector
  - interdependencies &rarr; not easily adjusted
  - **Do**: 
  - Keep specificity low, **consistent** selector levels
  - Hack to safely increase specificity location-independently &rarr; `.site-nav.site-nav{}`
- **Don't**: id, nest/qualify/chain selectors (.a .a1, .a > .a1, nav ul li)

- **How can composition help us build UIs?**
  - Composition is useful for consistent **layout** system, component-based UI
  - primitive classes &rarr; 1 purpose (e.g. space children vertically), intrinsically responsive
  - reusable &rarr; consistent UI spacing
  - e.g. `.box-m {}`, stack, width, cluster, center, cover, sidebar with -xs, -s, ..., -xl
  - vs inheritance-principle items, e.g. `.dialog__header {}`

## Reading List
  - [x] Guidelines: <https://cssguidelin.es/>
  - [x] BEM: <http://getbem.com/introduction/>
  - [x] Composition: <https://every-layout.dev/rudiments/composition/>

### Further Reading

#### BEM
- [ ] Why: <http://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/>
- [ ] Syntax: <http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/>
- [ ] Guidelines: <http://cssguidelin.es/#bem-like-naming>
- [ ] Small projects: <http://www.smashingmagazine.com/2014/07/17/bem-methodology-for-small-projects/>
- [ ] Brandwatch: <http://www.slideshare.net/MaxShirshin/bem-it-for-brandwatch>
- [ ] Inheritance & Cascade: <http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/>
- [ ] SASS, SMACSS, BEM style guide: <https://medium.com/objects-in-space/objects-in-space-f6f404727>
- [ ] Scale, Legacy: <http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/>
- [ ] modular BEM and SASS: <http://www.bluegg.co.uk/building-my-health-skills-part-3/>
  - [ ] Part 3: <http://www.bluegg.co.uk/building-my-health-skills-part-3/>
- [ ] CSS preprocessor performance (Nicole Sullivan): <http://www.youtube.com/watch?v=0NDyopLKE1w>

## Notes

### General Guidelines
- CSS can be difficult language: global operation, leaky, location-dependent, encapsulation, inheritance, specificity

### When might specificity become a problem?
- using over-specific selector &rarr; how become more specific later on?
- interrupts regular CSS cascade, inheritance, flow
- complicates project: bloat, collaboration communication, codebase manipulation
- fixing specificity problem: often complicated & costly & knock-on-effects
  - renaming &rarr; accidental effects on other items
  - adding more specific selector &rarr; downward spiral
  - `!important` &rarr; shows we have a specificity problem (exception `.hidden {display: none !important;}`)
- **Do**: 
  - Keep specificity low, consistent selector levels
  - Hack to safely increase specificity location-independently &rarr; `.site-nav.site-nav{}`
- **Don't**: id, nest/qualify/chain selectors (.a .a1, .a > .a1, nav ul li)

### Why are CSS naming conventions useful?
- Especially for large & legacy projects:
- Code is more strict, transparent, informative:
  - class name should tell about function, where to use, related things
  - more useful in HTML > CSS
- Code organisation & efficiency &rarr; writing speed/amount, loading time
  - Design consistency, efficiency, performance
- Different **Methodologies**
  . | Description | Link
  --- | --- | ---
  BEM | Block Element Modifier | <http://getbem.com/introduction/>
  OOCSS | objects to separate container & content | <http://oocss.org/>
  SMACSS | style guide in 5 categories | <http://smacss.com/>
  SUITCSS | structured class names, meaningful hyphens | <http://suitcss.github.io/>
  Atomic | primitive style pieces | <http://github.com/nemophrost/atomic-css>

### BEM
- **What**
  - Complete methodology, here look at naming convention
  Block | (__Element) | --Modifier
  --- | --- | ---
  Any DOM node that can have class | block-children, name has no standalone meaning, tied to block | 
  page, header, footer, logo, container, content, sub-content, menu, checkbox, input, button | title, caption, item, copyright | big, blue, fixed, checked, disabled, highlighted
  - Understanding examples: .person__head, .person--tall, .room__door, .room--kitchen
  - e.g. `.button__state--danger {}`, .page
  - HTML element may need multiple of these class variations
- **Benefits**
  - Use with **SASS**
  - **HTML**: let's you understand which items **relate** to each other
  - **Reusable** within/outside project, build your library
  - **Modular**: avoids cascading problems
  - **Structure**: easy to understand later/by someone else &rarr; easier maintenance

- Have separate classes as JS hooks &rarr; `.js-btn` to avoid accidental deletion

### Composition

- What is Composition
- Composition over inheritance principle &rarr; small independent 
- *Inheritance* &rarr; `.dialog__header {}` &rarr; think about what UI-parts should be named instead of their functionality
- *Composition* 
  - component-based UI
  - layout primitives &rarr 1 parent-children task, e.g. "space children vertically"
  - `.box-l, .stack-m, .cluster-xl, .center-xs {}, .cover, .sidebar` 
  - make each intrinsically responsive
  - reusable together can create dialog, login, slide...
  - consistent spacing, "look"

  - **Composite** layouts &rarr; nested, component layouts
      - 1 component &rarr; space/pad/separate elements vertically/horizontally

       - **modifier classes** &rarr; e.g. `.width-sm { max-width: 40rem;}`
    - **composite** &rarr; each class does 1 task, e.g. space children vertically
  - or **CSS Variables**: `var(--width, 40rem)`
