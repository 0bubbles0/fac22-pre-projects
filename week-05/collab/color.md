# Color Palettes

## Content

- Questions
- Reading List
- Goals
- Light Mode
- Dark Mode
- Color Palettes

## Questions

## Reading List

- Recommendations: <http://colorsafe.co/>
- Contrast Checker: <https://contrastchecker.com/>
- Google Dark theme Guidelines: <https://material.io/design/color/dark-theme.html>

## Goals

- Light Mode
- Dark Mode
- A11y
- Professional

## Light Mode

| area   | color                 |
| ------ | --------------------- |
| bg     | #efefef = hsl(0,0,94) |
| bg     | #ede9fc               |
| card   |
| font   | #444                  |
| link   |
| accent | #6847ec               |
| accent | #7600a8               |
| lines  |

## Dark Mode

| area                   | color                   |
| ---------------------- | ----------------------- |
| bg                     | #121212                 |
| card (desaturated 200) | #4c4c4c = hsl(0, 0, 30) |
| font                   | #000, #fff              |
| link                   |
| accent                 | #f64747                 |
| lines                  |

```html
<!--Toggle Dark Mode, can go elsewhere in this HTML-->
<div class="switch-container">
  <span class="switch" id="dark-mode-switch">
    <input type="checkbox" id="dark-mode-checkbox" tabindex="0" />
    <span class="slider"></span>
  </span>
  <label class="text--large" id="dark-mode-label" for="checkbox-dark-mode"
    >To Dark Mode</label
  >
</div>
```

```css
:root {
  --color-lines: #444;
  --color-lines-sections: #ddd;
  --color-background: #ede9fc;
  --color-nav: rgba(255, 255, 255, 0.95);
  --color-accent: #6847ec;
  --color-link: #6847ec; /*I don't know if we want to do 1 or 2 special font colors?*/
}

.dark {
  --color-background: #121212;
  --color-lines: #fff;
  --color-nav: #444;
  --color-accent: #d400d4;
  --color-link: #d400d4;
  /*

  /*Toggle Switch*/
.switch-container {
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch {
  background: none;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 35px;
  margin-right: 0.5em;
}

.switch input {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: all;
}

.slider {
  background: var(--color-lines-sections);
  /*width: 100%;*/
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 35px;
  pointer-events: none;
  transition: 0.5s;
}

.slider:before {
  /*actual button*/
  content: '';
  background-color: var(--color-accent);
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 4px;
  left: 4px;
  border-radius: 50%;
  pointer-events: none;
  transition: 0.2s;
}

/*Toggle after click*/
input:checked + .slider {
} /*could change toggle-color on click*/
input:checked + .slider:before {
  transform: translateX(26px);
}
```

```js
// Toggle Dark Mode
const body = document.documentElement;
const darkSwitch = document.querySelector('#dark-mode-switch');
const darkButton = document.querySelector('#dark-mode-checkbox');
const darkLabel = document.querySelector('#dark-mode-label');

function switchOutlineOn() {
  darkSwitch.style.outline = '1px dotted red';
}

function switchOutlineOff() {
  darkSwitch.style.outline = '0';
}

function switchDark(e) {
  if (e.target.checked) {
    body.classList.add('dark');
    darkLabel.textContent = 'To Light Mode';
  } else {
    body.classList.remove('dark');
    darkLabel.textContent = 'To Dark Mode';
  }
}

darkButton.addEventListener('focus', switchOutlineOn);
darkButton.addEventListener('focusout', switchOutlineOff);
darkButton.addEventListener('change', switchDark);
```

## Color Palettes

![Kitten](/media/2018/08/kitten.jpg){: width=150 height=100 style="float:right; padding:16px"}
