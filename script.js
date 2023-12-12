// storing data from the form to local storage
function getData() {

	let fname = document.getElementById("fname");
	let lname = document.getElementById("lname");
	let q1 = document.querySelector("input[name=q1]:checked");
	let q2 = document.querySelectorAll("input[name=q2]:checked");
	let	number = document.getElementById("number");
	let email = document.getElementById("email");
	let message = document.getElementById("message");


	//store to local storage
	localStorage.setItem("firstname", fname.value);
	localStorage.setItem("lastname", lname.value);
	localStorage.setItem("radio1", q1.value);
	localStorage.setItem("Q2", setupCheckBox(q2));
	localStorage.setItem("number", number.value);
	localStorage.setItem("email", email.value);
	localStorage.setItem("message", message.value);

	//redirect to new page
	if(fname.value !== "" && lname.value !== "") {
		window.open("confirm.html", "_blank");
	}

}

// storing checkbox value on user select
function setupCheckBox(checkbox) {
	let array = [];
	for (let i = 0; i < checkbox.length; i++) {
		if(checkbox[i].checked) {
			array.push(checkbox[i].value);
		}
	}
	return array.join(', ');
}


// displaying data from local storage to another page
function displayData() {
	document.getElementById("confirmFName").innerHTML = localStorage.firstname;
	document.getElementById("confirmLName").innerHTML = localStorage.lastname;
	document.getElementById("studentQ1").innerHTML = localStorage.radio1;
	document.getElementById("q2").innerHTML = localStorage.Q2;
	document.getElementById("number").innerHTML = localStorage.number;
	document.getElementById("email").innerHTML= localStorage.email;
	document.getElementById("message").innerHTML= localStorage.message;
}




