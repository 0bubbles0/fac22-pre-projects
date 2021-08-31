# Execute Program: RegEx

- Parens

  - can search for full filetype (pdf, jpg!=jpeg)

  ```javascript
  /cat/.test('copycat'); // true
  /[a-e]/.test('added'); // true
  /^a|b$/.test('ax'); // true
  /(^a)|(b$)/.test('ax'); // true
  /^(a|b)$/.test('ax'); // false
  /^(a|b)$/.test('a'); // true
  /^(jpg|p(ng|df))$/.test('jpg'); // tests for jpg, png, pdf
  /^(a|b)+$/.test('bababa'); // true
  /^(big|fluffy) (dog|cat)$/.test('big cat'); //true
  /^.{,100}$/.test('.{,100}'); // true, weird!
  ```

- Escape: Special characters
  \" also for \+, \., \^, \$, \|
- Access Hex codes of characters
  - A &rarr; \x41
  - M &rarr; \x4d
  - can describe characters not on keyboard

Describe exactly 1 character at a time:

| .        | Description                                           |
| -------- | ----------------------------------------------------- |
| [a-z]    | any a-z                                               |
| [abc]    | any a OR b OR c                                       |
| [?.]     | any ? or . same for other special characters          |
| [0-9]    | any 0-9, === \d                                       |
| [^a-z]   | Except: any NOT a-z                                   |
| [b^]     | b or ^                                                |
| [\w-]    | any \w or -                                           |
| .        | ' ', but not \n                                       |
| \bword\b | word boundary to mark a full word surrounded by non-w |
| word\B   | anything that doesn't END with word                   |
| \d       | digit                                                 |
| \s       | whitespace                                            |
| \w       | words: a-zA-Z0-9\_                                    |
| ?        | 0 or 1, eg. for optional parts                        |
| \*       | 0 or more                                             |
| +        | 1 or more                                             |
| a{3}     | aaa                                                   |
| a{3, 4}  | aaa to aaaa                                           |
| a{3,}    | aaa or more. But NOT a{,3} as max!                    |
| ^        | at start                                              |
| $        | at end                                                |

### Lessons

|   # | Lesson                              | Date        |
| --: | ----------------------------------- | ----------- |
|  1. | Literals                            | Jul 19, Mon |
|  2. | Cat Quiz                            | Jul 19, Mon |
|  3. | Wildcard                            | Jul 19, Mon |
|  4. | Boundaries                          | Jul 19, Mon |
|  5. | Single phrase                       | Jul 19, Mon |
|  6. | Repetition                          | Jul 19, Mon |
|  7. | Words starting and ending in t      | Jul 19, Mon |
|  8. | Or                                  | Jul 19, Mon |
|  9. | Cat or dog or horse                 | Jul 19, Mon |
| --: | ----------------------------        | ----------- |
| 10. | Parens                              | Jul 22, Thu |
| 11. | Cat or nothing                      | Jul 22, Thu |
| 12. | Big and fluffy animals              | Jul 22, Thu |
| 13. | Escaping                            | Jul 22, Thu |
| 14. | Basic character classes             | Jul 22, Thu |
| 15. | US dollar                           | Jul 22, Thu |
| 16. | Consecutive digits                  | Jul 22, Thu |
| 17. | American local phone numbers        | Jul 22, Thu |
| 18. | Hex codes                           | Jul 22, Thu |
| --: | ----------------------------        | ----------- |
| 19. | Basic character sets                | Jul 25, Sun |
| 20. | Maybe                               | Jul 25, Sun |
| 21. | Plural                              | Jul 25, Sun |
| 22. | American long-distance phone number | Jul 25, Sun |
| 23. | Character classes                   | Jul 25, Sun |
| 24. | One character and space             | Jul 25, Sun |
| --: | ----------------------------        | ----------- |
| 25. | Character sets                      | Jul 26, Mon |
| 26. | Word boundaries                     | Jul 26, Mon |
| 27. | Dogs only                           | Jul 26, Mon |
| 28. | Constrained repetition              | Jul 26, Mon |
| 29. | Match hex codes                     | Jul 26, Mon |
| 30. | Character classes in sets           | Jul 28, Wed |
