let form= document.getElementById("addForm");
let itemList=document.getElementById("items");
let filter=document.getElementById("filter");

form.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);

function removeItem(e){
if(e.target.classList.contains("btn")){
    let li=e.target.parentElement;
    itemList.removeChild(li);
}
}


function addItem(e){
        e.preventDefault();
        let newItem=document.getElementById("item").value;
        let li=document.createElement("li")
        let btn=document.createElement("button");
        btn.className="btn btn-danger btn-sm float-right delete";
        btn.appendChild(document.createTextNode("x"));
        li.appendChild(btn)
        li.classList="list-group-item";
       
        li.appendChild(document.createTextNode(newItem));
        itemList.appendChild(li)
};


function filterItem(e) {
    
    var text = e.target.value.toLowerCase();

    
    var items = document.getElementsByTagName("li");


    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}











