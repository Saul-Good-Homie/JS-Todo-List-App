import project from "./project";

export default class ToDo {
	constructor(name, description, dueDate, priority) {
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
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

	get description() {
		return this._description;
	}

	set description(newDesc) {
		if (newDesc.length < 1) {
			alert("Description is too short.");
			return;
		}
		this._description = newDesc;
	}

	get dueDate() {
		return this._dueDate;
	}

	set dueDate(newDueDate) {
		this._dueDate = newDueDate;
	}

	get priority() {
		return this._priority;
	}

	set priority(newPriority) {
		this._priority = newPriority;
	}
}
