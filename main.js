(()=>{"use strict";function e(e,n,d,a){this.name=e,this.description=n,this.dueDate=d,this.priority=a,this.done=!1,this.id=t++,this.info=this.name+", "+this.description+", "+this.dueDate+", "+this.done+" this task id is "}(()=>{const e=document.getElementById("content"),t=document.createElement("form");t.id="newToDoForm";const n=document.createElement("div");n.className="row";const d=document.createElement("div");d.classList.add("three","columns");var a=document.createElement("label");a.textContent="Task Name";var i=document.createElement("input");i.classList.add("u-full-width"),i.setAttribute("type","text"),i.setAttribute("name","taskName"),i.setAttribute("placeholder","Project Charter"),i.id="taskName",i.setAttribute("required",!0),d.appendChild(a),d.appendChild(i),n.appendChild(d);const o=document.createElement("div");o.classList.add("five","columns");var l=document.createElement("label");l.setAttribute("for","taskDescription"),l.textContent="Description";var c=document.createElement("input");c.classList.add("u-full-width"),c.setAttribute("type","text"),c.setAttribute("name","taskDescription"),c.setAttribute("placeholder","Create Project Charter and Send to Sponsor"),c.id="taskDescription",o.appendChild(l),o.appendChild(c),n.appendChild(o);const s=document.createElement("div");s.classList.add("two","columns");var u=document.createElement("label");u.textContent="Due Date";var r=document.createElement("input");r.classList.add("u-full-width"),r.setAttribute("type","date"),r.setAttribute("name","taskDueDate"),r.id="taskDueDate",s.appendChild(u),s.appendChild(r),n.appendChild(s);const m=document.createElement("div");m.classList.add("two","columns");var p=document.createElement("label");p.textContent="Priority";var h=document.createElement("select");h.classList.add("u-full-width"),h.setAttribute("name","taskPriority"),h.id="taskPriority";var C=document.createElement("option");C.setAttribute("value","Low"),C.textContent="Low";var E=document.createElement("option");E.setAttribute("value","Medium"),E.textContent="Medium";var b=document.createElement("option");b.setAttribute("value","High"),b.textContent="High",h.appendChild(C),h.appendChild(E),h.appendChild(b),m.appendChild(p),m.appendChild(h),n.appendChild(m);var v=document.createElement("input");v.classList.add("button-primary"),v.setAttribute("type","submit"),v.setAttribute("value","Submit"),n.appendChild(v),t.appendChild(n),e.appendChild(t)})();let t=0,n=[],d=document.getElementById("newToDoForm");function a(){var e=document.getElementById("editToDoForm");e.style.display="none",e.remove()}let i=[];function o(e){this.name=e,this.tasks=[]}function l(e,t){e.tasks.push(t)}function c(e){let t=e.tasks;const d=document.getElementById("feed");document.getElementById("feed").innerHTML="",t.forEach((t=>{var o=document.createElement("tr"),l=document.createElement("td");l.innerHTML=t.name,l.classList.add("five","columns");var s=document.createElement("td");s.innerHTML=t.description,s.classList.add("four","columns");var u=document.createElement("td");u.innerHTML=t.dueDate,u.classList.add("two","columns");var r=document.createElement("td");r.innerHTML=t.priority,r.classList.add("two","columns");var m=document.createElement("td");m.classList.add("delete-button","one","columns","fas","fa-trash-alt"),m.id=t.id,m.onclick=function(){!function(e,t){let n=e.tasks.filter((e=>e!==t));e.tasks=n,c(e)}(e,t)};var p=document.createElement("td");p.classList.add("edit-button","one","columns","fas","fa-edit"),p.id=t.id,p.onclick=function(){!function(e){e.preventDefault();let t=e.target.id,d=n.filter((e=>e.id==t))[0];console.table(n),function(e){(e=>{const t=document.getElementById("content"),n=document.createElement("form");n.id="editToDoForm";const d=document.createElement("div");d.className="row";const a=document.createElement("div");a.classList.add("three","columns");var i=document.createElement("label");i.textContent="Task Name";var o=document.createElement("input");o.classList.add("u-full-width"),o.setAttribute("type","text"),o.setAttribute("name","taskName"),o.setAttribute("value",e.name),o.id="editTaskName",o.setAttribute("required",!0),a.appendChild(i),a.appendChild(o),d.appendChild(a);const l=document.createElement("div");l.classList.add("five","columns");var c=document.createElement("label");c.setAttribute("for","taskDescription"),c.textContent="Description";var s=document.createElement("input");s.classList.add("u-full-width"),s.setAttribute("type","text"),s.setAttribute("name","taskDescription"),s.setAttribute("value",e.description),s.id="editTaskDescription",l.appendChild(c),l.appendChild(s),d.appendChild(l);const u=document.createElement("div");u.classList.add("two","columns");var r=document.createElement("label");r.textContent="Due Date";var m=document.createElement("input");m.classList.add("u-full-width"),m.setAttribute("type","date"),m.setAttribute("name","taskDueDate"),m.setAttribute("value",e.dueDate),m.id="editTaskDueDate",u.appendChild(r),u.appendChild(m),d.appendChild(u);const p=document.createElement("div");p.classList.add("two","columns");var h=document.createElement("label");h.textContent="Priority";var C=document.createElement("select");C.classList.add("u-full-width"),C.setAttribute("name","taskPriority"),C.setAttribute("value",e.priority),C.id="editTaskPriority";var E=document.createElement("option");E.setAttribute("value","Low"),E.textContent="Low";var b=document.createElement("option");b.setAttribute("value","Medium"),b.textContent="Medium";var v=document.createElement("option");v.setAttribute("value","High"),v.textContent="High","Low"==e.priority?(C.appendChild(E),C.appendChild(b),C.appendChild(v)):"Medium"==e.priority?(C.appendChild(b),C.appendChild(E),C.appendChild(v)):(C.appendChild(v),C.appendChild(E),C.appendChild(b)),p.appendChild(h),p.appendChild(C),d.appendChild(p);var y=document.createElement("input");y.classList.add("button-primary"),y.setAttribute("type","button"),y.setAttribute("value","Submit"),y.id="submit-button",d.appendChild(y);var L=document.createElement("input");L.id="cancel-button",L.setAttribute("type","button"),L.setAttribute("value","Cancel"),L.classList.add("button-secondary"),d.appendChild(L),n.appendChild(d),t.appendChild(n)})(e),document.getElementById("cancel-button").onclick=function(){a()},document.getElementById("submit-button").onclick=function(){let t=document.getElementById("editTaskName").value,n=document.getElementById("editTaskDescription").value,d=document.getElementById("editTaskDueDate").value,o=document.getElementById("editTaskPriority").value;e.name=t,e.description=n,e.dueDate=d,e.priority=o,c(i[0]),a()}}(d)}(event)};var h=document.createElement("td");h.classList.add("done-button","one","columns","fas","fa-check-square"),h.id=t.id,h.onclick=function(){(e=>{let t=event.target.id,n=i[0].tasks;if(n.some((e=>0===e.id))){let e=n.some((e=>0===e.id));console.log(e)}else console.log("Object not found.");console.log(n),console.log(t)})()},o.appendChild(l),o.appendChild(u),o.appendChild(r),o.appendChild(m),o.appendChild(p),o.appendChild(h),d.appendChild(o)}))}const s=()=>{let e=document.getElementById("projectName").value;if(""==e)return alert("Please enter a project name"),!1;{let t=new o(e);i.push(t),m(),r()}},u=()=>{(()=>{const e=document.getElementById("content"),t=document.createElement("form");t.id="newProjectForm";const n=document.createElement("div");n.className="row";var d=document.createElement("label");d.textContent="Project Name";var a=document.createElement("input");a.classList.add("u-full-width"),a.setAttribute("type","text"),a.setAttribute("name","projectName"),a.setAttribute("placeholder","Enter New Project Name"),a.id="projectName",a.setAttribute("required",!0),n.appendChild(d),n.appendChild(a);var i=document.createElement("input");i.classList.add("button-primary"),i.setAttribute("type","button"),i.setAttribute("value","Submit"),i.id="submit-button",n.appendChild(i),i.onclick=s;var o=document.createElement("input");o.id="cancel-button",o.setAttribute("type","button"),o.setAttribute("value","Cancel"),o.classList.add("button-secondary"),n.appendChild(o),o.onclick=r,t.appendChild(n),e.appendChild(t)})()},r=()=>{var e=document.getElementById("newProjectForm");e.style.display="none",e.remove()},m=((()=>{const e=document.getElementById("content"),t=document.createElement("div");t.id="project-container",t.classList.add("row","twelve","columns","projects");const n=document.createElement("button");n.classList.add("button","button-primary","new-project"),n.appendChild(document.createTextNode("Create New Project!")),n.onclick=u,t.appendChild(n),e.appendChild(t)})(),()=>{let e=i,t=document.getElementById("project-container");t.innerHTML="";const n=document.createElement("button");n.classList.add("button","button-primary","new-project"),n.appendChild(document.createTextNode("Create New Project!")),n.onclick=u,t.appendChild(n),e.forEach((e=>{const n=document.createElement("button");n.classList.add("button","button-secondary","projects"),n.appendChild(document.createTextNode(e.name)),n.onclick=function(){c(e)},t.appendChild(n)}))});(()=>{const e=document.getElementById("content"),t=document.createElement("table");t.classList.add("u-full-width"),t.id="feed";const n=document.createElement("thead");t.appendChild(n);const d=document.createElement("tr"),a=document.createElement("th");a.innerHTML="Task Name",a.classList.add("five","columns");const i=document.createElement("th");i.innerHTML="Due Date",i.classList.add("two","columns");const o=document.createElement("th");o.innerHTML="Priority",o.classList.add("two","columns");const l=document.createElement("th");l.innerHTML="",l.classList.add("one","columns");const c=document.createElement("th");c.innerHTML="",c.classList.add("one","columns");const s=document.createElement("th");s.innerHTML="",s.classList.add("one","columns"),d.appendChild(a),d.appendChild(i),d.appendChild(o),d.appendChild(l),d.appendChild(c),d.appendChild(s),n.appendChild(d);const u=document.createElement("tbody");t.appendChild(u),e.appendChild(t)})(),console.log("Hi, this is a npx webpack test message"),console.log("binding UI elements..."),d.addEventListener("submit",(function(t){t.preventDefault();let n=document.getElementById("taskName").value,d=document.getElementById("taskDescription").value,a=document.getElementById("taskDueDate").value,o=document.getElementById("taskPriority").value;console.log("creating a todo...");let s=new e(n,d,a,o);console.log("task created successfully"),document.getElementById("taskName").value="",document.getElementById("taskDescription").value="",document.getElementById("taskDueDate").value="",document.getElementById("taskPriority").value="Low",l(i[0],s),console.log(i[0]),c(i[0])})),(()=>{let e=new o("All"),t=new o("Completed");i.push(e),i.push(t)})(),m(),function(){let t=new e("Dummy Task","description","03/24/2021","Medium"),n=new e("Dummy Task two","description two","03/24/2021","High");l(i[0],t),l(i[0],n),c(i[0]),console.log(i[0])}()})();