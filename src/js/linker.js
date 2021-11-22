let {PythonShell} = require('python-shell')
var path = require("path")


function createOppLog(){
    getOpportunityInput()
    var args = localStorage.getItem("opportunity-inputs"); //get local var
    
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args :args,
        env: process.env,
    }
    let pyshell = new PythonShell('create_opp_log.py', options);
  
    pyshell.on('message', function(message) {
        console.log(message);
        failLog.setAttribute("style","display:none;");
        successLog.setAttribute("style","display:inline;");
        // createReadme();
        })

    pyshell.end(function (err,code,signal) {
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
            console.log('The exit code was: ' + code);
            console.log('The exit signal was: ' + signal);
            console.log('finished');
        }
        });
    
}

function createProjectLog(){
    getProjectInput()
    var args = localStorage.getItem("project-inputs"); //get local var
    
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args :args,
        env: process.env,
    }
    let pyshell = new PythonShell('create_project_log.py', options);
  
    pyshell.on('message', function(message) {
        console.log(message);
        })

    pyshell.end(function (err,code,signal) {
        if (err) {
            console.log('The exit code was: ' + code);
            console.log('The exit signal was: ' + signal);
            console.log('finished');
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


