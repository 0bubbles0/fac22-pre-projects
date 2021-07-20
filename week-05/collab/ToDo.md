# BAgency

## This is Barbara and Adriana's agency website.

#### Our website should give potential clients:

- An introduction to your agency
- Information about each member of your team

### User Stories

#### As a potential client, I want to:

- [ ] **B** See information about each member of your team so that I can know who you are (E1)
  - [x] Placeholder content: About us (BAgency), Team (cat and dog)
  - [ ] Professional Content:
    - [ ] Real agency websites: content, layout, colors
    - [ ] cohort
- [ ] **A** Browse your website on mobile, tablet, and desktop devices (E3)
- [x] **A** Click to navigate to different sections of your webpage (E1)
- [x] **B** Visit your website at a publicly accessible domain name (E2)
  - [x] Find out: does this mean GitHub hosting or real domain?

#### Additionally, as a visually impaired user, I want to:

- [x] **B** Navigate your website using keyboard controls (E2)
  - [x] Read: anything special to consider?
- [ ] **A** Hear my screen reader describe the content on your website (E1)

### Acceptance Criteria

User stories come with [acceptance criteria](https://blog.easyagile.com/how-to-write-good-user-stories-in-agile-software-development-d4b25356b604) - a detailed scope of a user’s requirements.

- [x] Navigation menu
- [x] ‘About us’ section
- [x] Images, text and external links
- [ ] Semantic HTML elements
- [x] Stretch Goal: Use the automatic trigger functionality of your GitHub project board.

### Bonus

- Design:
  - [ ] color:
    - [ ] Normal mode &rarr; professional, a11y
      - idea &rarr; background: lightgrey
      - [ ] color palettes
    - [ ] Dark mode &rarr; a11y
      - [x] CSS:
        - [x] var
        - [x] .dark
      - [x] HTML:
        - [x] toggle button
          - [ ] Layout
      - [x] JS:
        - [x] var
        - [x] f
        - [x] eventListener
  - [ ] font: styling, size
- Layout:

  - [ ] JS30 flex panels?

  #### Toggle Button

  - Dev.to: <https://dev.to/danielpdev/html-css-only-toggle-button-598f>
  - HTML

    - dev.to:

      ```html
      <div class="toggle-container">
        <input type="checkbox" />
        <div class="slider round"></div>
      </div>
      ```

      ```css
      .toggle-container {
        position: relative;
        display: inline-block; /*if div*/
        width: 80px;
        height: 40px;
        pointer-events: none;
      }
      .toggle-container input {
        /*fill container*/
        opacity: 0;
        width: 100%;
        height: 100%;
        pointer-events: all;
      }
      .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        background-color: #808080;
        transition: 0.4s;
        pointer-events: none;
      }
      .slider::before {
        content: '';
        position: absolute;
        height: 24px;
        width: 24px;
        left: 8px;
        bottom: 8px;
        background-color: #fff;
        transition: 0.2s;
        pointer-events: none;
      }
      .slider::after {
        position: absolute;
        content: 'off';
        height: 24px;
        width: 24px;
        right: 10px;
        bottom: 6px;
        transition: 0.2s;
        pointer-events: none;
        color: #fff;
      }
      /*after click*/
      input:checked + .slider {
        background-color: #2196f3;
      }
      input:checked + .slider:before {
        transform: translateX(40px);
      }
      input:checked + .slider:after {
        content: 'on';
        left: 8px;
      }
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
      ```

  - week-04 workshop:

    ```html
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
      <em>Toggle Dark Mode!</em>
    </div>
    ```

    ```css

    ```

    ```css

    ```
