// URL for login request
const loginURL = 'https://research-stream.herokuapp.com/user/login';

// accessing login endpoint
function login() {
  const data = {
    "email": document.querySelector('#inputEmail').value,
    "password": document.querySelector('#inputPassword').value,
  }
  console.log(data);  // FOR TESTING
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
