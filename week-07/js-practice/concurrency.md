# JavaScript Concurrency - Execute Program

## Overview

- complex callback
- Promises
- Async/wait
- Async programming: error handling, event scheduling

## Notes

- **Concurrency**: 2+ simultaneous events
- (to) **instrument** code with sth &rarr; attach measurement instrument to
  - instrument setTimeout with an arr
- delayed order for console.log(), arr.push()
- Execute console:
  - async console output / async result&rarr; always waits 3sec
  - console output / result &rarr; won't run setTimeout-callback

## Synchronous

- runs all at one beginning-end
- **`.map()`** &rarr; result arr is fully constructed when returned
- Basic API of promises:

  ```js
  function chain(value) {
    return {
      value: value,
      then: (callback) => {
        return chain(callback(value));
      },
    };
  }
  chain(5).then((n) => n * 3); // returns 15
  chain(5); // returns {then: [function], value: 5} //Equal Promise.resolve(value)
  ```

## Asynchronous

- schedules code to run in future &rarr; outside normal execution order

### `setTimeout(f, 1000)`

- creates timer, ?no code executes in meantime
- all code executes &rarr; CPU idle during timer &rarr; Timeout-callback runs
- want to extract async callbacks into own functions
  - declare callback outside
  - then bug-fixing can target async/function problems separately
- timers on same level begin at same time
- 1000ms timer on long code &rarr; can take 30sec
- timer is mostly for scheduling order, not precise timings?
- Equivalent:

  ```js
  while (true) {
    for (const timer of eventQueue) {
      if (timer.isPastItsScheduledTime()) {
        timer.runCallback();
        eventQueue.removeTimer(timer);
      }
    }
  }
  ```

- nesting: logs from outside-in

### Promise & `.then(f)`

- sets up chain
- wraps value in an object
- `Promise.resolve(x)` &rarr; creates promise containing x
- `.then(f)` &rarr; creates promise from result &rarr; chain behaviour

  ```jsx
  Promise.resolve(11) // Promise {<fulfilled>: 5}
    .then((n) => n + 1) // {fulfilled: 12}
    .then((n) => n / 2) // {fulfilled: 6}
    .then((n) => console.log(n)); // 6
  ```

## Lessons

[Timetable (33 Lessons)](https://www.notion.so/f34ec2c4e2a5496785ea9a0d0975041d)

| No  | Lesson                   | Date       |
| --- | ------------------------ | ---------- |
| 1   | setTimeout               | Tue, 3 Aug |
| 2   | setTimeout and functions | Tue, 3 Aug |
| 3   | Concurrent setTimeouts   | Tue, 3 Aug |
| 4   | Sequential setTimeouts   | Tue, 3 Aug |
| 5   | Promise then             | Tue, 3 Aug |
|     |                          | Tue, 3 Aug |
|     |                          | Tue, 3 Aug |
|     |                          | Tue, 3 Aug |
|     |                          | Tue, 3 Aug |
