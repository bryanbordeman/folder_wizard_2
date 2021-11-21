function get_opportunity_input() {
    // collects inputs and returns object
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
        directory: directory
    };
    clear_opportunity_input()
    localStorage.setItem("opportunity-inputs", JSON.stringify(inputs));
    return inputs

    }


function get_project_input() {

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
    
    // check type of project being created
    if (p_project) {
        var p_directory = createDirectory().projectDirectory
    }
    if (p_service) {
        var p_directory = createDirectory().serviceDirectory
    }
    if (p_HSE) {
        var p_directory = createDirectory().HSEDirectory
    }
    var inputs = {p_project_name: p_project_name, 
        p_project_category: p_project_category,
        p_project_type: p_project_type,
        p_project_zip: p_project_zip,
        p_project_terms: p_project_terms,
        p_customer: p_customer,
        p_project_billing: p_project_billing,
        p_project_order: p_project_order,
        p_tax: p_tax,
        p_labor_U: p_labor_U, 
        p_labor_PR: p_labor_PR,
        p_labor_CP: p_labor_CP,
        p_labor_M: p_labor_M,
        p_price: p_price,
        p_directory: p_directory,
    };

    clear_project_input();
    localStorage.setItem("project-inputs", inputs);
    console.log(inputs)
    return inputs

    };

function clear_project_input() {
    var p_opportunity = document.getElementById("p-opportunity")
    var p_project_name = document.getElementById("p-project-name")
    var p_project_category = document.getElementById("p-project-category")
    var p_project_type = document.getElementById("p-project-type")
    var p_project_zip = document.getElementById("p-project-zip")
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

    p_opportunity.value = ''
    p_project_name.value = ''
    p_project_category.value = '' 
    p_project_type.value = ''
    p_project_zip.value = '' 
    p_project_terms.value = ''
    p_customer.value = ''
    p_project_billing.value = ''
    p_project_order.value = ''
    p_tax.checked = false
    p_labor_U.checked = false
    p_labor_PR.checked = false
    p_labor_CP.checked = false
    p_labor_M.checked = false
    p_price.value = ''

    // if dropdown for customer selection is active hide
    var p_customers_col = document.getElementById("p-customers-col");
    p_customers_col.setAttribute("style","display:none;");
    
}

function clear_opportunity_input(){
    var project_name = document.getElementById("project-name")
    var project_category = document.getElementById("project-category")
    var project_type = document.getElementById("project-type")
    var manager = document.getElementById("manager")
    var project_zip = document.getElementById("project-zip")
    var due_date = document.getElementById("due-date")
    var ul = document.getElementById("dynamic-list");

    // clean form after submit
    document.getElementById("project-name").value = "";
    document.getElementById("project-category").value = "";
    document.getElementById("project-type").value = "";
    document.getElementById("manager").value = "";
    document.getElementById("project-zip").value = "";
    getDate(); // set due-date to today
    ul.replaceChildren(); // clean list of customers
}    