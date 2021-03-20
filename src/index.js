console.log("Hi, this is a npx webpack test message");

import { form } from "./form";
import * as projectStack from "./projects-stack";

import { feed } from "./feed";

import * as ToDo from "./todo";
import * as Project from "./project";

projectStack.displayProjects();
ToDo.init();
Project.init();

ToDo.dummyData();
