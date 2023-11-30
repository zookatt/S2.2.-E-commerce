// Exercise 6

function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
    var lettersOnly = /^[a-zA-Z]+$/i;
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var numbersOnly = /^[0-9]+$/;

	if(fName.value == ""){
		error++;
		fName.classList.add('is-invalid');
	} else {
		
		if (!lettersOnly.test(fName.value)) {
			error++;
			fName.classList.add('is-invalid');
			errorName.innerHTML= "The first name must contain only letters."
			console.log("The first name must contain only letters.");
		} else if (fName.value.length < 3) {
			error++;
			fName.classList.add('is-invalid');
			console.log("All fields must have at least 3 characters.");
		}else{
			fName.classList.add('is-valid');
		}
		
	}

	if(fEmail.value == ""){
		error++;
		fEmail.classList.add('is-invalid');
		
	} else {
        
		if (!validEmail.test(fEmail.value)) {
			error++;
			fEmail.classList.add('is-invalid');
			errorEmail.innerHTML= "The email must have email format."
			console.log("The email must have email format.");
	
		}else if (fEmail.value.length < 3) {
			error++;
			fEmail.classList.add('is-invalid');
			console.log("All fields must have at least 3 characters.");
		}else{
			fEmail.classList.add('is-valid');
	    }
		
	}
	
	if(fAddress.value == ""){
		error++;
        fAddress.classList.add('is-invalid');

	}

	 
	if(fLastN.value == ""){
        error++;
		fLastN.classList.add('is-invalid');
		
    } else {
		
		if (!lettersOnly.test(fLastN.value)) {
			error++;
			fLastN.classList.add('is-invalid');
			errorLastN.innerHTML= "The last name must contain only letters."
			console.log("The last name must contain only letters.");
		} else if (fLastN.value.length < 3) {
			error++;
			fLastN.classList.add('is-invalid');
			console.log("All fields must have at least 3 characters.");
		}else{
			fLastN.classList.add('is-valid');
		}
		
	}
	
    if(fPassword.value == ""){
        error++;
		fPassword.classList.add('is-invalid');
		
    } else {
        
		if (numbersOnly.test(fPassword.value)||lettersOnly.test(fPassword.value)) {
			error++;
			fPassword.classList.add('is-invalid');
			errorPassword.innerHTML= "The password must contain numbers and letters."
			console.log("The password must include numbers and letters.");
	
		}else if (fPassword.value.length < 3) {
			error++;
			fPassword.classList.add('is-invalid');
			console.log("All fields must have at least 3 characters.");
		}else{
			fPassword.classList.add('is-valid');
	    }
		
	}

    if(fPhone.value == ""){
        error++;
		fPhone.classList.add('is-invalid');
		
    } else {
		
		if (!numbersOnly.test(fPhone.value)) {
			error++;
			fPhone.classList.add('is-invalid');
			errorPhone.innerHTML= "The phone must contain only numbers."
			console.log("The phone must contain only numbers.");
		} else if (fPhone.value.length < 3) {
			error++;
			fPhone.classList.add('is-invalid');
			console.log("All fields must have at least 3 characters.");
		}else{
			fPhone.classList.add('is-valid');
		}
		
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
    
}