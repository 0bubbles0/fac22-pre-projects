/*ADMIN PASSWORD
//Input an **admin password** and see if this has been accepted or rejected (E1)
- set up password
- check if password correct
  - access admin-password-input
  - compare to passwordBAgency
- feedback: log member / error message
- submit-button eventListener
*/
const adminPasswordBAgency = '1234';
const teamAddpasswordField = document.querySelector('#team-add-admin-pass');
const teamAddSubmit = document.querySelector('#team-add-submit');
const teamAddName = document.querySelector('#team-add-name');

function passwordChecker(field, correct) {
  // console.log(teamAddName); //value: "Heidi"
  console.log(teamAddName.value); //"Heidi"
  console.log(teamAddpasswordField.value);
  // const check = teamAddpasswordField.value === adminPasswordBAgency;
  const check = field.value === correct;
  console.log(check);
  if (!check) {
    console.log('incorrect password');
    //How reject form submission? --> formnovalidate?
    //Display "Incorrect Admin Password" in HTML
  } else {
    console.log('correct password');
    //How accept form submission?
  }
}

teamAddSubmit.addEventListener('click', () => {
  passwordChecker(teamAddpasswordField, adminPasswordBAgency);
});

/*149 CHARACTERS
Be notified if the description I’m writing is **too long** (E2)
  - access textarea --> text input
  - check length, compare to max
  - EventListener realtime
  - feedback: red border
*/
const teamAddDesc = document.querySelector('#team-add-desc');

function textLengthChecker(field, max) {
  /*Option 2
  const length = field.value.length;
  field.setAttribute('aria-invalid', length > 149 ? true : false);
  */
  console.log(`Max is ${max}`);
  console.log(field.textLength);
  if (field.textLength > max) {
    field.setAttribute('aria-invalid', 'true');
    //What happens with aria-invalid? --> Display "too long" --> .append, .create
  } else {
    field.setAttribute('aria-invalid', 'false');
  }
}

teamAddDesc.addEventListener('input', () => {
  textLengthChecker(teamAddDesc, 149);
});

/* TEMPLATE
**See** the new member on the page once I click a button (E3)
  - template
 */
