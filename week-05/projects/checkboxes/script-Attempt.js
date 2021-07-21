//Draft
// console.log('Hello');

// make array [input type="checkbox"]
const allCheckboxes = Array.from(
  document.querySelectorAll('.inbox input[type="checkbox"]')
);
console.log(allCheckboxes);

// recognise shift keys
//Format: data-key="71"
//event.key = Shift
// event.location = 1 or 2
// event.which = 16
// event.code = ShiftLeft or ShiftRight
// e.keyCode == '44'
// KeyboardEvent.shiftKey true or false

/*function:
 */
// if shift was pressed
//find all checked (& their index)

// if (number of checked >== 1 or === 2)
// find index of first&last checked checkbox
// if one shift=no, two shift=yes
//on shift-release
// check all checkboxes with indexes between --> slice?

function shiftBox(e) {
  // console.log(e.target.checked);
  //if shift pressed
  // console.log(e.keyCode);
  if (true) {
    const box = e.target;
    if (box.checked) {
      // console.log('this is checked');
      //find all checked (& their index)
      const allCheckedIx = allCheckboxes
        .filter(a => a.checked)
        .map(a => allCheckboxes.indexOf(a));
      // console.log(allCheckedIx);
      //if allChecked >1
      if (allCheckedIx.length > 1) {
        // console.log('magic');
        //know range: allChecked first & last item
        const rangeA = allCheckedIx[0];
        const rangeZ = allCheckedIx[allCheckedIx.length - 1];
        console.log(`range is ${rangeA} to ${rangeZ}`);
        //tick each in range
        for (let i = rangeA; i <= rangeZ; i++) {
          allCheckboxes[i].checked = true;
        }
      }
    }
  }
}
//eventListener shift-start
document.addEventListener('keypress', e => {
  console.log('touch');
  console.log(e);
});
//checkbox.forEach addEventListener ("check", function)
allCheckboxes.forEach(item =>
  item.addEventListener('click', e => {
    console.log(e);
    shiftBox(e);
  })
);

/*Müll
        // const allCheckboxes = Array.from(document.querySelectorAll('input'));
        // console.log(allCheckboxes);
        // make array [.item] together or separate?
        // const allCheckedIx2 = allCheckboxes.filter((a, index) => {
          // console.log(a.checked);
          // if (a.checked) {
            // console.log(index);
        // console.log(allCheckboxes.indexOf(a));
        // return index;
        // }
        // });


      */
