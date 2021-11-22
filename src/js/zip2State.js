const zipCodeList = require('./src/json/zipCode.json'); // load json to list

function validateZip(){
    // validate opportinty zip
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
            localStorage.setItem("project-location", validZip.innerHTML);
            break;
        } else {
            zipInput.setAttribute('class',"form-control is-invalid");
            validZip.innerHTML = ''
            invalidZip.innerHTML = 'Invalid zip code'
        }
    };
};

function pValidateZip(){
    // validate project zip
    var zip_var = 0
    var zipInput = document.getElementById('p-project-zip');
    var validZip = document.getElementById('p-valid-zip');
    var invalidZip = document.getElementById('p-invalid-zip');
    if (zipInput) {
        zip_var = zipInput.value
    }
    
    for (i = 0; i < zipCodeList.length; i++){
        if (zipCodeList[i][2] <= zip_var && zipCodeList[i][3] >= zip_var) {
            zipInput.setAttribute('class',"form-control is-valid");
            validZip.innerHTML = zipCodeList[i][0] + ", " + zipCodeList[i][1];
            localStorage.setItem("project-state", zipCodeList[i][1]);
            break;
        } else {
            zipInput.setAttribute('class',"form-control is-invalid");
            validZip.innerHTML = ''
            invalidZip.innerHTML = 'Invalid zip code'
        }
    };
};


// ** make function that populates popover country code button

function countryPopover() {
    var countryIdx = (zipCodeList[zipCodeList.length - 1])[3] + 1// get index of counrties
    var counrtyCodeContentList = []
    var counrtyCodeContent = '';
    for (i = 1; i < countryIdx; i++){
        counrtyCodeContentList.unshift(zipCodeList[zipCodeList.length - i])
    }
    for (i = 0; i < counrtyCodeContentList.length; i++){
        counrtyCodeContent += '<p class="m-0 p-0">' + (counrtyCodeContentList[i][2]) + ' = ' + (counrtyCodeContentList[i][0]) + ', ' + (counrtyCodeContentList[i][1])+'</p>';

    }

    $(document).ready(function(){
        $("#counrty-code").popover({
            title : "Non-US codes",
            html: true,
            content : function() {
                return counrtyCodeContent;
            }
        });
        });
    $(document).ready(function(){
        $("#p-counrty-code").popover({
            title : "Non-US codes",
            html: true,
            content : function() {
                return counrtyCodeContent;
            }
        });
            });
};