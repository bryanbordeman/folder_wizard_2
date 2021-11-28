// load json to list
const log = require('./src/json/logs.json'); // location of logs

function getOpportunityInput() {
    // collect input data from form and store in object called inputs
    var project_name = document.getElementById("project-name").value
    var project_category = document.getElementById("project-category").value
    var project_type = document.getElementById("project-type").value
    var manager = document.getElementById("manager").value
    var project_zip = document.getElementById("project-zip").value
    var due_date = document.getElementById("due-date").value
    var directory = createDirectory().opportunityDirectory

    var type_code = ''
    // find type code
    for (i = 0; i <= mList[project_category].length - 1; i++) {
        if (mList[project_category][i][0] == project_type) {
            type_code = mList[project_category][i][1];
        }
    }

    // make customers list from ul element
    var ul = document.getElementById("dynamic-list");
    const listItems = ul.getElementsByTagName('li');
    var customers = []
    for (i = 0; i <= listItems.length - 1; i++) {
        // substring to omit new line and * at from of string
        customers.push(listItems[i].innerText.substring(2));
    }
    var quote_number = localStorage.getItem("quote_number"); //get local var

    
    var inputs = {project_name: project_name, 
        project_category: project_category , 
        project_type: project_type, 
        type_code: type_code, 
        manager: managersList[manager], 
        project_zip: project_zip, 
        project_location: localStorage.getItem("project-location"),
        due_date: due_date, 
        customers: customers, 
        quote_number: quote_number, 
        directory: directory,
        log: log['quoteLog']
    };
    clear_opportunity_input()
    localStorage.setItem("opportunity-inputs", JSON.stringify(inputs));
    return inputs

    }


function getProjectInput() {
    // collect input data from form and store in object called inputs
    var p_project = document.getElementById("p-project").checked
    var p_service = document.getElementById("p-service").checked
    var p_HSE = document.getElementById("p-HSE").checked
    var p_opportunity = document.getElementById("p-opportunity").value
    var p_project_name = document.getElementById("p-project-name").value
    var p_project_category = document.getElementById("p-project-category").value
    var p_project_type = document.getElementById("p-project-type").value
    var p_project_zip = document.getElementById("p-project-zip").value
    var p_project_terms = document.getElementById("p-project-terms").value
    var p_customer = document.getElementById("p-customer").value
    var p_project_billing = document.getElementById("p-project-billing").value
    var p_project_order = document.getElementById("p-project-order").value
    var p_tax = document.getElementById("p-tax").checked
    var p_labor_U = document.getElementById("labor-U").checked
    var p_labor_PR = document.getElementById("labor-PR").checked
    var p_labor_CP = document.getElementById("labor-CP").checked
    var p_labor_M = document.getElementById("labor-M").checked
    var p_price = document.getElementById("p-price").value.substring(1)
    
    var type_code = ''
    // find type code
    for (i = 0; i <= mList[p_project_category].length - 1; i++) {
        if (mList[p_project_category][i][0] == p_project_type) {
            type_code = mList[p_project_category][i][1];
        }
    }

    var p_sort = ''
    
    // check type of project being created
    if (p_project) {
        var p_directory = createDirectory().projectDirectory
        p_sort = "project"
    }
    if (p_service) {
        var p_directory = createDirectory().serviceDirectory
        p_sort = "service"
    }
    if (p_HSE) {
        var p_directory = createDirectory().HSEDirectory
        p_sort = "HSE"
    }

    // create labor input from var's 
    labor = ''
    laborList = []

    // add items to list
    if (p_labor_CP) {
        laborList.push('CP')
    }
    if (p_labor_M) {
        laborList.push('M')
    }
    if (p_labor_PR) {
        laborList.push('PR')
    }
    if (p_labor_U) {
        laborList.push('U')
    }

    // create string from list items
    for(let i = 0; i < laborList.length; i++){ 
        labor += laborList[i] + ',';
        }
    labor = labor.replace(/,(\s+)?$/, ''); // remove comma at end

    var p_project_number = localStorage.getItem("p_project_number"); //get local var

    var inputs = {p_sort: p_sort,
        p_project_number: p_project_number,
        p_project_name: p_project_name, 
        p_project_category: p_project_category,
        p_project_type: p_project_type,
        p_type_code: type_code,
        p_project_zip: p_project_zip,
        p_project_state: localStorage.getItem("project-state"),
        p_project_terms: p_project_terms,
        p_customer: p_customer,
        p_opportunity: p_opportunity,
        p_project_billing: billingList[p_project_billing],
        p_project_order: p_project_order,
        p_tax: p_tax.toString(),
        p_labor: labor, 
        p_price: p_price,
        p_directory: p_directory,
        log: log['projectLog']
    };

    clear_project_input();
    localStorage.setItem("project-inputs", JSON.stringify(inputs));
    // console.log(inputs)
    return inputs
    

    };

function clear_project_input() {
    // clear form data
    var p_opportunity = document.getElementById("p-opportunity")
    var p_project_name = document.getElementById("p-project-name")
    var p_project_category = document.getElementById("p-project-category")
    var p_project_type = document.getElementById("p-project-type")
    var p_project_zip = document.getElementById("p-project-zip")
    var p_valid_zip = document.getElementById("p-valid-zip")
    var p_invalid_zip = document.getElementById("p-invalid-zip")
    var p_project_terms = document.getElementById("p-project-terms")
    var p_customer = document.getElementById("p-customer")
    var p_project_billing = document.getElementById("p-project-billing")
    var p_project_order = document.getElementById("p-project-order")
    var p_tax = document.getElementById("p-tax")
    var p_labor_U = document.getElementById("labor-U")
    var p_labor_PR = document.getElementById("labor-PR")
    var p_labor_CP = document.getElementById("labor-CP")
    var p_labor_M = document.getElementById("labor-M")
    var p_price = document.getElementById("p-price")

    p_opportunity.value = '';
    p_project_name.value = '';
    p_project_category.value = '';
    p_project_type.value = '';
    p_project_type.innerHTML = '<option value="" selected disabled hidden>Select Category First</option>';
    p_project_zip.value = '';
    p_valid_zip.innerHTML = "";
    p_invalid_zip.innerHTML = "";
    p_project_terms.value = '';
    p_customer.value = '';
    p_project_billing.value = '';
    p_project_order.value = '';
    p_tax.checked = false;
    p_labor_U.checked = false;
    p_labor_PR.checked = false;
    p_labor_CP.checked = false;
    p_labor_M.checked = false;
    p_price.value = '';

    // if dropdown for customer selection is active hide
    var p_customers_col = document.getElementById("p-customers-col");
    p_customers_col.setAttribute("style","display:none;");
    
}

function clear_opportunity_input(){
    // clear form data
    var project_name = document.getElementById("project-name")
    var project_category = document.getElementById("project-category")
    var project_type = document.getElementById("project-type")
    var manager = document.getElementById("manager")
    var project_zip = document.getElementById("project-zip")
    var valid_zip = document.getElementById("valid-zip")
    var invalid_zip = document.getElementById("invalid-zip")
    var ul = document.getElementById("dynamic-list");

    // clean form after submit
    project_name.value = "";
    project_category.value = "";
    project_type.value = "";
    project_type.innerHTML = '<option value="" selected disabled hidden>Select Category First</option>';
    manager.value = "";
    project_zip.value = "";
    valid_zip.innerHTML = "";
    invalid_zip.innerHTML = "";
    getDate(); // set due-date to today
    ul.replaceChildren(); // clean list of customers
}    