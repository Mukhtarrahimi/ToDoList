const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-Container");
function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let img = document.createElement("img");
    img.setAttribute("src", "../assets/img/close.png");
    img.setAttribute('class', "close");
    li.appendChild(img);
  }
  inputBox.value = "";
  saveData()
}


listContainer.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();