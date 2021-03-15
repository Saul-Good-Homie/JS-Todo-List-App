console.log("Hi, this is a npx webpack test message");

import { form } from "./form";
//import { popupForm } from "./popup-edit-todo.js";
import * as projectStack from "./projects-stack";
import { feed } from "./feed";

import { homePage } from "./home";
import * as ToDo from "./todo";
import * as Project from "./project";

//let defaultProject = new Project("Default");
//homePage.loadHomePage();
ToDo.init();
Project.init();
projectStack.displayProjects();

//form();

ToDo.dummyData();

// console.log(ToDo.defaultProject[0]);
