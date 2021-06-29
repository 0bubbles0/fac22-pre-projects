# Clock Project JavaScript30

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

- [ ] Files (*GitHub*): <https://github.com/wesbos/JavaScript30>
- [ ] Tutorial Video (*10 Min*): <https://courses.wesbos.com/account/access/60cd2fa48981fd4f947005bc/view/194130581>

## Learn

- Use CSS to style (circle) & animate (timed rotation)
- Use time methods/functions in JavaScript
- Update CSS-property-value with JavaScript

## Task
- Take current time from JavaScript
- Update hands (seconds, min, hr) based on current

## Steps
- Browser Dev Tools:
  - on handstry transform: rotate(330deg)

### HTML
- clock
  - clock-face
    - hand hour-hand
    - hand min-hand
    - hand sec-hand

### CSS
- hands change rotation:
- .hand {
  transform-origin: 100%; /*sets center fixed*/
  transform: rotate(90deg); /*sets 12.00 default. Update with JS*/
  transition: all 0.05s; /*could transition itself*/
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1); /*ease-in-out or any other cubic-bezier*/
}

### JavaScript
- know current time
  - second-hand: console.log('Hi') &rarr; Browser Tools update rhythm ok?
    - console.log(now.getSeconds()) &rarr; prints 56, 57 ... 
- update .hand-rotation accordingly 
  - grab hands for sec, min, hr
  - calculation to degrees
    - Seconds:
      - (seconds/60) *360 &rarr; still off, b/c CSS rotation of 90deg
    - Minutes:
      - ((min / 60) * 360) + 90
    - Hours:
      - if (hr >= 12) {(((hr - 12) / 12) * 360) + 90;}
      - ((hr / 12) * 360) + 90;
  - At full minute, there might be a "jump" &rarr; could at 0 take away transition: all 0.05s; (with if statements)


```javascript
//Second
const secondHand = document.querySelector('.second-hand');
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log('Hi');
}
setInterval(setDate, 1000);
...
```

## Variation Ideas
- Digital Clock
- Style Clock: Add hour labels
  - Day / Night or Sunrise/Sunset &rarr; light/dark mode
- Different Time Zones
- Set custom time that isn't right now
- Nest clock in page

