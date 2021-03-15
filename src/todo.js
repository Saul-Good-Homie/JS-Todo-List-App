import * as edit from "./popup-edit-todo.js";

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
		name.classList.add("five", "columns");

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

		var editButton = document.createElement("td");
		editButton.classList.add(
			"edit-button",
			"one",
			"columns",
			"fas",
			"fa-edit"
		);
		editButton.id = task.id;
		editButton.onclick = function () {
			editTask(event);
			//openForm(event);
		};

		var doneButton = document.createElement("td");
		doneButton.classList.add(
			"done-button",
			"one",
			"columns",
			"fas",
			"fa-check-square"
		);
		doneButton.id = task.id;
		doneButton.onclick = function () {
			console.log("Task Completed");
		};

		newRow.appendChild(name);
		//newRow.appendChild(description);
		newRow.appendChild(dueDate);
		newRow.appendChild(priority);
		newRow.appendChild(deleteButton);
		newRow.appendChild(editButton);
		newRow.appendChild(doneButton);
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

function editTask(e) {
	e.preventDefault();
	//get id of target
	let id = e.target.id;

	//find correct task by ID
	let task = defaultProject.filter((n) => n.id == id);
	let editedTask = task[0];

	console.table(defaultProject);
	//pass task into openform function
	openForm(editedTask);
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

// Javascript to open and close form pop up
function openForm(editedTask) {
	//generate form with task specific values
	edit.popupForm(editedTask);

	//add event listeners
	let cancel = document.getElementById("cancel-button");
	cancel.onclick = function () {
		closeForm();
	};

	let submit = document.getElementById("submit-button");
	submit.onclick = function () {
		let taskName = document.getElementById("editTaskName").value;
		let description = document.getElementById("editTaskDescription").value;
		let dueDate = document.getElementById("editTaskDueDate").value;
		let priority = document.getElementById("editTaskPriority").value;

		editedTask.name = taskName;
		editedTask.description = description;
		editedTask.dueDate = dueDate;
		editedTask.priority = priority;
		displayToDos(defaultProject);
		closeForm();
	};
}

function closeForm() {
	var form = document.getElementById("editToDoForm");
	form.style.display = "none";
	form.remove();
}

function init() {
	bindUI();
}

function dummyData() {
	let newTask = new createToDo(
		"Dummy Task",
		"description",
		"03/24/2021",
		"Medium"
	);
	//add to project
	addToProject(defaultProject, newTask);
	displayToDos(defaultProject);
}

export {
	createToDo,
	addToProject,
	displayToDos,
	removeFromProject,
	init,
	dummyData,
	defaultProject,
	taskCounter,
};
