# Event Loops: async (W7)

## How does JS work?

### Reading List

- [x] Event Loop (_Philip Roberts, JSConf YouTube_): <[https://www.youtube.com/watch?v=8aGhZQkoFbQ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)>
- [x] Transcript: <[https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)>
- [ ] Tool: loupe

### Abstract

JavaScript programmers like to use words like, "**event-loop"**, "**non-blocking**”, **callback**, **asynchronous**, **single-threaded** and **concurrency**.

We say things like “don’t block the event loop”, “make sure your code runs at 60 frames-per-second”, “well of course, it won’t work, that function is an asynchronous callback!”

If you’re anything like me, you nod and agree, as if it’s all obvious, even though you don’t actually know what the words mean; and yet, finding good explanations of how JavaScript actually works isn’t all that easy, so let’s learn!

With some handy visualisations, and fun hacks, let’s get an intuitive understanding of what happens when JavaScript runs.

Transcript: [http://2014.jsconf.eu/speakers/philip...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0ZudE1DSlk5QnBHMHZRZFBMYmpBME9yendlQXxBQ3Jtc0tsRGV5bnh0M1JnUmNDcGRFd1ppNXdtV0FVOXpmNEo1cThpVXJ0clNESlZRNlppV2YtRnNNcUFZZHM2bXZPUHRvUndvSEtQN2ZuSEtvdFY2NzczOEw3ajUyRU43MmdoRWJnRERvUUVEZHZpTnVGM0NwUQ&q=http%3A%2F%2F2014.jsconf.eu%2Fspeakers%2Fphilip-roberts-what-the-heck-is-the-event-loop-anyway.html)

License: For reuse of this video under a more permissive license please get in touch with us. The speakers retain the copyright for their performances.

## How does JavaScript work, why is it weird?

### Terms

- Ideal: 60 frames a second
- Chrome JS Runtime is **V8**.
  - **heap**: memory allocation happens here
  - **call stack**: execution contexts, stack frames are here. Math.sin(),
    - lead to &rarr; **WebAPI**s which are not in JS source, given by Browser:
      - DOM(document),
      - ajax (XMLHttpRequest),
      - setTimeout
    - leads to &rarr; **Callback queue**: onClick, onLoad, onDone
    - have **event loop**

### Call stack

- 1 threaded runtime == 1 call stack == one thing at a time
- Use it in browser-side development
- data structure that records where in program we are
  - Enter function &rarr; sth goes on stack
  - Return from function &rarr; pop it off stack top
- Example Code Stack
  - main() &rarr; file itself &rarr; push on top of stack
  - function declarations &rarr; push on top of stack
  - function call &rarr; push on top of stack
  - work top-bottom

### Blowing the stack

```jsx
function foo() {
  return foo();
}
foo(); //runs eternally -> browser tells you there's a bug
```

### Blocking behaviour: slow code

- Not slow: console.log
- Slow: while (1- 10bio), network requests, image requests &rarr; blocking stack
- Multiple .getSync() which does network requests &rarr; happens on Ruby. Have to wait until each task is done
- **Problem** because we run in browsers
- While this is loading &rarr; browser is blocked/working &rarr; user can't perform actions/render/call in meantime
  - can't make AJAX request, setTimeout while I'm doing other code
- **Blocking-Solution: async callbacks**
  - **setTimeout() &rarr; stack &rarr; load in webapis &rarr; wait in task queue &rarr; stack &rarr; execute**
    - goes onto stack, but gets pushed off again, it's content later magically appears on stack again
    - lives in webapis/task-queue in the meantime
  - **Concurrency** &rarr; Browser is more than just Runtime
    - can make calls to WebAPIs
    - Node has C++ instead of WebAPIs
  - **Event loop**: looks at stack & task queue. If stack is empty &rarr; put first task-queue-item onto stack
  - async: defer sth until stack is clear

### Examples

- **Several Timeout** all with 1000 &rarr; all get pushed to Queue, it's min-time &rarr; gets dealt with 1sec-ish
- **forEach** calls in current stack, not async &rarr; for time-consuming tasks inside, might rather want to do this async, so stack doesn't get blocked

### Rendering

- render gets blocked while stack isn't cleared &rarr; no user interaction possible
- with async task queue, render queue gets occasional chance
- **"Don't block the event queue"** &rarr; leave frequent room for rendering on stack
  - Important for fluid UI
  - Culprits: image processing, animation if not queued properly
  - Example: mouse-scrolling &rarr; many callbacks &rarr; should queue slow work every few seconds

## Further Topics

- Parse, run, visualise, ship product
