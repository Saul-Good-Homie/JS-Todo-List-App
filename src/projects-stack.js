import * as Project from "./project";

const projectStack = (() => {
	//declare known HTML elements
	const leftContainer = document.getElementById("left-container");

	//create new column
	const projects = document.createElement("div");
	projects.id = "project-container";
	projects.classList.add("row");

	//create button to add new
	const newProject = document.createElement("button");
	newProject.classList.add("button", "button-primary", "new-project");
	newProject.appendChild(document.createTextNode("Add New Project"));
	newProject.onclick = Project.openForm;

	//append to DOM
	projects.appendChild(newProject);
	leftContainer.appendChild(projects);
})();

const markActive = () => {
	let projects = document.getElementsByClassName("projects");
	projects.forEach((n) => n.classList.add("active"));
};

//loop through all projects and add new buttons

const displayProjects = () => {
	let projects = Project.allProjects;
	let projectContainer = document.getElementById("project-container");
	projectContainer.innerHTML = "";
	//create button to add new
	const newProject = document.createElement("button");
	newProject.classList.add("button", "button-primary", "new-project");
	newProject.appendChild(document.createTextNode("Add New Project"));
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
			// Get the container element
			var btnContainer = document.getElementById("project-container");

			// Get all buttons with class="btn" inside the container
			var btns = btnContainer.getElementsByClassName("projects");
			// Loop through the buttons and add the active class to the current/clicked button
			for (var i = 0; i < btns.length; i++) {
				btns[i].addEventListener("click", function () {
					var current = document.getElementsByClassName("active");

					// If there's no active class
					if (current.length > 0) {
						current[0].className = current[0].className.replace(
							" active",
							""
						);
					}

					// Add the active class to the current/clicked button
					this.className += " active";
				});
			}

			Project.displayToDos(n);
		};

		projectContainer.appendChild(newProject);
	});
};

export { displayProjects, projectStack };
