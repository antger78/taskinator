// var formEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// spent 5 minutes trying to figure out why code didnt work...forgot the s in tasks, use copy and paste

var createTaskHandler = function(event){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    
    taskInfoEl.className = "task-info";
    
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class= 'task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);



