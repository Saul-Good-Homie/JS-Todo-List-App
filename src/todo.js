//create new ToDo
function createToDo(name, description, dueDate, priority) {
	this.name = name;
	this.description = description;
	this.dueDate = dueDate;
	this.priority = priority;
	this.done = false;
	this.id = taskCounter++;

	this.info =
		this.name +
		", " +
		this.description +
		", " +
		this.dueDate +
		", " +
		this.done +
		" this task id is ";
}

// Task specific variables
let taskCounter = 0;
let defaultProject = [];

// variable for DOM elements
let toDoForm = document.getElementById("newToDoForm");

//bind actions to html UI
const bindUI = () => {
	console.log("binding UI elements...");
	toDoForm.addEventListener("submit", createTask);
};

// add to project
function addToProject(project, newTask) {
	project.push(newTask);
}

// remove from project
function removeFromProject(deletedTask) {
	let arr = defaultProject.filter((n) => n !== deletedTask);
	defaultProject = arr;
}

function clearFeed() {
	const table = document.getElementById("feed");
	table.innerHTML = "";
}

// display all todos in a project
const displayToDos = (array) => {
	//declare known HTML elements
	const table = document.getElementById("feed");
	clearFeed();

	//loop through array and make new rows
	array.forEach((task) => {
		var newRow = document.createElement("tr");

		var name = document.createElement("td");
		name.innerHTML = task.name;
		name.classList.add("two", "columns");

		var description = document.createElement("td");
		description.innerHTML = task.description;
		description.classList.add("four", "columns");

		var dueDate = document.createElement("td");
		dueDate.innerHTML = task.dueDate;
		dueDate.classList.add("two", "columns");

		var priority = document.createElement("td");
		priority.innerHTML = task.priority;
		priority.classList.add("two", "columns");

		var deleteButton = document.createElement("td");
		deleteButton.classList.add(
			"delete-button",
			"one",
			"columns",
			"fas",
			"fa-trash-alt"
		);
		deleteButton.id = task.id;
		deleteButton.onclick = function () {
			deleteToDo(event);
		};

		newRow.appendChild(name);
		newRow.appendChild(description);
		newRow.appendChild(dueDate);
		newRow.appendChild(priority);
		newRow.appendChild(deleteButton);
		//append new row to table
		table.appendChild(newRow);
	});
};

function clearForm() {
	document.getElementById("taskName").value = "";
	document.getElementById("taskDescription").value = "";
	document.getElementById("taskDueDate").value = "";
	document.getElementById("taskPriority").value = "Low";
}

function createTask(e) {
	e.preventDefault();
	//get form values
	let taskName = document.getElementById("taskName").value;
	let description = document.getElementById("taskDescription").value;
	let dueDate = document.getElementById("taskDueDate").value;
	let priority = document.getElementById("taskPriority").value;

	console.log("creating a todo...");
	//create todo
	let newTask = new createToDo(taskName, description, dueDate, priority);
	console.log("task created successfully");
	clearForm();
	//add tp project
	addToProject(defaultProject, newTask);

	displayToDos(defaultProject);
}

// delete todo
function deleteToDo(e) {
	let id = e.target.id;
	let task = defaultProject.filter((n) => n.id == id);
	let deletedTask = task[0];
	removeFromProject(deletedTask);
	displayToDos(defaultProject);
	console.log("task sucessfully deleted");
}

function init() {
	bindUI();
}

export {
	createToDo,
	addToProject,
	displayToDos,
	removeFromProject,
	init,
	defaultProject,
	taskCounter,
};
