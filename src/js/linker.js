let {PythonShell} = require('python-shell')
var path = require("path")


function createLog(args){

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args :args,
        env: process.env,
    }
    let pyshell = new PythonShell('create_log.py', options);
  
    pyshell.on('message', function(message) {
        console.log(message);
        failLog.setAttribute("style","display:none;");
        successLog.setAttribute("style","display:inline;");
        createReadme();
        })

    pyshell.end(function (err) {
        if (err) {
            console.log('Error')
            successLog.setAttribute("style","display:none;");
            failLog.setAttribute("style","display:inline;");
            successReadme.setAttribute("style","display:none;");
            failReadme.setAttribute("style","display:inline;");
            successFolder.setAttribute("style","display:none;");
            failFolder.setAttribute("style","display:inline;");
            successRecord.setAttribute("style","display:none;");
            failRecord.setAttribute("style","display:inline;");
        }
        });
    
}

function createReadme(){
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : [],
        env: process.env,
    }
    let pyshell = new PythonShell('create_readme.py', options);
  
    pyshell.on('message', function(message) {
            console.log(message);
            failReadme.setAttribute("style","display:none;");
            successReadme.setAttribute("style","display:inline;");
            createRecord();
            })

    pyshell.end(function (err) {
        if (err) {
        console.log('Error')
        successReadme.setAttribute("style","display:none;");
        failReadme.setAttribute("style","display:inline;");
        successFolder.setAttribute("style","display:none;");
        failFolder.setAttribute("style","display:inline;");
        successRecord.setAttribute("style","display:none;");
        failRecord.setAttribute("style","display:inline;");
        }
        });
}

function createRecord(){

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : [],
        env: process.env,
    }
    let pyshell = new PythonShell('create_record.py', options);
  
    pyshell.on('message', function(message) {
            console.log(message);
            failRecord.setAttribute("style","display:none;");
            successRecord.setAttribute("style","display:inline;");
            createFolder()
            })

    pyshell.end(function (err) {
        if (err) {
        console.log('Error')
        successRecord.setAttribute("style","display:none;");
        failRecord.setAttribute("style","display:inline;");
        successFolder.setAttribute("style","display:none;");
        failFolder.setAttribute("style","display:inline;");
        }
        });
}

function createFolder(){

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : [],
        env: process.env,
    }
    let pyshell = new PythonShell('create_folder.py', options);
  
    pyshell.on('message', function(message) {
            console.log(message);
            failFolder.setAttribute("style","display:none;");
            successFolder.setAttribute("style","display:inline;");
            })

    pyshell.end(function (err) {
        if (err) {
        console.log('Error')
        successFolder.setAttribute("style","display:none;");
        failFolder.setAttribute("style","display:inline;");
        }
        });
}



function get_opp_input() {

    // var path = require("path")
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

    
    var args = [project_name, project_category , project_type, type_code, managersList[manager], project_zip, due_date, customers, quote_number, directory];
    
    createLog(args)

    // let pyshell = new PythonShell('server.py', options);
    // pyshell.on('message', function(message) {
    // swal(message);
    // })
    // pyshell.on('message', function(message) {
    //         console.log(message);
    //         })

    // pyshell.end(function (err,code,signal) {
    //     if (err) throw err;
    //     console.log('The exit code was: ' + code);
    //     console.log('The exit signal was: ' + signal);
    //     console.log('finished');
    //     });
    
    
    // clean form after submit
    document.getElementById("project-name").value = "";
    document.getElementById("project-category").value = "";
    document.getElementById("project-type").value = "";
    document.getElementById("manager").value = "";
    document.getElementById("project-zip").value = "";
    getDate(); // set due-date to today
    ul.replaceChildren(); // clean list of customers
    

    }


function get_next_number(dataType) {
    
    // let {PythonShell} = require('python-shell')
    // var path = require("path")
    // var next_opp_num = document.getElementById("next-opp-num").value
    
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        mode: 'text',
        encoding: 'UTF-8',
        args : [dataType],
        pythonOptions: ['-u'],
        env: process.env,

        
    }

    let pyshell = new PythonShell('get_next_num.py', options);
    // pyshell.on('message', function(message) {
    // swal(message);
    // })
    pyshell.on('message', function(message) {
        localStorage.setItem("quote_number", message); //create local var
        if (dataType == "opportunity"){
        document.getElementById("next-opp-num").innerHTML = "Are you sure you want to create Opportunity " + message + "?"
        }
        // console.log(message);
        // console.log(oppNum);
            })

    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        });
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
    
    console.log(p_opportunity, 
        p_project_name, 
        p_project_category, 
        p_project_type, 
        p_project_zip, 
        p_project_terms,
        p_customer,
        p_project_billing,
        p_project_order,
        p_tax,
        p_labor_U,
        p_labor_PR,
        p_labor_CP,
        p_labor_M,
        p_price,
        p_directory
        )
        
    clear_project_input();

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
}