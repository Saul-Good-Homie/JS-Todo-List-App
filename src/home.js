// import * as ToDo from "./todo";

// const homePage = (() => {
// 	//declare variable for DOM elements
// 	let toDoForm = document.getElementById("newToDoForm");

// 	//bind actions to html UI
// 	const bindUI = () => {
// 		console.log("binding UI elements...");
// 		toDoForm.addEventListener("submit", createTask);
// 	};

// 	//create a new task when form is submitted
// 	const createTask = (e) => {
// 		e.preventDefault();

// 		let taskName = document.getElementById("taskName").value;
// 		let description = document.getElementById("taskDescription").value;
// 		let dueDate = document.getElementById("taskDueDate").value;
// 		let priority = document.getElementById("taskPriority").value;
// 		console.log("creating a todo...");
// 		let newTask = new ToDo.createToDo(
// 			taskName,
// 			description,
// 			dueDate,
// 			priority
// 		);
// 		console.log("task created successfully");
// 		ToDo.addToProject(ToDo.defaultProject, newTask);
// 		ToDo.displayToDos(ToDo.defaultProject);
// 	};

// 	// initial page load
// 	const init = () => {
// 		console.log("Loading Home Page...");
// 		bindUI();
// 		//displayTasks();
// 	};

// 	return {
// 		loadHomePage: init,
// 	};
// })();

// export { homePage };
