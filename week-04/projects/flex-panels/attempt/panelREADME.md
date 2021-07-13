# Flex Panel Gallery


## Questions
## Resources
- [x] Video Tutorial: <https://courses.wesbos.com/account/access/60cd2fa48981fd4f947005bc/view/194130264>

## Learn
- Flexbox: flex, flex-grow, nest, hide with Y-coordinate
- JS: transitionend

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

