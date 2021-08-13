# Form Validation

## Reading List

- [ ] Client-side validation: <https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation>
- [ ] Check with JS: <https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/>
- [ ]

## Summary

## Notes

### Client-side form validation

- Before submit: check all required are filled out, meet requirements, correct format
- afterwards would be a server-side check for web security

#### Built-in HTML5

- better performance than JS, not as customizable though
- `required`, minlength, maxlength, min, max, type, pattern (RegExp)
- In CSS, style :valid, :invalid

```html
<form>
  <label for="firstname"> First Name: </label>
  <input type="text" name="firstname" id="firstname" required maxlength="45" />
  <label for="lastname"> Last Name: </label>
  <input type="text" name="lastname" id="lastname" required maxlength="45" />
  <button>Submit</button>
</form>
```

```css
input:invalid,
input:invalid:required {
  border: 2px dashed red;
  box-shadow: 0 0 5px 1px red;
}
/*OR*/
#nameError {
  display: none;
  font-size: 0.8em;
}

#nameError.visible {
  display: block;
}

input.invalid {
  border-color: red;
}
```

```js
const submit = document.getElementById('submit');

submit.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById('firstname');
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById('nameError');
    nameError.classList.add('visible');
    firstNameField.classList.add('invalid');
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }
  return valid;
}
```
