import * as edit from "./popup-edit-todo.js";
import * as Project from "./project";
import * as Save from "./save-local.js";

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

//add to project
function addToProject(project, newTask) {
	project.push(newTask);
	Save.saveLocal();
}

// remove from project
function removeFromProject(deletedTask) {
	let arr = defaultProject.filter((n) => n !== deletedTask);
	defaultProject = arr;
	Save.saveLocal();
}

function clearFeed() {
	const table = document.getElementById("table-body");
	table.innerHTML = "";
}

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
	//add to project

	Project.addToProject(Project.allProjects[0], newTask);
	console.log(Project.allProjects[0]);
	Project.displayToDos(Project.allProjects[0]);
	Save.saveLocal();
}

function editTask(project, task) {
	edit.popupForm(project, task);

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

		if (Project.allProjects.length > 2) {
			let projectName = document.getElementById("editTaskProject").value;
			if (projectName === "no-project-chosen") {
				console.log("No project chosen");
			} else {
				const newProject = Project.allProjects.find(
					(project) => project.name == projectName
				);
				Project.removeFromProject(project, task);
				Project.addToProject(newProject, task);
			}
		}

		task.name = taskName;
		task.description = description;
		task.dueDate = dueDate;
		task.priority = priority;
		//Project.addToProject(newProject, task);
		Project.displayToDos(project);
		Save.saveLocal();
		closeForm();
	};
}

// delete todo
function deleteToDo(e) {
	let id = e.target.id;
	let project = Project.allProjects[0];
	let task = project.filter((n) => n.id == id);
	let deletedTask = task[0];
	removeFromProject(deletedTask);
	displayToDos(Project.allProjects[0]);
	Save.saveLocal();
	console.log("task sucessfully deleted");
}

const markComplete = (project, task) => {
	//marking complete moves task from all project to completed project
	//and refreshing feed
	task.done = true;
	Project.addToProject(Project.allProjects[1], task);
	Project.removeFromProject(project, task);
	Project.displayToDos(project);
	Save.saveLocal();
};

const markUncomplete = (project, task) => {
	//reverse of marking complete. adds to generic all project regardless of original
	//project
	task.done = false;
	Project.addToProject(Project.allProjects[0], task);
	Project.removeFromProject(project, task);
	Project.displayToDos(project);
	Save.saveLocal();
};

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
		"Example Task",
		"This is an example task description",
		"09/21/2022",
		"Medium"
	);
	//add to project
	Project.addToProject(Project.allProjects[0], newTask);
}

export {
	createToDo,
	clearFeed,
	addToProject,
	removeFromProject,
	init,
	dummyData,
	editTask,
	deleteToDo,
	markComplete,
	markUncomplete,
	defaultProject,
	taskCounter,
};
