// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var contactPage = document.getElementById('contact-page');
var submitButton = document.getElementById('submit-button');

// Add an event listener to the "submit-button" that will run a function when clicked
submitButton.addEventListener('click', function() {
  // Set the innerHTML of the "contact-page" element to a new `p` element that says "Thank you for your message"
  contactPage.innerHTML;
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

