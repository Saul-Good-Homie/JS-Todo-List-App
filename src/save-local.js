import * as Project from "./project.js";
import * as projectStack from "./projects-stack";
import * as ToDo from "./todo.js";

// LOCAL STORAGE

function saveLocal() {
	localStorage.setItem("projects", JSON.stringify(Project.allProjects));
}

function restoreLocal() {
	let projects = JSON.parse(localStorage.getItem("projects"));
	if (projects === null) {
		Project.init();
		ToDo.dummyData();
		console.log("Initializing All and completed projects");
		console.log("creating example task");
	} else {
		console.log("loading saved projects and tasks...");
		Project.allProjects = projects;
		projectStack.displayProjects();
		Project.displayToDos(projects[0]);
	}
}

//restoreLocal();

export { saveLocal, restoreLocal };
