//DOM SELECTORS FOR SINGLE ELEMENTS :- THESE DOCUMENT OBJECT METHODS THAT ALLOW US BASICALLY PULL THINGS FROM THE DOM.

/*So basically in vanilla JavaScript, we have use couple of different selectors. 
That can be categorized into two different types, single element and multiple element selectors.

Single element selectors will allow you to grab one element by its IDE or its class or whatever may be at a time.
 
Multiple elements selectors will actually get all of the elements with that class and then return
an HTML collection or a node list depending on which selector you use.
 */

// getElementById()

let val;
val = document.getElementById('task-title');
val = document.getElementById('task-title').className;
// val = document.getElementById('')
console.log(val);

