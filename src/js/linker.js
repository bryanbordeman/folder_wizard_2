function get_opp_input() {
  
    let {PythonShell} = require('python-shell')
    var path = require("path")
    var project_name = document.getElementById("project-name").value
    var project_category = document.getElementById("project-category").value
    var project_type = document.getElementById("project-type").value
    var manager = document.getElementById("manager").value
    var project_zip = document.getElementById("project-zip").value
    var due_date = document.getElementById("due-date").value
    
    // make customers list from ul element
    var ul = document.getElementById("dynamic-list");
    const listItems = ul.getElementsByTagName('li');
    var customers = []
    for (let i = 0; i <= listItems.length - 1; i++) {
        customers.push(listItems[i].innerText);
    }
 
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : [project_name, project_category , project_type, manager, project_zip, due_date, customers]
    }
   
    
    let pyshell = new PythonShell('server.py', options);
    // pyshell.on('message', function(message) {
    // swal(message);
    // })
    pyshell.on('message', function(message) {
            console.log(message);
            })
        
    document.getElementById("project-name").value = "";
    document.getElementById("project-category").value = "";
    document.getElementById("project-type").value = "";
    document.getElementById("manager").value = "";
    document.getElementById("project-zip").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("dynamic-list").value = "";

    }

//     const {PythonShell} = require('python-shell');

//     let pyshell = new PythonShell('./engine/server.py');

//     pyshell.on('message', function(message) {
//     console.log(message);
//     })

//     pyshell.end(function (err) {
//     if (err){
//         throw err;
//     };
//     console.log('finished');
//     });
// }
    