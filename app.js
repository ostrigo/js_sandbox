// 022 Examining The Document Object
let val;

val = window;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.URL;

val = document.forms;
val = document.forms[0].id;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(script => {
  console.log(script.getAttribute('src'));
});

console.log(val);