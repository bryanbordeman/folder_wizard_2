

function get_opp_input() {
  
    let {PythonShell} = require('python-shell')
    var path = require("path")
    var project_name = document.getElementById("project-name").value
    var project_category = document.getElementById("project-category").value
    var project_type = document.getElementById("project-type").value
    var manager = document.getElementById("manager").value
    var project_zip = document.getElementById("project-zip").value
    var due_date = document.getElementById("due-date").value

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
  
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : [project_name, project_category , project_type, type_code, manager, project_zip, due_date, customers],
        env: process.env,
    }

    let pyshell = new PythonShell('server.py', options);
    // pyshell.on('message', function(message) {
    // swal(message);
    // })
    pyshell.on('message', function(message) {
            console.log(message);
            })

    pyshell.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });
    
    
    // clean form after submit
    document.getElementById("project-name").value = "";
    document.getElementById("project-category").value = "";
    document.getElementById("project-type").value = "";
    document.getElementById("manager").value = "";
    document.getElementById("project-zip").value = "";
    document.getElementById("due-date").value = "";
    ul.replaceChildren(); // clean list of customers

    }

function testError(){

    var project_name = document.getElementById("project-name").value
    const {PythonShell} = require('python-shell');
    var path = require("path")

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : [project_name],

    }

    let pyshell = new PythonShell('test_error.py', options);

    pyshell.on('message', function(message) {
    console.log(message);
    })

    pyshell.end(function (err) {
    if (err){
        throw err;
    };
    console.log('finished');
    });
}
