import * as projectStack from "./projects-stack";

let allProjects = [];

function createProject(name) {
	this.name = name;
	this.tasks = [];
}

// //create a new project
// createProject(e) {
// 	console.log("creating a project...");
// 	e.preventDefault();
// 	let projectName = document.getElementById("projectName").value;
// 	let newProject = new Project(projectName);
// 	console.log(newProject);
// }

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
	} else {
		let newProject = new createProject(projectName);
		allProjects.push(newProject);
		projectStack.displayProjects();
		closeForm();
	}
};

const openForm = () => {
	console.log("creating new project");
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

export { init, openForm, allProjects };
