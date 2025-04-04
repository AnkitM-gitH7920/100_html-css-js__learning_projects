// gettong all the DOM elements
const taskContainer = document.querySelector(".taskContainer");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("add");

document.addEventListener("DOMContentLoaded",loadTasks)

taskInput.addEventListener('keydown',(event)=>{
	if (event.key == "Enter") {
		let task = taskInput.value;
		addTask(task);
	};
});
addBtn.addEventListener('click',(event)=>{
	let task = taskInput.value;
	addTask(task);
});
function addTask(task){
	if (task.trim() === "") {
		alert("Cannot add an empty task");
		localStorage.removeItem("debug");
	}else{
		localStorage.removeItem("debug");
		taskInput.value = "";
	    let dynamicTask = document.createElement("li");
	    dynamicTask.classList.add("task");
	    dynamicTask.classList.add("alignC");
	    dynamicTask.innerHTML = `
		    <input type="checkbox" class="doneTask" name="">
		    <p class="taskText">${task}</p>
		    <i class='bx bx-x' style='color: rgba(0,0,0, 0.8);'  ></i>
	    `;
	    taskContainer.appendChild(dynamicTask);
	    // delete the task from ui
	    dynamicTask.querySelector(".bx-x").addEventListener("click", function () {
             dynamicTask.remove();
             removeTaskFromLocalStorage(task); // delete the task from localStorage
        });

         // toggle completion
        dynamicTask.querySelector(".doneTask").addEventListener("change", function () {
            toggleTaskCompletion(task);
        });
	    saveTaskToLocalStorage(task);
	};
};
function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let dynamicTask = document.createElement("li");
        dynamicTask.classList.add("task", "alignC");
        dynamicTask.innerHTML = `
            <input type="checkbox" class="doneTask" ${task.completed ? "checked" : ""}>
            <p class="taskText">${task.text}</p>
            <i class='bx bx-x deleteTask' style='color: rgba(0,0,0, 0.8);' ></i>
        `;
        taskContainer.appendChild(dynamicTask);
        dynamicTask.querySelector(".bx-x").addEventListener("click", function () {
            dynamicTask.remove();
            removeTaskFromLocalStorage(task); // delete the task from localStorage
        });

        // toggle completion
        dynamicTask.querySelector(".doneTask").addEventListener("change", function () {
            toggleTaskCompletion(task);
        });
    });
};
function saveTaskToLocalStorage(task){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: task, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function removeTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== taskText); // Remove the correct task
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleTaskCompletion(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        if (task.text === taskText) {
            task.completed = !task.completed;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}