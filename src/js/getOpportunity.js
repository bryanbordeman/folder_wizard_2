function getOpportunity(){
    var p_opportunity = document.getElementById("p-opportunity")
    var p_project_name = document.getElementById("p-project-name");
    var p_project_category = document.getElementById("p-project-category");
    var p_project_type = document.getElementById("p-project-type");
    var p_project_zip = document.getElementById("p-project-zip");
    var p_customer = document.getElementById("p-customer");

    if (p_opportunity) {
        var quote = p_opportunity.value.slice(0,7)
    }
    else {
        var quote =""
    }
    
    var options = {
        scriptPath : path.join(__dirname, './engine/'),
        mode: 'text',
        encoding: 'UTF-8',
        args : [quote],
        pythonOptions: ['-u'],
        env: process.env,

        
    }

    let pyshell = new PythonShell('get_opportunity.py', options);
    // pyshell.on('message', function(message) {
    // swal(message);
    // })
    pyshell.on('message', function(message) {
        // if (dataType == "opportunity"){
        // document.getElementById("next-opp-num").innerHTML = "Are you sure you want to create Opportunity " + message + "?"
        // }

        
        var quoteList = message;
        console.log(quoteList)
        // console.log(oppNum);
            })

    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        });
}