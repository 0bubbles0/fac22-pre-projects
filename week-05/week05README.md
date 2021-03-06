# Week 4 Overview

## Content

- Questions
- Schedule
- Summary & Sessions
- Additional Readings
- Homework

## Questions

## Schedule

- [x] **R**: Prettier
- [x] **R**: ESLint
- [x] **P**: JS30: 14 Tool Tips
- [x] **P**: JS30: Multiple Checkboxes

- [ ] **P**: Collab Agency

- [ ] **P**: Portfolio refactor
- [ ] **R**: Challenges: Create GitHub repo, Read & Write
- [ ] **R**: Guest Prep

## Summary & Sessions

## Additional Readings:

- Keybinding to Comment out several lines of code in one go: Ctrl+K+C / Ctrl+K+U

## Homework

### Routine

- [ ] Execute: Array
- [ ] Khan Academy:
  - [ ] Computer Science
  - [ ] Algebra 1
- [ ] Terminal, GitHub
- [ ] Twitter

### Collab Project: Sprint

#### Task

- Your challenge for the next two weeks is to build an agency website for your team.
- Your website should give potential clients:

  - An introduction to your agency
  - Information about each member of your team

- **User Stories**:

  1. As a potential **client**, I want to:

  - [x] **B** See information about each member of your team so that I can know who you are (E1)
  - [x] Browse your website on mobile, tablet, and desktop devices (E3)
  - [x] Click to navigate to different sections of your webpage (E1)
  - [x] **B** Visit your website at a publicly accessible domain name (E2)

  2. Additionally, as a **visually** impaired user, I want to:

  - [x] **B** Navigate your website using keyboard controls (E2)
  - [x] Hear my screen reader describe the content on your website (E1)

- **Acceptance Criteria**
  - [x] Navigation menu
  - [x] ‘About us’ section
  - [x] Images, text and external links
  - [x] Semantic HTML elements
  - [x] Stretch Goal: Use the automatic trigger functionality of your GitHub project board.

#### Background Prep

- [x] **git branches** &rarr; fac workshop, notes, make crib sheet
- [x] **Scrum** method

#### Steps

##### Prep

- [x] **Task**:
  - [x] Understand tasks
  - [x] distribute with A
- [x] **Set up**:
  - [x] clone repo locally
  - [x] file structure?
  - [x] Start GitHub Project board, Issues?
- [x] **Gather Content**:
  - [x] Topics: cartoon characters?
  - [x] Text
  - [x] img
  - [x] links
- [ ] **Plan Page**:
  - [ ] Content
  - [ ] _HTML_ Structure &rarr; semantic
  - [ ] _CSS_ Layout &rarr; devices
  - [ ] _CSS_ Style &rarr; color, font
  - [ ] ? _JS_ Functionality ?
  - [ ] **Check** with
    - [ ] acceptance criteria
    - [ ] a11y
    - [ ] cohort

### Research Spikes

- [x] **Prettier**

  - [x] Read: <https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code>
  - [x] Download
  - Have one configuration file for cohort?

    - E.g. `.prettierrc.json` or .js, .yml, .yaml., .toml

    ```json
    {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": false,
      "singleQuote": true
    }
    ```

- [x] **ESLint**

  - [x] Read:
    - [x] <https://eslint.org/docs/about/>
    - [x] <https://eslint.org/docs/user-guide/getting-started>
    - [x] All Rules<https://eslint.org/docs/rules/>
    - [x] Configuring: <https://eslint.org/docs/user-guide/configuring/>
    - [x] Wesbos GitHub: <https://github.com/wesbos/eslint-config-wesbos>
    - [x] WesBos YouTube Tutorial ESLint & Prettier: <https://www.youtube.com/watch?v=lHAeK8t94as>
    - [x] Make package.json file with $ npm init: <https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/>
  - [x] Set up in a project:

    - `$ npm install eslint --save-dev`
    - `$ npm init` &rarr; make package.json file
    - `$ npx eslint --init` &rarr; set up config file
    - `.eslintrc.{js,yml,json}`
    - `javascript { "rules": { "semi": ["error", "always"], "quotes": ["error", "double"] } } ` &rarr; "error", "warn" or "off" OR 2, 1, 0
    - `$ npx eslint yourfile.js` &rarr; run ESLint on yourfile - Perhaps: need to install prettier in project &rarr; `$ npm i prettier`

    - Müll:
      package.json &rarr; //"main": "eslint-sugg.js",

- [x] **Questions**

  - **Checking our code**: What different ways can we make sure our code is consistent?
    - Formatting: indentation (tab width), quotation ("" or ''), semicolons, line-breaks, trailing comma &rarr; **Prettier Ext**
  - What is **Prettier**? How might it **help** us write better code?
    - auto-**formatter**: can automatically do "", (), indentations ... on save
    - don't need to waste time fixing these things
    - consistent formatting rules across collaboration projects
  - How can a **linter** help us avoid **bugs**?
    - JS parsing with Espress, AST, pluggable &rarr; evaluates code patterns.
    - Can help with consistency, bugs by showing warning/errors for syntax, and own linting rules
    - gives feedback on my **code quality**
    - Prereqs: Node.js(^10.12.0, or >=12.0.0) with SSL support

- [ ] **Further Reading**
  - [ ] Setting up efficient Prettier in ESLint: <https://indepth.dev/posts/1282/setting-up-efficient-workflows-with-eslint-prettier-and-typescript>

### Projects: Own

- [x] 14 Dev Tool Tips (JS30): 11 Min
- [x] Multiple Checkboxes (JS30): 11 Min
- [ ] My Portfolio Gallery &rarr; refactor

### Set JS Challenges

- [ ] Source: material/algorithm from _Execute_, _Khan Academy_
- [x] Create GitHub Repo for these
- [ ] Read: understand a code block
- [ ] Solve a task

### Guest Prep

- [ ] **Companion Studio**: Myles Palmer
- [ ] **Spill**: Matt King
  - [ ] Research: website/blog, team, social media
  - [ ] Prep Questions
