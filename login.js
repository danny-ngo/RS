// URL for login request
const loginURL = 'https://research-stream.herokuapp.com/user/login';

// finding neccessary elements in DOM
const email =  document.querySelector('#inputEmail').value;
const password = document.querySelector('#inputPassword').value;
const loginBtn = document.querySelector('#hello');

// adding event listener to "login button"
loginBtn.addEventListener('click', login)

const data = {
  "email": email,
  "password": password,
}

// accessing login endpoint
function login(event) {
  fetch(loginURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then(response => response.text())
.then(response => console.log(response))
.catch(error => console.error('Error: ', error));
}
