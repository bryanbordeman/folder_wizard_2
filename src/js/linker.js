let {PythonShell} = require('python-shell')
var path = require("path")


function createOppLog(){
    // creates excel log of opportunity
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
        createOppRecord();
        });

    pyshell.end(function (err,code,signal) {
        if (err) {
            console.log('Error')
            successLog.setAttribute("style","display:none;");
            failLog.setAttribute("style","display:inline;");
            successRecord.setAttribute("style","display:none;");
            failRecord.setAttribute("style","display:inline;");
            successFolder.setAttribute("style","display:none;");
            failFolder.setAttribute("style","display:inline;");
            successReadme.setAttribute("style","display:none;");
            failReadme.setAttribute("style","display:inline;");
        }
        });
    
};

function eraseOppLog(){
    // erase last excel log of entry
    var args = localStorage.getItem("opportunity-inputs"); //get local var

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args :args,
        env: process.env,
    }
    let pyshell = new PythonShell('erase_opp_log.py', options);

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

function createOppRecord(){

    var args = localStorage.getItem("opportunity-inputs"); //get local var

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : args,
        env: process.env,
    }
    let pyshell = new PythonShell('create_opp_record.py', options);
  
    pyshell.on('message', function(message) {
            console.log(message);
            failRecord.setAttribute("style","display:none;");
            successRecord.setAttribute("style","display:inline;");
            createOppFolder()
            })

    pyshell.end(function (err) {
        if (err) {
            eraseOppLog();
            successRecord.setAttribute("style","display:none;");
            failRecord.setAttribute("style","display:inline;");
            successFolder.setAttribute("style","display:none;");
            failFolder.setAttribute("style","display:inline;");
            successReadme.setAttribute("style","display:none;");
            failReadme.setAttribute("style","display:inline;");
        }
        });
}

function eraseOppRecord(){
    // erase last record of entry
    var args = localStorage.getItem("opportunity-inputs"); //get local var

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args :args,
        env: process.env,
    }
    let pyshell = new PythonShell('erase_opp_record.py', options);

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

function createOppFolder(){

    var args = localStorage.getItem("opportunity-inputs"); //get local var

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : args,
        env: process.env,
    }
    let pyshell = new PythonShell('create_opp_folder.py', options);
  
    pyshell.on('message', function(message) {
            console.log(message);
            failFolder.setAttribute("style","display:none;");
            successFolder.setAttribute("style","display:inline;");
            createOppReadme()
            localStorage.setItem("directory", '/Users/bryanbordeman/Desktop/folder_wizard_2.0/test');
            })

    pyshell.end(function (err) {
        if (err) {
            eraseOppLog();
            eraseOppRecord();
            successFolder.setAttribute("style","display:none;");
            failFolder.setAttribute("style","display:inline;");
            successReadme.setAttribute("style","display:none;");
            failReadme.setAttribute("style","display:inline;");
        }
        });
}

function eraseOppFolder(){
    console.log('Opportunity Folder Deleted')
}

function createOppReadme(){

    var args = localStorage.getItem("opportunity-inputs"); //get local var

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args : args,
        env: process.env,
    }
    let pyshell = new PythonShell('create_opp_readme.py', options);

    pyshell.on('message', function(message) {
            console.log(message);
            failReadme.setAttribute("style","display:none;");
            successReadme.setAttribute("style","display:inline;");
            })

    pyshell.end(function (err) {
        if (err) {
            eraseOppLog();
            eraseOppRecord();
            eraseOppFolder();
            successReadme.setAttribute("style","display:none;");
            failReadme.setAttribute("style","display:inline;");
        }
    });
};


// project functions below
function createProjectLog(){
    // creates excel log of project
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


// project and opportunity functions below
function getNextNumber(dataType) {
    // fetches next number from database
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        mode: 'text',
        encoding: 'UTF-8',
        args : [dataType],
        pythonOptions: ['-u'],
        env: process.env,
    }

    let pyshell = new PythonShell('get_next_num.py', options);
   
    pyshell.on('message', function(message) {
        if (dataType == "opportunity"){
            localStorage.setItem("quote_number", message); //create local var
            document.getElementById("next-opp-num").innerHTML = "Are you sure you want to create Opportunity " + message + "?"
            console.log('Opportunity Number Created')
        }
        if (dataType == "project"){
            localStorage.setItem("p_project_number", message); //create local var
            document.getElementById("next-project-num").innerHTML = "Are you sure you want to create Project " + message + "?"
            console.log('Project Number Created')
        }
            });

    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        });
    }


function openFolder(){
    // erase last record of entry
    // var args = {directory: localStorage.getItem("directory")}; //get local var

    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        args :[],
        env: process.env,
    }
    let pyshell = new PythonShell('open_folder.py', options);

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

