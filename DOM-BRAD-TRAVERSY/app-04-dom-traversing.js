//Traversing to dom
let val ;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child')
val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype




//Get Childeren element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'hello'

//Children of children
val = list.children[3].children[0];

//firstChild
val = list.firstChild; //not recommended
val = list.firstElementChild;

//firstChild
val = list.lastChild; //not recommended
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//__________________________________________________
//Get Parent node

val = listItem.parentNode;
val = listItem.parentElement.parentElement;

//Get next Sibling
val = listItem.nextElementSibling
val = listItem.nextElementSibling.nextElementSibling;

//Get previous sibling
val = listItem.previousElementSibling;

console.log(val)