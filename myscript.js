function submitFunction() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userSex = choiceSex();
    var userEmail = document.getElementById("userEmail").value;
    var userPWORD = document.getElementById("pWord").value;
    var userSupport = document.getElementById("support").value;
    
    if (firstName == ""){
        firstNameNOTICE.innerHTML = "required";
    }
    if(lastName == ""){
        lastNameNOTICE.innerHTML = "required";
    }
    if(userSex == ""){
        secretNOTICE.innerHTML = "required";
    }
    if(userEmail == ""){
        userEmailNOTICE.innerHTML = "required";
    }
    if(userPWORD == ""){
        pWordNOTICE.innerHTML = "required";
    } 
    if(userSupport==""){
        supportNOTICE.innerHTML = "required";
    } else {
        alert("Good job!");
    }

    return false;
}

function choiceSex(){
    var sex="";
    var sexChoice = document.getElementsByName("sex");
    for (var counter=0; counter<sexChoice.length; counter++){
        if (sexChoice[counter].checked){
            sex += sexChoice[counter].value;
        }
    }

    return sex;
}

function checkFN(){
    firstNameNOTICE.innerHTML="";
}

function checkLN(){
    lastNameNOTICE.innerHTML = "";
}

function checkSex(){
    secretNOTICE.innerHTML = "";
}

function checkEmail(){
    userEmailNOTICE.innerHTML = "";
}

function checkPWord(){
    pWordNOTICE.innerHTML = "";
}

function checkSupport(){
    supportNOTICE.innerHTML = "";
}
