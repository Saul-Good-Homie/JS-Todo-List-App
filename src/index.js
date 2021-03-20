console.log("Hi, this is a npx webpack test message");

import { form } from "./form";
import * as projectStack from "./projects-stack";

import { feed } from "./feed";

import * as ToDo from "./todo";
import * as Project from "./project";
import * as Save from "./save-local.js";

ToDo.init();
Save.restoreLocal();
