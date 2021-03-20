import * as Project from "./project";

const popupForm = (project, task) => {
	//declare known HTML elements
	const content = document.getElementById("content");

	//create form and append to content

	const form = document.createElement("form");
	form.id = "editToDoForm";

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

	// Create an input element for todo description
	const div3 = document.createElement("div");
	div3.classList.add("five", "columns");

	var fdescLabel = document.createElement("label");
	fdescLabel.setAttribute("for", "taskDescription");
	fdescLabel.textContent = "Description";
	var fdesc = document.createElement("input");
	fdesc.classList.add("u-full-width");
	fdesc.setAttribute("type", "text");
	fdesc.setAttribute("name", "taskDescription");
	fdesc.setAttribute("value", task.description);
	fdesc.id = "editTaskDescription";

	div3.appendChild(fdescLabel);
	div3.appendChild(fdesc);
	div1.appendChild(div3);

	// Create an input element for todo due Date
	const div4 = document.createElement("div");
	div4.classList.add("two", "columns");

	var fdateLabel = document.createElement("label");
	fdateLabel.textContent = "Due Date";
	var fdate = document.createElement("input");
	fdate.classList.add("u-full-width");
	fdate.setAttribute("type", "date");
	fdate.setAttribute("name", "taskDueDate");

	if (task.dueDate != "") {
		let date = task.dueDate;
		let reverseDate = new Date(date).toISOString().substr(0, 10);
		fdate.setAttribute("value", reverseDate);
	}

	fdate.id = "editTaskDueDate";

	div4.appendChild(fdateLabel);
	div4.appendChild(fdate);
	div1.appendChild(div4);

	// Create an input element for todo priority
	const div5 = document.createElement("div");
	div5.classList.add("two", "columns");

	var fpriorityLabel = document.createElement("label");
	fpriorityLabel.textContent = "Priority";
	var fpriority = document.createElement("select");
	fpriority.classList.add("u-full-width");
	fpriority.setAttribute("name", "taskPriority");
	fpriority.setAttribute("value", task.priority);
	fpriority.id = "editTaskPriority";

	var option1 = document.createElement("option");
	option1.setAttribute("value", "Low");
	option1.textContent = "Low";

	var option2 = document.createElement("option");
	option2.setAttribute("value", "Medium");
	option2.textContent = "Medium";

	var option3 = document.createElement("option");
	option3.setAttribute("value", "High");
	option3.textContent = "High";

	if (task.priority == "Low") {
		fpriority.appendChild(option1);
		fpriority.appendChild(option2);
		fpriority.appendChild(option3);
	} else if (task.priority == "Medium") {
		fpriority.appendChild(option2);
		fpriority.appendChild(option1);
		fpriority.appendChild(option3);
	} else {
		fpriority.appendChild(option3);
		fpriority.appendChild(option1);
		fpriority.appendChild(option2);
	}

	div5.appendChild(fpriorityLabel);
	div5.appendChild(fpriority);
	div1.appendChild(div5);

	// If projects exist, create an input element for project
	if (Project.allProjects.length > 2) {
		const div6 = document.createElement("div");

		//resize elements
		div6.classList.add("two", "columns");
		div2.classList.remove("three");
		div2.classList.add("two");
		div3.classList.remove("five");
		div3.classList.add("four");

		var fprojectLabel = document.createElement("label");
		fprojectLabel.textContent = "Add to Project";
		var fproject = document.createElement("select");
		fproject.classList.add("u-full-width");
		fproject.setAttribute("name", "taskProject");
		//fproject.setAttribute("value", task.priority);
		fproject.id = "editTaskProject";

		var defaultOption = document.createElement("option");
		defaultOption.setAttribute("value", "no-project-chosen");
		defaultOption.textContent = "Choose a Project";
		fproject.appendChild(defaultOption);

		//skip the first two projects and then loop through each one as a select option
		Project.allProjects.slice(2).forEach((p) => {
			var option = document.createElement("option");
			option.setAttribute("value", p.name);
			option.textContent = p.name;
			fproject.appendChild(option);
		});

		div6.appendChild(fprojectLabel);
		div6.appendChild(fproject);
		div1.appendChild(div6);
	}

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

export { popupForm };
