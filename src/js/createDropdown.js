const mList = require('./src/json/projectCategoryList.json'); // load json to list
const managersList = require('./src/json/managerList.json'); // load json to list
const billingList = require('./src/json/billingList.json'); // load json to list
const orderList = require('./src/json/orderList.json'); // load json to list

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

function pCreateDropdownProject() {
  p_el_parent = document.getElementById("p-project-category");
  p_el_child = document.getElementById("p-project-type");
  
  for (key in mList) {
    p_el_parent.innerHTML = p_el_parent.innerHTML + '<option>'+ key +'</option>';
  }
  
  p_el_parent.addEventListener('change', function populate_child(e){
    p_el_child.innerHTML = '';
    itm = e.target.value;
    if(itm in mList){
        for (i = 0; i < mList[itm].length; i++) {
          p_el_child.innerHTML = p_el_child.innerHTML + '<option>'+ mList[itm][i][0] +'</option>';
        }
    }
  });
};


function createDropdownManager() {
    el_parent = document.getElementById("manager");
    
    for (key in managersList) {
      el_parent.innerHTML = el_parent.innerHTML + '<option>'+ key +'</option>';
    };
};


function createDropdownBilling() {
    el_parent = document.getElementById("p-project-billing");
    
    for (key in billingList) {
      el_parent.innerHTML = el_parent.innerHTML + '<option>'+ key +'</option>';
    };
};

function createDropdownOrder() {
  el_parent = document.getElementById("p-project-order");
  
  for (key in orderList) {
    el_parent.innerHTML = el_parent.innerHTML + '<option>'+ key +'</option>';
  };
};

function createDropdownCustomers(customers) {
  el_parent = document.getElementById("p-project-customers");
  el_parent.innerHTML = ""; 
  for (item in customers) {
    el_parent.innerHTML = el_parent.innerHTML + '<option>'+ customers[item] +'</option>';
  };
  document.getElementById('p-customer').value = customers[0];
};

