var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// spent 5 minutes trying to figure out why code didnt work...forgot the s in tasks, use copy and paste

var createTaskHandler = function(){
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);



