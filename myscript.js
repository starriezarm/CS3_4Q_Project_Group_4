// Function to submit user input from the form
function submitInput() {
    // Retrieve user input values
    var userFN = document.getElementById("firstName").value;
    var userLN = document.getElementById("lastName").value;
    var userSex = sexChoice(); // Get the selected sex choice
    var userEmail = document.getElementById("email").value;
    var userPWORD = document.getElementById("pWord").value;
    var userSupport = document.getElementById("supportText").value;
    
    // Check if any required field is empty
    if((userFN == "")||(userLN == "")||(userSex == "")||(userEmail == "")||(userPWORD == "")||(userSupport=="")){
        // If any required field is empty, display "required" message for each empty field
        if(userFN == ""){
            document.getElementById("FNrequired").innerHTML = "required";
        }
        if(userLN == ""){
            document.getElementById("LNrequired").innerHTML = "required";
        }
        if(userSex == ""){
            document.getElementById("SEXrequired").innerHTML = "required";
        }
        if(userEmail == ""){
            document.getElementById("EMAILrequired").innerHTML = "required";
        }
        if(userPWORD == ""){
            document.getElementById("PWORDrequired").innerHTML = "required";
        } 
        if(userSupport == ""){
            document.getElementById("SUPPORTrequired").innerHTML = "required";
        } 
    } else {
        // If all required fields are filled, store the data in local storage and redirect to profile.html
        localStorage.setItem("storeFN", userFN);
        localStorage.setItem("storeLN", userLN);
        localStorage.setItem("storeSex", userSex);
        localStorage.setItem("storeEmail", userEmail);
        localStorage.setItem("storeSupport", userSupport);

        window.open("profile.html", "_self");
    }
    
    return false; // Prevent form submission
}

// Function to output user data on the profile page
function output(){
    // Retrieve user data from local storage
    var userFN = localStorage.getItem("storeFN");
    var userLN = localStorage.getItem("storeLN");
    var userSex = localStorage.getItem("storeSex");
    var userEmail = localStorage.getItem("storeEmail");
    var userSupport = localStorage.getItem("storeSupport");

    // Display user data on the profile page
    document.getElementById("outputFN").innerHTML += userFN;
    document.getElementById("outputLN").innerHTML += userLN + ", ";
    document.getElementById("outputSex").innerHTML += userSex;
    document.getElementById("outputEmail").innerHTML += userEmail;
    document.getElementById("outputSupport").innerHTML += userSupport;

    return false; // Prevent default action
}

// Function to get the selected sex choice from radio buttons
function sexChoice(){
    var sex="";
    var sexChoice = document.getElementsByName("sex");
    for (var counter=0; counter<sexChoice.length; counter++){
        if (sexChoice[counter].checked){
            sex += sexChoice[counter].value;
        }
    }

    return sex;
}

// Functions to clear validation messages when user inputs data
function checkFN(){
    document.getElementById("FNrequired").innerHTML="";
}

function checkLN(){
    document.getElementById("LNrequired").innerHTML = "";
}

function checkSex(){
    document.getElementById("SEXrequired").innerHTML = "";
}

function checkEmail(){
    document.getElementById("EMAILrequired").innerHTML = "";
}

function checkPWord(){
    document.getElementById("PWORDrequired").innerHTML = "";
}

function checkSupport(){
    document.getElementById("SUPPORTrequired").innerHTML = "";
}

