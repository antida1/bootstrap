function nombreFuncion() {
	var username;
	var password;

	username="Mauro";
	password="12345";
	alert(username+' '+password)
}
function validate () {
  var username, password

  username = document.getElementById('username').value
  password = document.getElementById('password').value

  if ((username === undefined || username === '')|| (password === undefined || password === '')) {                  
    document.getElementById('error').style.color = "red"
    document.getElementById('error').innerHTML = 'Username or Password are invalid !.'
  } else {
    document.getElementById('error').style.color = "green"
    document.getElementById('error').innerHTML = 'Username and Password are valid !.'
  };
};