import * as projectStack from "./projects-stack";
import * as ToDo from "./todo";
import * as Save from "./save-local.js";

let allProjects = [];

function createProject(name) {
	this.name = name;
	this.tasks = [];
}

function addToProject(project, task) {
	let taskList = project.tasks;
	taskList.push(task);
	projectStack.displayProjects();
	Save.saveLocal();
}

function removeFromProject(project, task) {
	let taskList = project.tasks;
	//find all tasks that do not match the one selected
	let arr = taskList.filter((n) => n !== task);
	//reset project tasks to new array
	project.tasks = arr;
	//refresh feed
	projectStack.displayProjects();
	displayToDos(project);
	Save.saveLocal();
}

function displayToDos(project) {
	let taskList = project.tasks;

	//declare known HTML elements
	const table = document.getElementById("table-body");

	ToDo.clearFeed();

	//loop through array and make new rows
	taskList.forEach((task) => {
		var newRow = document.createElement("tr");

		var name = document.createElement("td");
		name.innerHTML = task.name;
		name.classList.add("three", "columns");

		var description = document.createElement("td");
		description.innerHTML = task.description;
		description.classList.add("four", "columns");

		var dueDate = document.createElement("td");
		dueDate.innerHTML = task.dueDate;
		dueDate.classList.add("three", "columns");

		var priority = document.createElement("td");
		priority.innerHTML = task.priority;
		priority.classList.add("three", "columns");

		var controls = document.createElement("td");
		controls.classList.add("three", "columns", "controls");

		var deleteButton = document.createElement("div");
		deleteButton.classList.add("delete-button", "fas", "fa-trash-alt");
		deleteButton.id = task.id;
		deleteButton.onclick = function () {
			removeFromProject(project, task);
		};

		var editButton = document.createElement("div");
		editButton.classList.add("edit-button", "fas", "fa-edit");
		editButton.id = task.id;
		editButton.onclick = function () {
			ToDo.editTask(project, task);
		};

		var doneButton = document.createElement("div");
		doneButton.classList.add("done-button", "fas", "fa-check-square");
		if (task.done == false) {
			doneButton.onclick = function () {
				ToDo.markComplete(project, task);
			};
		} else {
			doneButton.classList.add("task-done");
			doneButton.onclick = function () {
				ToDo.markUncomplete(project, task);
			};
		}

		doneButton.id = task.id;

		//add buttons to control column
		controls.appendChild(deleteButton);
		controls.appendChild(editButton);
		controls.appendChild(doneButton);

		//add columns to new row
		newRow.appendChild(name);
		newRow.appendChild(dueDate);
		newRow.appendChild(priority);
		newRow.appendChild(controls);

		//add new row to table
		table.appendChild(newRow);
	});
}

const popupForm = () => {
	//declare known HTML elements
	const content = document.getElementById("content");

	//create form and append to content
	const form = document.createElement("form");
	form.id = "newProjectForm";

	const div1 = document.createElement("div");
	div1.className = "row";

	// Create an input element for todo name
	var fnameLabel = document.createElement("label");
	fnameLabel.textContent = "Project Name";
	var fname = document.createElement("input");
	fname.classList.add("u-full-width");
	fname.setAttribute("type", "text");
	fname.setAttribute("name", "projectName");
	fname.setAttribute("placeholder", "Enter New Project Name");
	fname.id = "projectName";
	fname.setAttribute("required", true);

	div1.appendChild(fnameLabel);
	div1.appendChild(fname);

	//create submit button
	var submit = document.createElement("input");
	submit.classList.add("button-primary");
	submit.setAttribute("type", "button");
	submit.setAttribute("value", "Submit");
	submit.id = "submit-button";
	div1.appendChild(submit);
	submit.onclick = submitNewProject;

	//create cancel button
	var cancel = document.createElement("input");
	cancel.id = "cancel-button";
	cancel.setAttribute("type", "button");
	cancel.setAttribute("value", "Cancel");
	cancel.classList.add("button-secondary");
	div1.appendChild(cancel);
	cancel.onclick = closeForm;

	//append the form to content
	form.appendChild(div1);
	content.appendChild(form);
};

const submitNewProject = () => {
	let projectName = document.getElementById("projectName").value;

	if (projectName == "") {
		alert("Please enter a project name");
		return false;
	} else if (
		allProjects.some(
			(p) => p.name.toUpperCase() == projectName.toUpperCase()
		)
	) {
		alert("That Project name is taken. Please choose a new name.");
	} else {
		let newProject = new createProject(projectName);
		allProjects.push(newProject);
		projectStack.displayProjects();
		Save.saveLocal();
		closeForm();
	}
};

const openForm = () => {
	popupForm();
};

const closeForm = () => {
	var form = document.getElementById("newProjectForm");
	form.style.display = "none";
	form.remove();
};

const init = () => {
	let all = new createProject("All");
	let completed = new createProject("Completed");
	allProjects.push(all);
	allProjects.push(completed);
};

export {
	init,
	openForm,
	addToProject,
	displayToDos,
	removeFromProject,
	allProjects,
};
