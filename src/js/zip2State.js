const zipCodeList = require('./src/json/zipCode.json'); // load json to list


function validateZip(){
    // console.log('validate input')

// console.log(zipCodeList)
// for (i = 0; i < zipCodeList.length; i++) {
//     console.log(zipCodeList[i]);
//   }
    var zip_var = 7004
   
    var state = ""
    var state_code = ""

    for (i = 0; i < zipCodeList.length; i++){

        if (zipCodeList[i][2] <= zip_var && zipCodeList[i][3] >= zip_var) {
            console.log(zipCodeList[i][0] + ", " + zipCodeList[i][1])
            
        } 
        //     state_code = 'Invalid zip code'
        // }
    
//     // return state_code
// }
};
};


