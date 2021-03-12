const feed = (() => {
	//declare known HTML elements
	const content = document.getElementById("content");

	//create table
	const table = document.createElement("table");
	table.classList.add("u-full-width");
	table.id = "feed";

	//create table header
	const tableHeader = document.createElement("thead");
	table.appendChild(tableHeader);

	//create column headers
	const headerRow = document.createElement("tr");

	const col1 = document.createElement("th");
	col1.innerHTML = "Task Name";
	col1.classList.add("two", "columns");

	const col2 = document.createElement("th");
	col2.innerHTML = "Description";
	col2.classList.add("four", "columns");

	const col3 = document.createElement("th");
	col3.innerHTML = "Due Date";
	col3.classList.add("two", "columns");

	const col4 = document.createElement("th");
	col4.innerHTML = "Priority";
	col4.classList.add("two", "columns");

	const col5 = document.createElement("th");
	col5.innerHTML = "";
	col5.classList.add("one", "columns");

	headerRow.appendChild(col1);
	headerRow.appendChild(col2);
	headerRow.appendChild(col3);
	headerRow.appendChild(col4);

	tableHeader.appendChild(headerRow);

	//create table body

	const body = document.createElement("tbody");
	table.appendChild(body);

	content.appendChild(table);
})();

export { feed };
