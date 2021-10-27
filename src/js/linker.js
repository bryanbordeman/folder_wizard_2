

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


function get_next_number() {
    
    let {PythonShell} = require('python-shell')
    var path = require("path")
    // var next_opp_num = document.getElementById("next-opp-num").value

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        mode: 'text',
        encoding: 'UTF-8',
        pythonOptions: ['-u'],
        // env: process.env,

        
    }

    let pyshell = new PythonShell('get_next_num.py', options);
    // pyshell.on('message', function(message) {
    // swal(message);
    // })
    pyshell.on('message', function(message) {
        localStorage.setItem("opp-num", message); //create local var
        document.getElementById("next-opp-num").innerHTML = "Are you sure you want to create Opportunity " + message + "?"
        // console.log(message);
        var oppNum = localStorage.getItem("opp-num"); //get local var
        // console.log(oppNum);
            
            })

    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        });

    
    
    }

