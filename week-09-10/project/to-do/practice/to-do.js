// ADD
/*
addButton --> click --> let newTaskText = input.value
toDoList --> create new Item (Template?) --> label.textContent = newTaskText

- should new item be added at top or at bottom?
*/

function getText(x) {
  // const source = document.querySelector()
  // .textContent OR .value
}

function createItem(x) {
  //know target
  // // const target;
  // know source
  // // const text = getText(x);
  // get template
  // // const template;
  // fill template
  // attach template to target
}

// CHECK
/*
item.input[checkbox] --> on change/check --> 
- text: strikethrough
- box: opacity OR weaker color
- position: move to bottom

*/
const item1Check = document.querySelector('#task--001');
const item1Delete = document.querySelector('#task--001-container button');
console.log(item1Delete);

function getParent(checkItem) {
  const idNameParent = `${checkItem.id}-container`;
  return document.querySelector(`#${idNameParent}`);
}
function toggleDone(container) {
  return container.classList.toggle('list__item--done');
}

item1Check.addEventListener('change', (e) => {
  console.log('Hello');
  //get parent-form
  // let idNameCheck = e.target.id;
  // let idNameParent = `${idNameCheck}-container`;
  // let parent = document.querySelector(`#${idNameParent}`);
  // let a = parent.classList;
  // parent.classList.add('list__item--done');
  // console.log(a);
  //classList add
  const container = getParent(e.target);
  toggleDone(container);
});

// DELETE
/*
item.input[button.bin] --> on click -->
- delete item
*/

item1Delete.addEventListener('click', (e) => {
  console.log('Hello');
  const container = document.querySelector('#task--001-container');
  container.remove();
});

// EDIT?
/*
item.input[button.pen] --> on click -->
- open modal-window-UPDATE (like add)
- on UPDATE-click --> sameItem.label.textContent = newTaskText
- Doesn't change position

OR
- delete old item
- save as new item at bottom
*/
