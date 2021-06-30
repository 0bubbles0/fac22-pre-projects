# Drumkit Project JavaScript30

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

- [x] Files (*GitHub*): <https://github.com/wesbos/JavaScript30>
- [x] Tutorial Video (*20 min*): <https://courses.wesbos.com/account/access/60cd2fa48981fd4f947005bc/view/194837696>
- [x] Using data attributes (*MDN*): <https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes>
- [x] Keyboard codes: <https://keycode.info/>


## Learn
- No design patterns, frameworks, libraries etc. &rarr; just **Vanilla JS**
- Audio-playing with a prompt from JavaScript 
- Keyboard events
- Listening for transition end

## Task

- Make a JavaScript "Drumkit"
- When I **press keyboard** key:
  1. play sound
  2. short animation (button bigger, highlight border)
  3. reset to original state/style

## Steps

- Browser Dev Tools &rarr; Elements &rarr; Test progress

### HTML

  - One item:
    ```
    <div data-key="65" class="key">Display Text</div>
    ...
    <autio data-key="65" src="sound/clap.wav"></audio>
    ```
  - `data-key` is an attribute we just made up
  - find correct keyboard key number on <https://keycode.info/>
  - onclick &rarr; add .playing class

### CSS

  ```
    .key {
      transition: all .07s ease;
    }

    .playing {
      transform: scale(1.1);
      border-color: ...;
      box-shadow: ...;
    }
  ```

### JS

  - Listen for key-up/down event
  - Look at Browser Dev Tools &rarr; e.keyCode: 65
  - If HTMl has a **matching audio-element** `data-key === e.keyCode`
    - If it has not audio &rarr; stop function &rarr; return
    - But if it has audio
      - reset audio &rarr; currentTime = 0
      - play audio
  - If HTML has a **matching div-element** `data-key === e.keyCode`
    - add `.playing` style
  - **Reset after** event
    - Recognise which element just finished animation &rarr; `e.propertyName === 'transform'`
    - remove `.playing` from it
  - EventListener on window for **keyboard-press** &rarr; 'keydown'
  - EventListener on `<div>`s for when they **finish a transition** &rarr; 'transitionend'

  ```javascript
    function playSound(e) {
      //console.log(e.keyCode);
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //find correct audio files
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //find correct div-elements
      //console.log(audio);
      if (!audio) return; //stop function from running altogether
      audio.currentTime = 0; // rewind audio-file to start
      audio.play(); //play audio
      //console.log(key);
      key.classList.add('playing');
    }

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return; //skip if it's not a transform
      //console.log(e.propertyName);
      //console.log(this); //is equal to key
      this.classList.remove('playing');
    }

    window.addEventListener('keydown', playSound);

    const keys = document.querySelectorAll('.key');
    keys.forEach(key =>
      key.addEventListener('transitionend', removeTransition)
    );
 ```


## Variation Ideas

- Quick
  - Own style
  - Works with click as well (and .key:hover)

- Long
  - **Violin Tuner** (GDAE, long notes only stop when pressing key again)
  
  - image map
    - actual drum-kit
    - other image
  - Piano (eg for number-keys 1-8)

