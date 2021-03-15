(()=>{"use strict";(()=>{const e=document.getElementById("content"),t=document.createElement("form");t.id="newToDoForm";const n=document.createElement("div");n.className="row";const d=document.createElement("div");d.classList.add("three","columns");var a=document.createElement("label");a.textContent="Task Name";var i=document.createElement("input");i.classList.add("u-full-width"),i.setAttribute("type","text"),i.setAttribute("name","taskName"),i.setAttribute("placeholder","Project Charter"),i.id="taskName",i.setAttribute("required",!0),d.appendChild(a),d.appendChild(i),n.appendChild(d);const l=document.createElement("div");l.classList.add("five","columns");var o=document.createElement("label");o.setAttribute("for","taskDescription"),o.textContent="Description";var c=document.createElement("input");c.classList.add("u-full-width"),c.setAttribute("type","text"),c.setAttribute("name","taskDescription"),c.setAttribute("placeholder","Create Project Charter and Send to Sponsor"),c.id="taskDescription",l.appendChild(o),l.appendChild(c),n.appendChild(l);const s=document.createElement("div");s.classList.add("two","columns");var u=document.createElement("label");u.textContent="Due Date";var r=document.createElement("input");r.classList.add("u-full-width"),r.setAttribute("type","date"),r.setAttribute("name","taskDueDate"),r.id="taskDueDate",s.appendChild(u),s.appendChild(r),n.appendChild(s);const m=document.createElement("div");m.classList.add("two","columns");var p=document.createElement("label");p.textContent="Priority";var h=document.createElement("select");h.classList.add("u-full-width"),h.setAttribute("name","taskPriority"),h.id="taskPriority";var C=document.createElement("option");C.setAttribute("value","Low"),C.textContent="Low";var E=document.createElement("option");E.setAttribute("value","Medium"),E.textContent="Medium";var v=document.createElement("option");v.setAttribute("value","High"),v.textContent="High",h.appendChild(C),h.appendChild(E),h.appendChild(v),m.appendChild(p),m.appendChild(h),n.appendChild(m);var b=document.createElement("input");b.classList.add("button-primary"),b.setAttribute("type","submit"),b.setAttribute("value","Submit"),n.appendChild(b),t.appendChild(n),e.appendChild(t)})();let e=[];function t(e){this.name=e,this.tasks=[]}function n(e,t,n,a){this.name=e,this.description=t,this.dueDate=n,this.priority=a,this.done=!1,this.id=d++,this.info=this.name+", "+this.description+", "+this.dueDate+", "+this.done+" this task id is "}(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.id="project-container",t.classList.add("row","twelve","columns","projects");const n=document.createElement("button");n.classList.add("button","button-primary","new-project"),n.appendChild(document.createTextNode("Create New Project!")),t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.getElementById("content"),t=document.createElement("table");t.classList.add("u-full-width"),t.id="feed";const n=document.createElement("thead");t.appendChild(n);const d=document.createElement("tr"),a=document.createElement("th");a.innerHTML="Task Name",a.classList.add("five","columns");const i=document.createElement("th");i.innerHTML="Due Date",i.classList.add("two","columns");const l=document.createElement("th");l.innerHTML="Priority",l.classList.add("two","columns");const o=document.createElement("th");o.innerHTML="",o.classList.add("one","columns");const c=document.createElement("th");c.innerHTML="",c.classList.add("one","columns");const s=document.createElement("th");s.innerHTML="",s.classList.add("one","columns"),d.appendChild(a),d.appendChild(i),d.appendChild(l),d.appendChild(o),d.appendChild(c),d.appendChild(s),n.appendChild(d);const u=document.createElement("tbody");t.appendChild(u),e.appendChild(t)})();let d=0,a=[],i=document.getElementById("newToDoForm");function l(e,t){e.push(t)}const o=e=>{const t=document.getElementById("feed");document.getElementById("feed").innerHTML="",e.forEach((e=>{var n=document.createElement("tr"),d=document.createElement("td");d.innerHTML=e.name,d.classList.add("five","columns");var i=document.createElement("td");i.innerHTML=e.description,i.classList.add("four","columns");var l=document.createElement("td");l.innerHTML=e.dueDate,l.classList.add("two","columns");var s=document.createElement("td");s.innerHTML=e.priority,s.classList.add("two","columns");var u=document.createElement("td");u.classList.add("delete-button","one","columns","fas","fa-trash-alt"),u.id=e.id,u.onclick=function(){!function(e){let t=event.target.id;(function(e){let t=a.filter((t=>t!==e));a=t})(a.filter((e=>e.id==t))[0]),o(a),console.log("task sucessfully deleted")}()};var r=document.createElement("td");r.classList.add("edit-button","one","columns","fas","fa-edit"),r.id=e.id,r.onclick=function(){!function(e){e.preventDefault();let t=e.target.id,n=a.filter((e=>e.id==t))[0];console.table(a),function(e){(e=>{const t=document.getElementById("content"),n=document.createElement("form");n.id="editToDoForm";const d=document.createElement("div");d.className="row";const a=document.createElement("div");a.classList.add("three","columns");var i=document.createElement("label");i.textContent="Task Name";var l=document.createElement("input");l.classList.add("u-full-width"),l.setAttribute("type","text"),l.setAttribute("name","taskName"),l.setAttribute("value",e.name),l.id="editTaskName",l.setAttribute("required",!0),a.appendChild(i),a.appendChild(l),d.appendChild(a);const o=document.createElement("div");o.classList.add("five","columns");var c=document.createElement("label");c.setAttribute("for","taskDescription"),c.textContent="Description";var s=document.createElement("input");s.classList.add("u-full-width"),s.setAttribute("type","text"),s.setAttribute("name","taskDescription"),s.setAttribute("value",e.description),s.id="editTaskDescription",o.appendChild(c),o.appendChild(s),d.appendChild(o);const u=document.createElement("div");u.classList.add("two","columns");var r=document.createElement("label");r.textContent="Due Date";var m=document.createElement("input");m.classList.add("u-full-width"),m.setAttribute("type","date"),m.setAttribute("name","taskDueDate"),m.setAttribute("value",e.dueDate),m.id="editTaskDueDate",u.appendChild(r),u.appendChild(m),d.appendChild(u);const p=document.createElement("div");p.classList.add("two","columns");var h=document.createElement("label");h.textContent="Priority";var C=document.createElement("select");C.classList.add("u-full-width"),C.setAttribute("name","taskPriority"),C.setAttribute("value",e.priority),C.id="editTaskPriority";var E=document.createElement("option");E.setAttribute("value","Low"),E.textContent="Low";var v=document.createElement("option");v.setAttribute("value","Medium"),v.textContent="Medium";var b=document.createElement("option");b.setAttribute("value","High"),b.textContent="High","Low"==e.priority?(C.appendChild(E),C.appendChild(v),C.appendChild(b)):"Medium"==e.priority?(C.appendChild(v),C.appendChild(E),C.appendChild(b)):(C.appendChild(b),C.appendChild(E),C.appendChild(v)),p.appendChild(h),p.appendChild(C),d.appendChild(p);var y=document.createElement("input");y.classList.add("button-primary"),y.setAttribute("type","button"),y.setAttribute("value","Submit"),y.id="submit-button",d.appendChild(y);var L=document.createElement("input");L.id="cancel-button",L.setAttribute("type","button"),L.setAttribute("value","Cancel"),L.classList.add("button-secondary"),d.appendChild(L),n.appendChild(d),t.appendChild(n)})(e),document.getElementById("cancel-button").onclick=function(){c()},document.getElementById("submit-button").onclick=function(){let t=document.getElementById("editTaskName").value,n=document.getElementById("editTaskDescription").value,d=document.getElementById("editTaskDueDate").value,i=document.getElementById("editTaskPriority").value;e.name=t,e.description=n,e.dueDate=d,e.priority=i,o(a),c()}}(n)}(event)};var m=document.createElement("td");m.classList.add("done-button","one","columns","fas","fa-check-square"),m.id=e.id,m.onclick=function(){console.log("Task Completed")},n.appendChild(d),n.appendChild(l),n.appendChild(s),n.appendChild(u),n.appendChild(r),n.appendChild(m),t.appendChild(n)}))};function c(){var e=document.getElementById("editToDoForm");e.style.display="none",e.remove()}console.log("Hi, this is a npx webpack test message"),console.log("binding UI elements..."),i.addEventListener("submit",(function(e){e.preventDefault();let t=document.getElementById("taskName").value,d=document.getElementById("taskDescription").value,i=document.getElementById("taskDueDate").value,c=document.getElementById("taskPriority").value;console.log("creating a todo...");let s=new n(t,d,i,c);console.log("task created successfully"),document.getElementById("taskName").value="",document.getElementById("taskDescription").value="",document.getElementById("taskDueDate").value="",document.getElementById("taskPriority").value="Low",l(a,s),o(a)})),(()=>{let n=new t("All"),d=new t("Completed");e.push(n),e.push(d)})(),(()=>{let t=e,n=document.getElementById("project-container");t.forEach((e=>{const t=document.createElement("button");t.classList.add("button","button-secondary","projects"),t.appendChild(document.createTextNode(e.name)),n.appendChild(t)}))})(),function(){let e=new n("Dummy Task","description","03/24/2021","Medium");l(a,e),o(a)}()})();