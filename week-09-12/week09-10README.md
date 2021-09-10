# Week 9 Schedule: Testing

<https://learn.foundersandcoders.com/course/syllabus/pre-app-9/schedule/>

- Schedule
- Habits
- Workshops
- Research
- Project

## Learning Goals

- [ ] We can test the functionality of our app
- [ ] We can check that passing a given input into our functions returns the expected output
- [ ] We can write testable, modular functions

## Schedule

- [x] **W**: Learn Test
- [x] **W**: Unit Testing (90min)
- [x] **W**: Integration Testing (90min)
- [x] **W**: TDD (90min)

- [ ] **R**: Checking Code

- [ ] **R**: Testing methodologies
- [ ] **R**: Resources
- [ ] **P**: To-do list tracker
- [ ] **E**: Computer Science
- [ ] **J**: Employer Q&A

## Exercise

- [ ] Execute
  - [ ] SQL
  - [ ] Concurrency
  - [ ] Modern JS
- [ ] Computer Science, Khan Academy
- [ ] fcc finish JS

## Workshops

- [x] Learn Test helpers: <https://learn.foundersandcoders.com/workshops/learn-testing/>
- [x] Unit Testing (90 min): <https://learn.foundersandcoders.com/workshops/learn-unit-testing/>
- [x] Integration Testing (90 min): <https://learn.foundersandcoders.com/workshops/learn-integration-testing/>
- [x] TDD (): <https://learn.foundersandcoders.com/workshops/tdd-array-methods/>

## Research

- [ ] **Checking Code**

  - [ ] Prettier in VSCode: <https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code>
  - [ ] ESLint: <https://eslint.org/docs/user-guide/getting-started>
  - [ ] Static, Unit, Integration, E2E: <https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests>
  - What are all the different ways to make sure our code is correct?
  - What is Prettier? How might it help us write better code?
  - What is static analysis? How can a linter help us avoid bugs?
  - What are the pros and cons of unit, integration and end-to-end tests?

- [ ] **Testing methodologies**

  - [ ] TDD: <https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80>
  - [ ] Behaviour-driven-dev & functional testing: <https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2>
  - [ ] Test Coverage: <https://www.martinfowler.com/bliki/TestCoverage.html>
  - How do different testing methodologies try to improve the way we write tests?
  - What is Test-Driven Development (TDD)? Can it help us write better code?
  - What is Behavior-Driven Development (BDD)? How do we translate user requirements into automated tests?
  - What is test coverage? Can this tell us about the quality of our tests?

- [ ] Good Practices, Make your Test Fail: <https://kentcdodds.com/blog/make-your-test-fail>

## Project: To-do list tracker

- <https://learn.foundersandcoders.com/course/syllabus/pre-app-9/project/>

Your project this week is to build a to-do list tracker. It should allow users to create, complete and delete tasks from a list.

You should have automated tests covering all the main user stories. Each story below has a test “shell”. You have to fill out the body to create a failing test for each story. You should then see the tests pass as you add features to your app.

Writing tests before code can be difficult. It means you have to plan in advance roughly what your implementation will look like. E.g. “find the todo input and add some example text” implies that you’ll be using a text input in your final design. It’s okay if you end up having to change your tests a bit when you implement the feature—you’ll get better at predicting this with practice.

This is the minimum amount of testing required: you should write additional tests to cover the rest of your code as needed.

### User Story

- Add tasks to a list so that I can keep track of them
  - `test("Submitting a new task adds it to the list", () => {// test goes here});`
- Check things off my list so that I can see what I’ve done
  - `test("Checking an entry marks it as complete", () => { // test goes here });`
- Delete things from the list if I don’t need to do them anymore

  - `test("Deleting an entry removes it from the list", () => { // test goes here });`

- As a motor-impaired user, I want to:

  - Use all the features of the app without a mouse

- **Stretch**: As a busy person, I want to: Filter out completed to-dos from my list so that I can focus on what’s left to do
  - `test("Toggling the filter hides completed tasks from the list", () => { // test goes here });`

### Acceptance Criteria

- A working to-do list
- Tests for (at least) each user story
- A responsive, mobile-first design
- Ensure your app is accessible to as many different users as possible

## Guest

- **Lightful** (Jamie Elliot): Wed
- **SOON\_** (James Warren): Th

## Spill

- Contact: Learning Goals:
  - Stack:
    - React anything special
    - a11y, database, back-end
    - Workflow, Practices, Documentation, gitHub, Project
    - UI, Design?
  - Tools:
    - Mac/Linux/WSL/Windows
    - Platforms
