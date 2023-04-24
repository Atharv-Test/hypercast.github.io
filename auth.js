const signUpLink = document.querySelector('.nav-links li:last-child');

// Select the modal box and its components
const modalBox = document.querySelector('.modal');

const closeModal = document.querySelector('.close');
// Function to show the modal box
const showModal = () => {
  modalBox.style.display = 'block';
}

// Function to hide the modal box
const hideModal = () => {
  modalBox.style.display = 'none';
}

// Event listener to show the modal box when the "SIGN UP" link is clicked
signUpLink.addEventListener('click', showModal);

// Event listener to hide the modal box when the close button is clicked
closeModal.addEventListener('click', hideModal);

// Event listener to hide the modal box when user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modalBox) {
    hideModal();
  }
});

const loginLink = document.querySelector('.nav-links li:first-child');

// Select the modal box and its components
const lmodalBox = document.querySelector('.lmodal');

const lcloseModal = document.querySelector('.lclose');
// Function to show the modal box
const showlModal = () => {
  lmodalBox.style.display = 'block';
}

// Function to hide the modal box
const hidelModal = () => {
  lmodalBox.style.display = 'none';
}

// Event listener to show the modal box when the "LOGIN" link is clicked
loginLink.addEventListener('click', showlModal);

// Event listener to hide the modal box when the close button is clicked
lcloseModal.addEventListener('click', hidelModal);

// Event listener to hide the modal box when user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === lmodalBox) {
    hidelModal();
  }
});


// Get the modal elements
const signupModal = document.getElementById("signup-modal");
const loginModal = document.getElementById("login-modal");

// Get the links to toggle the modals
const logLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");

// Get the close buttons for both modals
const closeBtns = document.querySelectorAll(".close");
const lCloseBtns = document.querySelectorAll(".lclose");

// Function to close the signup modal and open the login modal
function openLoginModal() {
  signupModal.style.display = "none";
  loginModal.style.display = "block";
}

// Function to close the login modal and open the signup modal
function openSignupModal() {
  loginModal.style.display = "none";
  signupModal.style.display = "block";
}

// Add event listener to the login link
logLink.addEventListener("click", openLoginModal);

// Add event listener to the create one link
signupLink.addEventListener("click", openSignupModal);

// Add event listeners to the close buttons for both modals
closeBtns.forEach((btn) =>
  btn.addEventListener("click", () => (signupModal.style.display = "none"))
);
lCloseBtns.forEach((btn) =>
  btn.addEventListener("click", () => (loginModal.style.display = "none"))
);



// Function to validate input fields
function validateInputs(username, email, password) {
  const regex = /^[a-zA-Z0-9]+$/; // Regex for alphanumeric characters
  if (!username.match(regex) || !email.includes('@') || !password.match(regex)) {
    return false; // Invalid input fields
  }
  return true; // Valid input fields
}

function validateInputs2(email, password) {
  const regex = /^[a-zA-Z0-9]+$/; // Regex for alphanumeric characters
  if ( !email.includes('@') || !password.match(regex)) {
    return false; // Invalid input fields
  }
  return true; // Valid input fields
}
// Sign up button click event listener
document.getElementById('signupb').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  
  const pass = document.getElementById('password').value;
  const password = document.getElementById('confirm-password').value;
  
  if (!username || !email || !password) {
    alert('Incomplete Credentials'); // Alert for incomplete credentials
  } else if (!validateInputs(username, email, password)) {
    alert('Invalid Characters'); // Alert for invalid input fields
  }
  else if(pass!==password) {
    alert('Different Password'); // Alert for diff password
} 
else {
    // Perform sign up logic here
    // ...
    window.location.href = 'homepage.html';

  }
});

// Login button click event listener
document.getElementById('loginb').addEventListener('click', async () => {
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('enter-password').value;
  if (!email || !password) {
    alert('Incomplete Credentials'); // Alert for incomplete credentials
  } else if (!validateInputs2(email, password)) {
    alert('Invalid Characters'); // Alert for invalid input fields
  } else {
    // Perform login logic here
    // ...
    window.location.href = 'homepage.html';

  }
});
