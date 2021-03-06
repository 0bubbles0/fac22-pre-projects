# Debugging: JS & Network

## Content

- Questions
- Reading List
- Summary
- JS: Async
- Debugging: JS
- Debugging: Network

## Questions

## Reading List

- [ ] Web Workers: <https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API>

### Previous

## Summary

## JS: Async

- _Previous_: fac Workshop Async: <https://github.com/0bubbles0/fac22-pre-projects/blob/main/week-07/workshops/async/async.md>-

- [x] Async concepts: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts>
- [x] Introduction async JS: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing>
- [x] Event Loop: <https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html>

  - Previous: <https://github.com/0bubbles0/fac22-pre-projects/blob/main/week-07/workshops/event-loop.md>

- How does **JS handle asynchronous** code?
- What’s the difference between **“synchronous” and “asynchronous”** code? Why might synchronous code be called **“blocking”**?
  - **Synchronous**:
    - JS Default: top-bottom, single-threaded (1 process task / time)
    - **Blocking**: sth has to wait for result of sth else. Until then, CPU/rendering stops &rarr; **frozen**.
      - Code should run at **60frames/sec**
      - Solutions: setTimeout(), Concurrency, WebAPIs, C++, make large .forEach() async
    - JS **Web workers** send processes to separate thread: <https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API>
      - web worker can't access/manipulate DOM. Can only do background-calculation. Tricky for inter-related results
    - try ... catch (can also work with async/await)
  - **Asynchronous**
    - defer until stack clear
    - e.g. Browser, other Programming languages
    - APIs (fetch-file, access-database/stream) put longer tasks in parallel processor core
    - Promise (fetch) & then &rarr; meantime doesn't block main thread
    - .then ... .catch
- What are the **event loop** and the **call stack**?
  - Chrome JS **Runtime** is V8
    - **Heap**: memory allocation happens here
    - **Call stack**: 1-threaded
      - data structure, records where we are in program
      - current **to-do list** that gets worked off top-bottom
      - main(), f declarations, f()
      - **blowing stack** &rarr; never-ending function
        - fast: console.log
        - slow: while(1 - 10bio), network requests, image requests/processing, messily-queued animation, mouse-scrolling, multiple .getSync()
    - **WebAPI**s, not in JS source, given by Browser. (C++ for Node)
      - DOM(document), ajax(XMLHttpRequest), setTimeout()
      - **Task Queue**: pushed on/off stack
        - **Callback queue**: onClick, onLoad, onDone
        - **Event queue/loop** holds async operations (promises...) &rarr; runs if stack empty (no blocking)
          - don't block for fluid UI &rarr; leave frequent room for rendering on stack
- How do **callbacks** and **promises** help us?
  - don't block main thread while waiting
  - **Async callbacks** old-style
    - `x.addEventListener('click', () => {callback})`
    - `function load(url, type, callback) {... callback(a);}` &rarr; `load('a.jpg', 'blob', dispImg);`
    - when background code finished &rarr; callback()
    - control running-order of functions, flexible arguments
    - sync callbacks: .forEach(), in f that don't wait/depend on anything
    - beware of callback hell
  - **Promise** new-style
    - `fetch()` API is modern version of XMLHttpRequest
    - returns Promise Obj with intermediate status
    - easy chaining, strict order, good error handling, no control inversion in libraries
    - will run behind any sync code

## Debugging: JS

- [x] Console: <https://www.freecodecamp.org/news/how-to-get-the-most-out-of-the-javascript-console-b57ca9db3e6d/>
  - Has str substitutions `%s, %i, %d, %f`
- [x] Debugging Chrome DevTools: <https://developers.google.com/web/tools/chrome-devtools/javascript/>

- How would you effectively find out **where** (and why) an **error** is occurring in your JavaScript code?
  - `console.log()` &rarr; open source code, insert .log, reload page
  - **breakpoints** &rarr; pause code execution, examine all current values
    - Demo: <https://googlechrome.github.io/devtools-samples/debug-js/get-started>
    - in DevTools &rarr; **Sources** &rarr; Event Listener Breakpoints &rarr; Mouse &rarr; click &rarr; select to insert breakpoint for any clicks
      - step into/over, click a line, Scope, Watch Expressions (over time)
      - Pause on specific line &rarr; try code in **Console** &rarr; apply in Sources &rarr; Strg+S &rarr; deactivate breakpoint blue-marker & rerun demo
    - Further: <https://developer.chrome.com/docs/devtools/javascript/breakpoints/>
- What **console methods** are there other than console.log? Can these help us debug?
  - console is an object, part of window-obj, supplied by BOM
    - `window.console.log('Works');`
    - `console.log('Works');`
    - BOM doesn't have standard
  - `.info()`, `.warn()`, `.error()`, `.assert(false, 'log error')`
  - `console.time('id for timer'); console.timeEnd('id for timer')` &rarr; benchmarking
  - `.table()` for arr, obj
  - `.dir(document.body)` interactive obj-list
  - `.group()` groups 3+ `.log()`
- What does the **debugger; statement** do?
- How do we use the debugger in our **browser**?

  - **Sources** panel for JS: file navigator, code editor, debugging pane

- **DevTools**: CSS, page load performance, network requests

## Debugging: Network

- [x] Inspect Network Activity with DevTools: <https://developers.google.com/web/tools/chrome-devtools/network/>
- [x] Insomnia: <https://support.insomnia.rest/article/11-getting-started>

- DevTools: **Network** panel

  - make sure resources are down/up-loaded as expected
  - inspect properties: HTTP headers, content, size...
  - NOT starting point for better load performance (Audits instead)
  - **Throttling**: e.g. fast 3G
  - **Hard Reload**, **Capture Screenshots**
  - Click on file &rarr; Headers, Preview, Response (code)
  - `/.*\.[cj]s+$/` excludes any css/js
  - block things/files: Strg&uarr;P &rarr; block &rarr; Show Request Blocking &rarr; + main.css add &rarr; reload &rarr; shows page if main.css doesn't load

- **Insomnia**: desktop app &rarr; interact/design HTTP-based APIs

  - authentication helpers, code generator, environment variables (, encrypted data sync, team collab)
  - Download: <http://insomnia.rest/download/>

- How can we **send and receive** test network requests while working on an application?
- How can we **inspect any requests** the browser is making on an HTML page?
- How can we **manually send test requests** outside of our browser?
