import * as Project from "./project";

const projectStack = (() => {
	//declare known HTML elements
	const content = document.getElementById("content");

	//create new row
	const projects = document.createElement("div");
	projects.id = "project-container";
	projects.classList.add("row", "twelve", "columns", "projects");
	//projects.innerHTML = "<h1>Projects</h1>";

	//create button to add new
	const newProject = document.createElement("button");
	newProject.classList.add("button", "button-primary", "new-project");
	newProject.appendChild(document.createTextNode("Create New Project!"));
	newProject.onclick = Project.openForm;

	//append to DOM
	projects.appendChild(newProject);
	content.appendChild(projects);
})();

//loop through all projects and add new buttons

const displayProjects = () => {
	let projects = Project.allProjects;
	let projectContainer = document.getElementById("project-container");
	projectContainer.innerHTML = "";
	//create button to add new
	const newProject = document.createElement("button");
	newProject.classList.add("button", "button-primary", "new-project");
	newProject.appendChild(document.createTextNode("Create New Project!"));
	newProject.onclick = Project.openForm;

	//append to DOM
	projectContainer.appendChild(newProject);

	projects.forEach((n) => {
		const newProject = document.createElement("button");
		newProject.classList.add("button", "button-secondary", "projects");

		var taskList = n.tasks;
		newProject.appendChild(
			document.createTextNode(n.name + " " + taskList.length)
		);
		newProject.onclick = function () {
			Project.displayToDos(n);
		};

		projectContainer.appendChild(newProject);
	});
};

export { displayProjects, projectStack };
