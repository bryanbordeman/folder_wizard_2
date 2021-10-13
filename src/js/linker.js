function get_input() {
  
    let {PythonShell} = require('python-shell')
    var path = require("path")
    var input = document.getElementById("projectName").value
 
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : [input]
    }
   
    
    let pyshell = new PythonShell('server.py', options);
    // pyshell.on('message', function(message) {
    // swal(message);
    // })
    pyshell.on('message', function(message) {
            console.log(message);
            })
        
    document.getElementById("projectName").value = "";

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
    