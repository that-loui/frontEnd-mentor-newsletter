# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/) - JS library
**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I used this project to refresh my memory of using bootstrap, I learned how to do form validation using javaScript, used javascript promises to delay the submission using setTimeout and setting it to a 2 second delay 

```html
<div class="content d-md-flex flex-md-row-reverse  rounded-4 row container-lg m-lg-auto">
      <!-- Sign-up form start -->
    <header class="container-lg p-lg-3 header col-md">
      <img
        src="./assets/images/illustration-sign-up-mobile.svg"
        alt="sign-up svg"
        class="img-fluid mobile"
      />
      <img
        src="./assets/images/illustration-sign-up-desktop.svg"
        alt="sign-up svg"
        class="img-fluid desktop"
      />
    </header>
```
the above code gave me quite the issue, with getting it to be both desktop and mobile responsive with the designs provided 
```js
function validateForm(email) {
  return new Promise((resolve, reject) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    setTimeout(() => {
      if (emailPattern.test(email)) {
        resolve(); // Resolve without passing any arguments
      } else {
        reject('Valid email required');
      }
    }, 2000);
  });
}
```
the above is the form validation function with checks the user input and resolves or rejects depending on yje value 
### Continued development

I would like to focus more on working more with javascript promises 

### Useful resources

- [resource 1](https://getbootstrap.com/) - This helped me to style the page better using bootstrap 

## Author

- Frontend Mentor - [@that-loui](https://www.frontendmentor.io/profile/that-loui)
- Twitter - [@LMacjob](https://www.twitter.com/LMacjob)
