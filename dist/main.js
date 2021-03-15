(()=>{"use strict";function e(e,n,d,a){this.name=e,this.description=n,this.dueDate=d,this.priority=a,this.done=!1,this.id=t++,this.info=this.name+", "+this.description+", "+this.dueDate+", "+this.done+" this task id is "}(()=>{const e=document.getElementById("content"),t=document.createElement("form");t.id="newToDoForm";const n=document.createElement("div");n.className="row";const d=document.createElement("div");d.classList.add("three","columns");var a=document.createElement("label");a.textContent="Task Name";var i=document.createElement("input");i.classList.add("u-full-width"),i.setAttribute("type","text"),i.setAttribute("name","taskName"),i.setAttribute("placeholder","Project Charter"),i.id="taskName",i.setAttribute("required",!0),d.appendChild(a),d.appendChild(i),n.appendChild(d);const l=document.createElement("div");l.classList.add("five","columns");var o=document.createElement("label");o.setAttribute("for","taskDescription"),o.textContent="Description";var s=document.createElement("input");s.classList.add("u-full-width"),s.setAttribute("type","text"),s.setAttribute("name","taskDescription"),s.setAttribute("placeholder","Create Project Charter and Send to Sponsor"),s.id="taskDescription",l.appendChild(o),l.appendChild(s),n.appendChild(l);const c=document.createElement("div");c.classList.add("two","columns");var u=document.createElement("label");u.textContent="Due Date";var r=document.createElement("input");r.classList.add("u-full-width"),r.setAttribute("type","date"),r.setAttribute("name","taskDueDate"),r.id="taskDueDate",c.appendChild(u),c.appendChild(r),n.appendChild(c);const m=document.createElement("div");m.classList.add("two","columns");var p=document.createElement("label");p.textContent="Priority";var h=document.createElement("select");h.classList.add("u-full-width"),h.setAttribute("name","taskPriority"),h.id="taskPriority";var v=document.createElement("option");v.setAttribute("value","Low"),v.textContent="Low";var E=document.createElement("option");E.setAttribute("value","Medium"),E.textContent="Medium";var C=document.createElement("option");C.setAttribute("value","High"),C.textContent="High",h.appendChild(v),h.appendChild(E),h.appendChild(C),m.appendChild(p),m.appendChild(h),n.appendChild(m);var b=document.createElement("input");b.classList.add("button-primary"),b.setAttribute("type","submit"),b.setAttribute("value","Submit"),n.appendChild(b),t.appendChild(n),e.appendChild(t)})(),(()=>{const e=document.getElementById("content"),t=document.createElement("table");t.classList.add("u-full-width"),t.id="feed";const n=document.createElement("thead");t.appendChild(n);const d=document.createElement("tr"),a=document.createElement("th");a.innerHTML="Task Name",a.classList.add("five","columns");const i=document.createElement("th");i.innerHTML="Due Date",i.classList.add("two","columns");const l=document.createElement("th");l.innerHTML="Priority",l.classList.add("two","columns");const o=document.createElement("th");o.innerHTML="",o.classList.add("one","columns");const s=document.createElement("th");s.innerHTML="",s.classList.add("one","columns");const c=document.createElement("th");c.innerHTML="",c.classList.add("one","columns"),d.appendChild(a),d.appendChild(i),d.appendChild(l),d.appendChild(o),d.appendChild(s),d.appendChild(c),n.appendChild(d);const u=document.createElement("tbody");t.appendChild(u),e.appendChild(t)})();let t=0,n=[],d=document.getElementById("newToDoForm");function a(e,t){e.push(t)}const i=e=>{const t=document.getElementById("feed");document.getElementById("feed").innerHTML="",e.forEach((e=>{var d=document.createElement("tr"),a=document.createElement("td");a.innerHTML=e.name,a.classList.add("five","columns");var o=document.createElement("td");o.innerHTML=e.description,o.classList.add("four","columns");var s=document.createElement("td");s.innerHTML=e.dueDate,s.classList.add("two","columns");var c=document.createElement("td");c.innerHTML=e.priority,c.classList.add("two","columns");var u=document.createElement("td");u.classList.add("delete-button","one","columns","fas","fa-trash-alt"),u.id=e.id,u.onclick=function(){!function(e){let t=event.target.id;(function(e){let t=n.filter((t=>t!==e));n=t})(n.filter((e=>e.id==t))[0]),i(n),console.log("task sucessfully deleted")}()};var r=document.createElement("td");r.classList.add("edit-button","one","columns","fas","fa-edit"),r.id=e.id,r.onclick=function(){!function(e){e.preventDefault();let t=e.target.id,d=n.filter((e=>e.id==t))[0];console.table(n),function(e){(e=>{const t=document.getElementById("content"),n=document.createElement("form");n.id="editToDoForm";const d=document.createElement("div");d.className="row";const a=document.createElement("div");a.classList.add("three","columns");var i=document.createElement("label");i.textContent="Task Name";var l=document.createElement("input");l.classList.add("u-full-width"),l.setAttribute("type","text"),l.setAttribute("name","taskName"),l.setAttribute("value",e.name),l.id="editTaskName",l.setAttribute("required",!0),a.appendChild(i),a.appendChild(l),d.appendChild(a);const o=document.createElement("div");o.classList.add("five","columns");var s=document.createElement("label");s.setAttribute("for","taskDescription"),s.textContent="Description";var c=document.createElement("input");c.classList.add("u-full-width"),c.setAttribute("type","text"),c.setAttribute("name","taskDescription"),c.setAttribute("value",e.description),c.id="editTaskDescription",o.appendChild(s),o.appendChild(c),d.appendChild(o);const u=document.createElement("div");u.classList.add("two","columns");var r=document.createElement("label");r.textContent="Due Date";var m=document.createElement("input");m.classList.add("u-full-width"),m.setAttribute("type","date"),m.setAttribute("name","taskDueDate"),m.setAttribute("value",e.dueDate),m.id="editTaskDueDate",u.appendChild(r),u.appendChild(m),d.appendChild(u);const p=document.createElement("div");p.classList.add("two","columns");var h=document.createElement("label");h.textContent="Priority";var v=document.createElement("select");v.classList.add("u-full-width"),v.setAttribute("name","taskPriority"),v.setAttribute("value",e.priority),v.id="editTaskPriority";var E=document.createElement("option");E.setAttribute("value","Low"),E.textContent="Low";var C=document.createElement("option");C.setAttribute("value","Medium"),C.textContent="Medium";var b=document.createElement("option");b.setAttribute("value","High"),b.textContent="High",v.appendChild(E),v.appendChild(C),v.appendChild(b),p.appendChild(h),p.appendChild(v),d.appendChild(p);var y=document.createElement("input");y.classList.add("button-primary"),y.setAttribute("type","button"),y.setAttribute("value","Submit"),y.id="submit-button",d.appendChild(y);var f=document.createElement("input");f.id="cancel-button",f.setAttribute("type","button"),f.setAttribute("value","Cancel"),f.classList.add("button-secondary"),d.appendChild(f),n.appendChild(d),t.appendChild(n)})(e),document.getElementById("cancel-button").onclick=function(){l()},document.getElementById("submit-button").onclick=function(){let t=document.getElementById("editTaskName").value,d=document.getElementById("editTaskDescription").value,a=document.getElementById("editTaskDueDate").value,o=document.getElementById("editTaskPriority").value;e.name=t,e.description=d,e.dueDate=a,e.priority=o,console.table(n),i(n),l()}}(d)}(event)};var m=document.createElement("td");m.classList.add("done-button","one","columns","fas","fa-check-square"),m.id=e.id,m.onclick=function(){console.log("Task Completed")},d.appendChild(a),d.appendChild(s),d.appendChild(c),d.appendChild(u),d.appendChild(r),d.appendChild(m),t.appendChild(d)}))};function l(){var e=document.getElementById("editToDoForm");e.style.display="none",e.remove()}console.log("Hi, this is a npx webpack test message"),console.log("binding UI elements..."),d.addEventListener("submit",(function(t){t.preventDefault();let d=document.getElementById("taskName").value,l=document.getElementById("taskDescription").value,o=document.getElementById("taskDueDate").value,s=document.getElementById("taskPriority").value;console.log("creating a todo...");let c=new e(d,l,o,s);console.log("task created successfully"),document.getElementById("taskName").value="",document.getElementById("taskDescription").value="",document.getElementById("taskDueDate").value="",document.getElementById("taskPriority").value="Low",a(n,c),i(n)})),function(){let t=new e("Dummy Task","description","03/24/2021","Med");a(n,t),i(n)}()})();