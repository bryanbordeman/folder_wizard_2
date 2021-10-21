const zipCodeList = require('./src/json/zipCode.json'); // load json to list

function validateZip(){
    var zip_var = 0
    var zipInput = document.getElementById('project-zip');
    var validZip = document.getElementById('valid-zip');
    var invalidZip = document.getElementById('invalid-zip');
    if (zipInput) {
        zip_var = zipInput.value
    }
    
    for (i = 0; i < zipCodeList.length; i++){
        if (zipCodeList[i][2] <= zip_var && zipCodeList[i][3] >= zip_var) {
            zipInput.setAttribute('class',"form-control is-valid");
            validZip.innerHTML = zipCodeList[i][0] + ", " + zipCodeList[i][1];
            break;
        } else {
            zipInput.setAttribute('class',"form-control is-invalid");
            validZip.innerHTML = ''
            invalidZip.innerHTML = 'Invalid zip code'
        }
    };
};


// ** make function that populates popover country code button