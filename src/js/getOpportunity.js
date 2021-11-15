function getOpportunity(){
    var p_opportunity = document.getElementById("p-opportunity")
    var p_project_name = document.getElementById("p-project-name");
    var p_project_category = document.getElementById("p-project-category");
    var p_project_type = document.getElementById("p-project-type");
    var p_project_zip = document.getElementById("p-project-zip");
    var p_customers_col = document.getElementById("p-customers-col");
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

    PythonShell.run('get_opportunity.py', options, function (err, results) {
        if (err) throw err;
        var quoteList = results;

        

        p_project_name.value = quoteList[2]
        p_project_category.value = quoteList[3]
        p_project_type.innerHTML = '<option>'+ quoteList[4]+'</option>'
        p_project_zip.value = quoteList[6]
        pValidateZip()
        

        // below is customer input field 
        // make raw list from output
        var customersRaw = quoteList[7].split(',')
        var customers = []

        for (var i = 0; i < customersRaw.length; i++) {
            // refine string
            customers.push(customersRaw[i].toString().replace(/[']+/g, '').replace(/[\[\]]/g, "").trim())
        }
       
        if (customers.length > 1){
            // if multiple customers exist make list
            p_customer.value = ""
            p_customers_col.setAttribute("style","display:inline;");
            createDropdownCustomers(customers)
        }
        else {
            // if only one customer exist move value to customer input
            p_customers_col.setAttribute("style","display:none;");
            p_customer.value = customers
        }
        
    });
}