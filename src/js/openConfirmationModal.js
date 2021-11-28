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
    // check all input fields are correct and fetch next project number
    var p_project = document.getElementById("p-project").checked
    var p_service = document.getElementById("p-service").checked
    var p_HSE = document.getElementById("p-HSE").checked

    var p_project_name = document.getElementById("p-project-name")
    var p_project_category = document.getElementById("p-project-category")
    var p_project_type = document.getElementById("p-project-type")
    var p_project_zip = document.getElementById("p-project-zip")
    var p_project_terms = document.getElementById("p-project-terms")
    var p_customer = document.getElementById("p-customer")
    var p_project_billing = document.getElementById("p-project-billing")
    var p_project_order = document.getElementById("p-project-order")
    var p_price = document.getElementById("p-price")
    
    // make array of DOM objects
    confirmationArray = [p_project_name, p_project_category, p_project_type, p_project_zip, p_project_terms, p_customer, p_project_billing, p_project_order, p_price]
    
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
        $("#projectVerificationModal").modal('show');

         // check type of project being created
    if (p_project) {
        getNextNumber("project");
    }
    if (p_service) {
        getNextNumber("service");
    }
    if (p_HSE) {
        getNextNumber("HSE");
    }
    }
}