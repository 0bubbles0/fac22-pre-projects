# HTML Form Workshop

## Questions

## Reading List

- [ ] fac Workshop: <https://learn.foundersandcoders.com/workshops/html-forms/>
- [ ] inputs: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input>
- [ ] radio groups: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Defining_a_radio_group>

## Summary

## Notes

- `<form>` &rarr; submit &rarr; request to target page &rarr; send form data
- `<input>` can be text, email, radio, checkbox, `<textarea>`
- add `type="submit"` to submit buttons (it's default, but good signal)
- send to everything with `name=""` to `action` in page (/submit) or external (https://example.com/submit)
  - checkbox will send name=on, value-attribute or nothing
  - all radios should have same name="", unique value=""
  - send format: `example.com/submit?name=value&other-input=other-value`

## Workshop

### Basic request

- add form, labels, inputs
- should submit name value to "https://learn-forms.netlify.com/submit/part1"
- Response if successfully submitted a name

  ```html
  <form action="https://learn-forms.netlify.com/submit/part1">
    <label for="name">Name</label>
    <input id="name" name="name" type="text" placeholder="Enter your name" />
    <button type="submit">Submit</button>
  </form>
  ```

### Different input types

- now submit to "https://learn-forms.netlify.com/submit/part2"
- add fields:
  - email
  - phone
  - textarea for message
  - checkbox marketing-consent
- submit data should look like
  ```js
    name=Oli
    email=hello@oliverjam.es
    telephone=0123455678
    message=Hello this is a message!
    marketingConsent=on
  ```

### Using radio groups

- now submit to "https://learn-forms.netlify.com/submit/part3"
- make 3 radios to choose between contact (email, phone, post)
  - name="contact" value="email"
