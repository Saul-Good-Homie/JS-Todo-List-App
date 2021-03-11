export default class Project {
	constructor(name) {
		this.name = name;
		this.tasks = [];
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (newName.length < 1) {
			alert("Name is too short.");
			return;
		}
		this._name = newName;
	}

	//create a new project
	createProject(e) {
		console.log("creating a project...");
		e.preventDefault();
		let projectName = document.getElementById("projectName").value;
		let newProject = new Project(projectName);
		console.log(newProject);
	}
}
