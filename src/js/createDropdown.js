const mList = require('./src/json/projectCategoryList.json'); // load json to list

function createDropdownProject() {
    el_parent = document.getElementById("project-category");
    el_child = document.getElementById("project-type");
    
    for (key in mList) {
      el_parent.innerHTML = el_parent.innerHTML + '<option>'+ key +'</option>';
    }
    
    el_parent.addEventListener('change', function populate_child(e){
      el_child.innerHTML = '';
      itm = e.target.value;
      if(itm in mList){
          for (i = 0; i < mList[itm].length; i++) {
            el_child.innerHTML = el_child.innerHTML + '<option>'+ mList[itm][i][0] +'</option>';
          }
      }
    });
};
  
const managersList = require('./src/json/managerList.json'); // load json to list

function createDropdownManager() {
    el_parent = document.getElementById("manager");
    
    for (key in managersList) {
      // console.log(key)
      el_parent.innerHTML = el_parent.innerHTML + '<option>'+ key +'</option>';
    };
};