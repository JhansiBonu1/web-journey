let input = document.getElementById("item");
let btn = document.getElementById("btn");
let itemlist = document.getElementById("itemlist");

btn.addEventListener("click", function () {
    let value = input.value;
    if (value.trim() !== "") {   
        let li = document.createElement("li");
        li.textContent = value;
        li.addEventListener("click", function () {
            itemlist.removeChild(li);
        });
        itemlist.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a valid item");
    }
});
