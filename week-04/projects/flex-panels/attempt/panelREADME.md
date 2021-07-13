# Title

## Content
1. Questions
1. Resources
1. Learn
1. Task
1. Steps
    - HTML
    - CSS
    - JavaScript
1. Variation Ideas


## Questions
## Resources
- [ ] Video Tutorial: <https://courses.wesbos.com/account/access/60cd2fa48981fd4f947005bc/view/194130264>
- [ ] 

## Learn


## Steps

### CSS
- Initial:
  - **Flexbox**: turn on
  - children-width &rarr; as wide as possible &rarr; `flex: 1;`
  - children p in nested flexbox &rarr; `justify-content: center; align-items: center;`
  - hide first & last p with `transform: translateY(-100%);`, change to 0% for .open-active
- .open &rarr; flex-shrink


### JS
- grab all each panel
  - forEach addEventListener "click"
  - listen for transition-end of flex(-grow) &rarr; show p

function toggleOpen(){
  this.classList.toggle('open');
}

panels.forEach( addEventListener("click", toggleOpen) )

  .panel onclick
  -  this panel
    - add class ".open"
    - grow: transition(bounce)
    - p first/last: transition (slide in), show
    
  -  other panels
    - shrink: transition(bounce)

  -  unclick this panel
    - shrink: transition(bounce)
    - p first/last: transition (slide out), hide
    
  -  grow this panel
    shrink all other panels
    
    

## Variation Ideas
- Portfolio: Pop-in Sidebar of Topic-Week-Schedule
  - OR: collapse/expand Week Sections

