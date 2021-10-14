function addCustomer() {
    var ul = document.getElementById("dynamic-list");
    var customer = document.getElementById("customer");
    var li = document.createElement("li");
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    
    span.appendChild(txt);
    span.setAttribute('style',"color: white; font-size: 32px; padding: 0; text-align: center; margin-right: 20px; center; cursor: pointer;");
    span.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    ul.appendChild(li);
    li.setAttribute('id', customer.value);
    li.setAttribute('class',"list-group-item border-2 border-primary mb-1 text-left pt-0 pb-0");
    li.appendChild(document.createTextNode(customer.value));
    customer.value = ''; // clear input field
    
}