import ToDo from "./todo";

const homePage = (() => {
	let toDoForm = document.getElementById("newToDoForm");

	//bind actions to html UI
	const bindUI = () => {
		console.log("binding UI elements...");
		toDoForm.addEventListener("submit", createTask);
	};

	const displayTasks = (array) => {
		//declare known HTML elements
		const content = document.getElementById("content");

		var container = document.createElement("Div");
		array.forEach((task) => {
			var newDiv = document.createElement("div");
			newDiv.innerHTML =
				task.name + task.description + task.dueDate + task.priority;
			container.appendChild(newDiv);
		});
		content.appendChild(container);
	};

	//create a new task when form is submitted
	const createTask = (e) => {
		e.preventDefault();

		let taskList = [];

		console.log("creating a todo...");

		let taskName = document.getElementById("taskName").value;
		let description = document.getElementById("taskDescription").value;
		let dueDate = document.getElementById("taskDueDate").value;
		let priority = document.getElementById("taskPriority").value;
		let newTask = new ToDo(taskName, description, dueDate, priority);
		taskList.push(newTask);
		console.log("task created successfully");
		displayTasks(taskList);
	};

	// initial page load
	const init = () => {
		console.log("Loading Home Page...");
		bindUI();
		displayTasks();
	};

	return {
		loadHomePage: init,
	};
})();

export { homePage };
