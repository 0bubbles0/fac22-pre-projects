/*ADMIN PASSWORD
//Input an **admin password** and see if this has been accepted or rejected (E1)
- set up password
- check if password correct
- access admin-password-input
- compare to passwordBAgency
- feedback: log member / error message
- submit-button eventListener
*/
//inputs
const teamAddName = document.querySelector('#team-add-name');
const teamAddEmail = document.querySelector('#team-add-email');
const teamAddTitle = document.querySelector('#team-add-title');
const teamAddDesc = document.querySelector('#team-add-desc');
const teamAddImg = document.querySelector('#team-add-img');
const teamAddpasswordField = document.querySelector('#team-add-admin-pass');
const teamAddSubmit = document.querySelector('#team-add-submit');
//password
const adminPasswordBAgency = '1234';
const teamAddPasswordLabelError = document.querySelector(
  '[for="team-add-admin-pass"] .error'
);
//149
const teamAddDescLabel = document.querySelector('[for="team-add-desc"]');
const teamAddDescLabelError = document.querySelector(
  '[for="team-add-desc"] .error'
);

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
    teamAddPasswordLabelError.textContent = ' Incorrect Password';
  } else {
    console.log('correct password');
    //How accept form submission?
    teamAddPasswordLabelError.textContent = '';
  }
}

/*149 CHARACTERS
Be notified if the description I’m writing is **too long** (E2)
- access textarea --> text input
- check length, compare to max
- EventListener realtime
- feedback: red border
*/

function textLengthChecker(field, max) {
  /*Option 2
  const length = field.value.length;
  field.setAttribute('aria-invalid', length > 149 ? true : false);
  */
  console.log(`Max is ${max}`);
  console.log(field.textLength);
  // let errorSpan = document.createElement(span);
  // let errorMsg = errorSpan.append(p, 'exceeds 149 characters');
  if (field.textLength > max) {
    field.setAttribute('aria-invalid', 'true');
    //What happens with aria-invalid? --> Display "too long" --> .append, .create
    // console.log('exceeds 149 characters');
    // console.log(teamAddDescLabel);
    // console.log(/Exceeds/.test(teamAddDescLabel.textContent));
    let test = /Exceeds/.test(teamAddDescLabelError.textContent);
    if (!test) {
      // teamAddDescLabel.inner(' Exceeds 149 characters');
      teamAddDescLabelError.textContent = ' Exceeds 149 characters';
      // teamAddDescLabel.error.textContent = ' Exceeds 149 characters';
      //How remove this?
    }
  } else {
    field.setAttribute('aria-invalid', 'false');
    teamAddDescLabelError.textContent = '';
  }
}

/* TEMPLATE
**See** the new member on the page once I click a button (E3)
- collect submitted info
- template
const container = //target
const template = //template
const templateClone = template.content.cloneNode(true) //clone
- fill in template parts
*/
function addTeamImgHelper(a) {
  let x = a.value;
  let help =
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
  return x === '' ? help : x;
}

function addTeamGatherInfo() {
  //make object {name:, title:, descr:, img:}
  //gather each from form with element.value
  console.log('Hello');
  const addName = teamAddName.value;
  const addTitle = teamAddTitle.value;
  const addDesc = teamAddDesc.value;
  const addImg = addTeamImgHelper(teamAddImg);
  const newTeamMember = { addName, addTitle, addDesc, addImg };
  console.log(newTeamMember);
  //return object
  return newTeamMember;
}

function addTeamFillTemplate() {
  //define target, template, clone
  const template = document.querySelector('#new-team-card');
  //take object, access each key
  //assign key-->template tags
  // return target.clone
}

teamAddDesc.addEventListener('input', () => {
  textLengthChecker(teamAddDesc, 149);
});

teamAddSubmit.addEventListener('click', () => {
  // passwordChecker(teamAddpasswordField, adminPasswordBAgency);
  addTeamGatherInfo();
});
