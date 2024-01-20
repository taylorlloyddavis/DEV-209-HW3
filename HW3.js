
/* the < fieldset > element provides a grouping for a part of an HTML form, 
with a nested < legend > element providing a caption for the<fieldset>.
It takes few attributes, the most notable of which are form, 
which can contain the id of a < form > on the same page, allowing you to 
make the < fieldset > part of that < form > even if it is not nested inside it, 
and disabled, which allows you to disable the < fieldset > and all its contents in one go.
https://developer.mozilla.org/en-us/docs/web/html/element/fieldset
*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("newUser").disabled = true;
})

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("exist").disabled = true;
})
    //New User Button
document.getElementById('button1').addEventListener('click', function() {
    
    
    // Get the section element
    var sectionOne = document.getElementById('newUser');

    // Set the disabled attribute to false
    sectionOne.disabled = false;

    // Optionally, you can also add a visual indication that the section is enabled
    sectionOne.style.opacity = 1;
    sectionOne.style.pointerEvents = 'auto';
  });

  //Existing User Button
  document.getElementById('button2').addEventListener('click', function() {
    // Get the section element
    var sectionTwo = document.getElementById('exist');

    // Set the disabled attribute to false
    sectionTwo.disabled = false;

    // Optionally, you can also add a visual indication that the section is enabled
    sectionTwo.style.opacity = 1;
    sectionTwo.style.pointerEvents = 'auto';
  });

// New User Section - Login Button 1
  document.getElementById('button3').addEventListener('click', function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;

    // Save user information to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);

    // Display welcome message
    alert("Welcome " + username);
  });

  //Existing User Section - Login Button 2
  document.getElementById('button4').addEventListener('click', function() {
    // Get values from input fields
    var existingUsername = document.getElementById("username2").value;
    var existingPassword = document.getElementById("password2").value;

    // Retrieve stored user information from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Check if entered username and password match stored values
    if (existingUsername === storedUsername && existingPassword === storedPassword) {
      // Successful login
      alert("Welcome back " + existingUsername);
    } else {
      // Invalid login
      alert("Invalid");
    }
  });
