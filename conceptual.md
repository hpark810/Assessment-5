### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

RESTful routing is actually designing routes that conform to REST standards around resources. REST itself is an architectural style for designing routes and provides constraints for creating web services. We would use this when designing our routes and making sure that we are using the naming convention for our routes as well as which HTTP verbs to use in our routes. For example, REST would dictate that we name a route /users for adding a user instead of something like /users/add.

- What is a resource?

If it similar to an object in an OOP language. A resource is an object with a type, associated data, and a relationship to other resources. The standard methods on the resource are the HTTP verbs.


- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

When creating an API you are not returning the HTML for the form. You are simply taking in the data provided by the front end, making the user, and then sending back JSON. It is the job of the front end to do send the right data however it pleases (through a form generated on the front end, ajax, etc.).

- What does idempotent mean? Which HTTP verbs are idempotent?

Idempotent means that the side effects will be the same for one or more of the same requests. The idea is that the state changes just once no matter how many times a request is made. GET, PTACH, and DELETE verbs are all idempotent.

- What is the difference between PUT and PATCH?

PUT will update the entire object while PATCH will update pieces of the object.

- What is one way encryption?

One way encryption means that the result from encryption cannot be decrypted back to the original input.

- What is the purpose of a `salt` when hashing a password?

A `salt` is a random string of characters that is introduced before a password is hashed. This allows the same password to be hashed differently because the salt will change randomly. If someone is trying to decrypt a password they can spend a lot of time generating a dictionary of all words and running encrypting with specific result. If the happen to find the password this way that means their solution will only work for passwords encrypted with that salt which will only be a small number if not only one password with that specific salt.


- What is the purpose of the Bcrypt module?

The Bcrypt module makes it easy in Python to encrypt passwords. You have to just call one function on a password and it will hash it for you. 

- What is the difference between authorization and authentication?

Authentication refers to the process of verifying who you are whereas authorization is the process of verifying that you have access to something. For example, you can authenticate someones login and then make sure they have access to their profile by authorization. 