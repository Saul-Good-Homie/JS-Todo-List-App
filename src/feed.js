const feed = (() => {
	//declare known HTML elements
	const content = document.getElementById("content");
	const feed = document.getElementById("form-container");

	//create table
	const table = document.createElement("table");
	table.classList.add("u-full-width");
	table.id = "feed";

	// //create table header
	// const tableHeader = document.createElement("thead");
	// tableHeader.id = "table-head";

	// table.appendChild(tableHeader);

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

	// const col5 = document.createElement("th");
	// col5.innerHTML = "";
	// col5.classList.add("one", "columns");

	// const col6 = document.createElement("th");
	// col6.innerHTML = "";
	// col6.classList.add("one", "columns");

	// const col7 = document.createElement("th");
	// col7.innerHTML = "";
	// col7.classList.add("one", "columns");

	headerRow.appendChild(col1);
	//headerRow.appendChild(col2);
	headerRow.appendChild(col3);
	headerRow.appendChild(col4);
	// headerRow.appendChild(col5);
	// headerRow.appendChild(col6);
	// headerRow.appendChild(col7);

	//tableHeader.appendChild(headerRow);
	table.appendChild(headerRow);

	//create table body

	const body = document.createElement("tbody");
	body.id = "table-body";
	table.appendChild(body);

	feed.appendChild(table);
})();

export { feed };
