const feed = (() => {
	//declare known HTML elements
	const content = document.getElementById("content");
	const feed = document.getElementById("form-container");

	//create table
	const table = document.createElement("table");
	table.classList.add("u-full-width");
	table.id = "feed";

	//create column headers
	const headerRow = document.createElement("tr");
	headerRow.id = "header-row";

	const col1 = document.createElement("th");
	col1.innerHTML = "Task Name";
	col1.classList.add("three", "columns");

	// const col2 = document.createElement("th");
	// col2.innerHTML = "Description";
	// col2.classList.add("four", "columns");

	const col3 = document.createElement("th");
	col3.innerHTML = "Due Date";
	col3.classList.add("three", "columns");

	const col4 = document.createElement("th");
	col4.innerHTML = "Priority";
	col4.classList.add("three", "columns");

	headerRow.appendChild(col1);
	//headerRow.appendChild(col2);
	headerRow.appendChild(col3);
	headerRow.appendChild(col4);

	table.appendChild(headerRow);

	//create table body

	const body = document.createElement("tbody");
	body.id = "table-body";
	table.appendChild(body);

	feed.appendChild(table);
})();

export { feed };
