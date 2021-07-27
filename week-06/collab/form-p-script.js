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

function passwordChecker() {
  // console.log(teamAddName); //value: "Heidi"
  console.log(teamAddName.value); //"Heidi"
  console.log(teamAddpasswordField.value);
  const check = teamAddpasswordField.value === adminPasswordBAgency;
  console.log(check);
  if (!check) {
    console.log('incorrect password');
    //How reject form submission?
    //Display "Incorrect Admin Password" in HTML
  } else {
    console.log('correct password');
    //How accept form submission?
  }
}

teamAddSubmit.addEventListener('click', () => {
  passwordChecker();
});

/*149 CHARACTERS
Be notified if the description I’m writing is **too long** (E2)
  - check length
*/

/* TEMPLATE
**See** the new member on the page once I click a button (E3)
  - template
 */
