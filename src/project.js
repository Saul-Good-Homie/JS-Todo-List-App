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
	const div2 = document.createElement("div");
	div2.classList.add("three", "columns");

	// Create an input element for todo name
	var fnameLabel = document.createElement("label");
	fnameLabel.textContent = "Task Name";
	var fname = document.createElement("input");
	fname.classList.add("u-full-width");
	fname.setAttribute("type", "text");
	fname.setAttribute("name", "taskName");
	fname.setAttribute("value", task.name);
	fname.id = "editTaskName";
	fname.setAttribute("required", true);

	div2.appendChild(fnameLabel);
	div2.appendChild(fname);
	div1.appendChild(div2);

	//create submit button
	var submit = document.createElement("input");
	submit.classList.add("button-primary");
	submit.setAttribute("type", "button");
	submit.setAttribute("value", "Submit");
	submit.id = "submit-button";
	div1.appendChild(submit);

	//create cancel button
	var cancel = document.createElement("input");
	cancel.id = "cancel-button";
	cancel.setAttribute("type", "button");
	cancel.setAttribute("value", "Cancel");
	cancel.classList.add("button-secondary");
	div1.appendChild(cancel);

	//append the form to content
	form.appendChild(div1);
	content.appendChild(form);
};

const openForm = () => {};

const init = () => {
	let all = new createProject("All");
	let completed = new createProject("Completed");
	allProjects.push(all);
	allProjects.push(completed);
};

export { init, allProjects };
