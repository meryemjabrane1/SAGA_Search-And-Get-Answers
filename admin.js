// Get the validation elements
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

// Add event listener to form submit event
document.forms['form'].addEventListener('submit', function(event) {
  // Check if email and password are correct
  if (email.value !== 'r.lamharzialaoui@aui.ma' || password.value !== 'rabii2001') {
    // Prevent form submission if email or password are incorrect
    event.preventDefault();

    // Display error message
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
  }
});