# JS30: Checkboxes

## Questions

function f(e) { this }

## Resources

- [x] Video Tutorial: <https://courses.wesbos.com/account/access/60cd2fa48981fd4f947005bc/view/194129876>

## Learn

- use shift key to select all
- flag variable: programmatically true-false until we reach last item.
- Less reliant on specific HTML file/state

## Steps

- boxes.forEach &rarr; .addEventListener("check" or "click)
- let inBetween = false; //flag-variable
- if (current-box is checked & shift pressed)
- boxes.forEach &rarr;
  - if current-box OR the last-box &rarr; switch inBetween on temporarily (not outside forEach)
  - if inBetween on &rarr; check a box
- make this box the last-box

### Recognise Shift key

- `e.shiftKey === true`
- Not really:
  - Format: data-key="71"
  - event.key = Shift
  - event.location = 1 or 2
  - event.which = 16
  - event.code = ShiftLeft or ShiftRight
  - e.keyCode == '44'
  - KeyboardEvent.shiftKey true or false

## Variation Ideas

- not just checkboxes --> Emails, any multi-selection
