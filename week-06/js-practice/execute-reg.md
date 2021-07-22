# Execute Program: RegEx

- Parens

  - can search for full filetype (pdf, jpg!=jpeg)

  ```javascript
  /^a|b$/.test('ax'); // true
  /(^a)|(b$)/.test('ax'); // true
  /^(a|b)$/.test('ax'); // false
  /^(a|b)$/.test('a'); // true
  /^(jpg|p(ng|df))$/.test('jpg'); // tests for jpg, png, pdf
  /^(a|b)+$/.test('bababa'); // true
  /^(big|fluffy) (dog|cat)$/.test('big cat'); //true
  ```

- Escape: Special characters
  \" also for \+, \., \^, \$, \|
- Access Hex codes of characters
  - A &rarr; \x41
  - M &rarr; \x4d
  - can describe characters not on keyboard

### Lessons

|   # | Lesson                         | Date        |
| --: | ------------------------------ | ----------- |
|  1. | Literals                       | Jul 19, Mon |
|  2. | Cat Quiz                       | Jul 19, Mon |
|  3. | Wildcard                       | Jul 19, Mon |
|  4. | Boundaries                     | Jul 19, Mon |
|  5. | Single phrase                  | Jul 19, Mon |
|  6. | Repetition                     | Jul 19, Mon |
|  7. | Words starting and ending in t | Jul 19, Mon |
|  8. | Or                             | Jul 19, Mon |
|  9. | Cat or dog or horse            | Jul 19, Mon |

|   # | Lesson                       | Date        |
| --: | ---------------------------- | ----------- |
| 10. | Parens                       | Jul 22, Thu |
| 11. | Cat or nothing               | Jul 22, Thu |
| 12. | Big and fluffy animals       | Jul 22, Thu |
| 13. | Escaping                     | Jul 22, Thu |
| 14. | Basic character classes      | Jul 22, Thu |
| 15. | US dollar                    | Jul 22, Thu |
| 16. | Consecutive digits           | Jul 22, Thu |
| 17. | American local phone numbers | Jul 22, Thu |
| 18. | Hex codes                    | Jul 22, Thu |

| 19. | | Jul |
| 20. | | Jul |
| 21. | | Jul |
| 22. | | Jul |
| 23. | | Jul |
| 24. | | Jul |
| 25. | | Jul |
| 26. | | Jul |
| 27. | | Jul |
| 28. | | Jul |
| 29. | | Jul |
| 30. | | Jul |
