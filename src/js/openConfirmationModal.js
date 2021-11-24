const $ = jQuery = require('jquery');

function openOppConfirmtionModal(){
    // check all input fields are correct and fetch next opportunity number
    var project_name = document.getElementById("project-name");
    var project_category = document.getElementById("project-category");
    var project_type = document.getElementById("project-type");
    var manager = document.getElementById("manager");
    var project_zip = document.getElementById("project-zip");
    var validZip = document.getElementById('valid-zip');
    var invalidZip = document.getElementById('invalid-zip');
    var due_date = document.getElementById("due-date");
    
    // make array of DOM objects
    confirmationArray = [project_name, project_category , project_type, manager, project_zip, due_date]
    
    let result = true;
    let resultsArray =[];

    // loop through DOM objects to check for blanks and save results to array.
    for (let i = 0; i < confirmationArray.length; i++) {
        if (confirmationArray[i].value == "") {
            resultsArray.push(false)
            result = false 
        } else {
            resultsArray.push(true) 
        }
    }
    // loop through array for false bool and make as invalid input.
    for (let i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i] == false) {
            confirmationArray[i].setAttribute('class',"form-control is-invalid");
        } else {
            confirmationArray[i].setAttribute('class',"form-control");
        }
    }

    // if all inputs are valid show modal
    if (result == true) {
        $("#oppVerificationModal").modal('show');
        getNextNumber("opportunity");
    }
}


function openProjectConfirmtionModal(){
    // check all input fields are correct and fetch next opportunity number
    let result = true;
    
    // if all inputs are valid show modal
    if (result == true) {
        $("#projectVerificationModal").modal('show');
        getNextNumber("project");
    }
}