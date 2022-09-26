//Replace Element

//create element

const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));
//Get the old heading
const oldHeading = document.getElementById("task-title");
//Parent 
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading)
console.log(newHeading);
//______________________________________
//Remove Element 

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[1].remove();

//Remove by child element
list.removeChild(lis[3]);

//classes & attribute
const firstLis = document.querySelector("li:first-child");

const link = firstLis.children[0];


let val ;
//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.remove('test');
val = link;

//Attribute
val = link.getAttribute('href');
val = link.setAttribute('href', "http://google.com");
//check the attribute
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val)