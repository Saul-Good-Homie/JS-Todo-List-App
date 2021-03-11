const form = (() => {
	//declare known HTML elements
	const content = document.getElementById("content");

	//create form and append to content

	const form = document.createElement("form");
	form.id = "newToDoForm";

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
	fname.setAttribute("placeholder", "Project Charter");
	fname.id = "taskName";
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
	fdesc.setAttribute(
		"placeholder",
		"Create Project Charter and Send to Sponsor"
	);
	fdesc.id = "taskDescription";

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
	fdate.id = "taskDueDate";

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
	fpriority.id = "taskPriority";

	var option1 = document.createElement("option");
	option1.setAttribute("value", "Low");
	option1.textContent = "Low";

	var option2 = document.createElement("option");
	option2.setAttribute("value", "Medium");
	option2.textContent = "Medium";

	var option3 = document.createElement("option");
	option3.setAttribute("value", "High");
	option3.textContent = "High";

	fpriority.appendChild(option1);
	fpriority.appendChild(option2);
	fpriority.appendChild(option3);

	div5.appendChild(fpriorityLabel);
	div5.appendChild(fpriority);
	div1.appendChild(div5);

	//create submit button
	var submit = document.createElement("input");
	submit.classList.add("button-primary");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "Submit");
	div1.appendChild(submit);

	//append the form to content
	form.appendChild(div1);
	content.appendChild(form);
})();

export { form };
