// Function to submit user input from the form
function submitInput() {
    // Retrieve user input values
    var userFN = document.getElementById("firstName").value; // Get first name from the input field
    var userLN = document.getElementById("lastName").value; // Get last name from the input field
    var userSex = sexChoice(); // Get the selected sex choice using another function
    var userEmail = document.getElementById("email").value; // Get email from the input field
    var userPWORD = document.getElementById("pWord").value; // Get password from the input field
    var userSupport = document.getElementById("supportText").value; // Get support text from the input field
    
    // Check if any required field is empty
    if((userFN == "")||(userLN == "")||(userSex == "")||(userEmail == "")||(userPWORD == "")||(userSupport=="")){
        // If any required field is empty, display "required" message for each empty field
        if(userFN == ""){
            document.getElementById("FNrequired").innerHTML = "required"; // Display "required" for first name
        }
        if(userLN == ""){
            document.getElementById("LNrequired").innerHTML = "required"; // Display "required" for last name
        }
        if(userSex == ""){
            document.getElementById("SEXrequired").innerHTML = "required"; // Display "required" for sex
        }
        if(userEmail == ""){
            document.getElementById("EMAILrequired").innerHTML = "required"; // Display "required" for email
        }
        if(userPWORD == ""){
            document.getElementById("PWORDrequired").innerHTML = "required"; // Display "required" for password
        } 
        if(userSupport == ""){
            document.getElementById("SUPPORTrequired").innerHTML = "required"; // Display "required" for support text
        } 
    } else {
        // If all required fields are filled, store the data in local storage and redirect to profile.html
        localStorage.setItem("storeFN", userFN); // Store first name in local storage
        localStorage.setItem("storeLN", userLN); // Store last name in local storage
        localStorage.setItem("storeSex", userSex); // Store sex in local storage
        localStorage.setItem("storeEmail", userEmail); // Store email in local storage
        localStorage.setItem("storeSupport", userSupport); // Store support text in local storage

        window.open("profile.html", "_self"); // Redirect to profile.html
    }
    
    return false; // Prevent form submission
}

// Function to output user data on the profile page
function output(){
    // Retrieve user data from local storage
    var userFN = localStorage.getItem("storeFN"); // Get first name from local storage
    var userLN = localStorage.getItem("storeLN"); // Get last name from local storage
    var userSex = localStorage.getItem("storeSex"); // Get sex from local storage
    var userEmail = localStorage.getItem("storeEmail"); // Get email from local storage
    var userSupport = localStorage.getItem("storeSupport"); // Get support text from local storage

    // Display user data on the profile page
    document.getElementById("outputFN").innerHTML += userFN; // Display first name
    document.getElementById("outputLN").innerHTML += userLN + ", "; // Display last name
    document.getElementById("outputSex").innerHTML += userSex; // Display sex
    document.getElementById("outputEmail").innerHTML += userEmail; // Display email
    document.getElementById("outputSupport").innerHTML += '"' + userSupport + '"'; // Display support text

    return false; // Prevent default action
}

// Function to get the selected sex choice from radio buttons
function sexChoice(){
    var sex=""; // Variable to store sex choice
    var sexChoice = document.getElementsByName("sex"); // Get all elements with the name "sex"
    for (var counter=0; counter<sexChoice.length; counter++){
        if (sexChoice[counter].checked){ // Check if the radio button is checked
            sex += sexChoice[counter].value; // Get the value of the checked radio button
        }
    }

    return sex; // Return the selected sex choice
}

// Functions to clear validation messages when user inputs data
function checkFN(){
    document.getElementById("FNrequired").innerHTML=""; // Clear the "required" message for first name
}

function checkLN(){
    document.getElementById("LNrequired").innerHTML = ""; // Clear the "required" message for last name
}

function checkSex(){
    document.getElementById("SEXrequired").innerHTML = ""; // Clear the "required" message for sex
}

function checkEmail(){
    document.getElementById("EMAILrequired").innerHTML = ""; // Clear the "required" message for email
}

function checkPWord(){
    document.getElementById("PWORDrequired").innerHTML = ""; // Clear the "required" message for password
}

function checkSupport(){
    document.getElementById("SUPPORTrequired").innerHTML = ""; // Clear the "required" message for support text
}

