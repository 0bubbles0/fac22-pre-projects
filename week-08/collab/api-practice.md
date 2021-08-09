# API Real Practice

## Reading List

- [ ] CORS explanation: <https://web.dev/cross-origin-resource-sharing/>

## Unsplash

- [ ] Better API: <https://source.unsplash.com/>

## Recipe Puppy API

- [ ] Instructions <http://www.recipepuppy.com/about/api/>

Recipe Puppy has a very simple API. This api lets you search through recipe puppy database of over a million recipes by keyword and/or by search query. We only ask that you link back to Recipe Puppy and let me know if you are going to perform more than 1,000 requests a day.

The api is accessible at http://www.recipepuppy.com/api/.

For example:
http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3

Optional Parameters:
i : comma delimited ingredients
q : normal search query
p : page
format=xml : if you want xml instead of json

No parameters are required. Let me know if you have any questions or if you want to share the project built on top of our api.

### Errors

- Access to fetch at 'http://www.recipepuppy.com/api/' from origin 'null' has been blocked by **CORS policy**: No **'Access-Control-Allow-Origin'** header is present on the requested resource. If an opaque response serves your needs, set the **request's mode** to **'no-cors'** to fetch the resource with CORS disabled.

  - Lesson:
    POST https://facebook.com/signup HTTP/1.1 // method path protocol
    User-Agent: Mozilla/5.0... // request header
    Accept: text/html // wanted response format

    Content-Type: application/json // sometimes request body with content-type header
    {"name": "leia organa"}// json-format extra detail

  - CORS explanation: <https://web.dev/cross-origin-resource-sharing/>
    `fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'})`
    `fetch('https://cors-demo.glitch.me/allow-cors', {mode:'no-cors'})`
