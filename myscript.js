function submitInput() {
    var userFN = document.getElementById("firstName").value;
    var userLN = document.getElementById("lastName").value;
    var userSex = sexChoice();
    var userEmail = document.getElementById("email").value;
    var userPWORD = document.getElementById("pWord").value;
    var userSupport = document.getElementById("supportText").value;
    
    if((userFN == "")||(userLN == "")||(userSex == "")||(userEmail == "")||(userPWORD == "")||(userSupport=="")){
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
        localStorage.setItem("storeFN", userFN);
        localStorage.setItem("storeLN", userLN);
        localStorage.setItem("storeSex", userSex);
        localStorage.setItem("storeEmail", userEmail);
        localStorage.setItem("storeSupport", userSupport);

        window.open("profile.html", "_self");
    }
    
    return false;
}

function output(){
    var userFN = localStorage.getItem("storeFN");
    var userLN = localStorage.getItem("storeLN");
    var userSex = localStorage.getItem("storeSex");
    var userEmail = localStorage.getItem("storeEmail");
    var userSupport = localStorage.getItem("storeSupport");

    document.getElementById("outputFN").innerHTML += userFN;
    document.getElementById("outputLN").innerHTML += userLN + ", ";
    document.getElementById("outputSex").innerHTML += userSex;
    document.getElementById("outputEmail").innerHTML += userEmail;
    document.getElementById("outputSupport").innerHTML += userSupport;

    return false;
}

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
