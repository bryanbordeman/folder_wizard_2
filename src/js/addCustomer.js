function addCustomer() {
    var ul = document.getElementById("dynamic-list");
    var customer = document.getElementById("customer");
    var li = document.createElement("li");
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    var customerToast = document.getElementById('customerToast');
    var toast = new bootstrap.Toast(customerToast);
    
    if (customer.value != "") {
    span.appendChild(txt);
    span.setAttribute('class',"close");

    span.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    ul.appendChild(li);
    li.setAttribute('id', customer.value);
    li.setAttribute('class',"list-group-item border-2 border-primary mb-1 text-left");
    li.appendChild(document.createTextNode(customer.value));
    customer.value = ''; // clear input field
    toast.dispose()
} else {
    //console.log('enter customer')
    toast.show()
}

    
};