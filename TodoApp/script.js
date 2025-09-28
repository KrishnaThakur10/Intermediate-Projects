const inputBox = document.querySelector("#input-box")
const listCointainer = document.querySelector("#list-cointainer")
const button = document.querySelector("button")

function addTask(){
    if (inputBox.value === "") {
        alert("Please enter a something");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCointainer.appendChild(li);
        const span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        addTask()
    }
})

button.addEventListener("click", addTask)


listCointainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();  
    }

}, false)


function saveData(){
    localStorage.setItem("data", listCointainer.innerHTML )
}

function showData(){
    listCointainer.innerHTML = localStorage.getItem("data")
}

showData();