const form = document.getElementById('form');
const username = document.getElementById('username');
const secondname = document.getElementById('secondname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
    const secondnameValue = secondname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'First name cannot be empty');
	} 
	if(secondnameValue === ''){
		setErrorFor(secondname, 'Second name cannot be empty');
	} 

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like not a email');
	} 
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} 
    if(usernameValue !== '' && secondnameValue !== '' && emailValue !==  '' && passwordValue !=='' && isEmail(emailValue) ) {
        document.getElementById("form").submit();
    }
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













