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
		const table = document.getElementById("feed");

		//loop through array and make new rows
		array.forEach((task) => {
			var newRow = document.createElement("tr");

			var name = document.createElement("td");
			name.innerHTML = task.name;
			name.classList.add("two", "columns");

			var description = document.createElement("td");
			description.innerHTML = task.description;
			description.classList.add("four", "columns");

			var dueDate = document.createElement("td");
			dueDate.innerHTML = task.dueDate;
			dueDate.classList.add("two", "columns");

			var priority = document.createElement("td");
			priority.innerHTML = task.priority;
			priority.classList.add("two", "columns");

			var deleteButton = document.createElement("td");
			deleteButton.classList.add(
				"delete-button",
				"one",
				"columns",
				"fas",
				"fa-trash-alt"
			);
			//			deleteButton.innerHTML = "<p><i class="fas fa-trash-alt"></i></p>";

			newRow.appendChild(name);
			newRow.appendChild(description);
			newRow.appendChild(dueDate);
			newRow.appendChild(priority);
			newRow.appendChild(deleteButton);
			//append new row to table
			table.appendChild(newRow);
		});
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
		//displayTasks();
	};

	return {
		loadHomePage: init,
	};
})();

export { homePage };
