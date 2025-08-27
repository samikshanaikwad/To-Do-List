const inputBox = document.getElementById("inputBox");
const addbtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");

let editTodo = null;

//function to add todo
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("Please enter a task");
        return false;
    }

    if(addbtn.value === "Edit"){
        editTodo.target.parentElement.querySelector("p").innerHTML = inputText;
        addbtn.value = "Add";
        inputBox.value = "";
        editTodo = null;
    }
    else{
        //creating li and p
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        //edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        //delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        inputBox.value = "";
    }
}

//function to edit and delete todo(update todo)
const updateTodo = (e) => {
    if(e.target.innerHTML === "Remove"){
        e.target.parentElement.remove();
    }

    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.parentElement.querySelector("p").innerHTML;
        inputBox.focus();
        addbtn.value = "Edit";
        editTodo = e;
    }
}

addbtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
