//document object properties

let val;
val = document;
val = document.all; // It'll give entair tag inside of the page
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype; //<!DOCUTYPE html>
val = document.domain; // 127.0.0.1
val = document.URL; //http://127.0.0.1:5500/DOM/index.html
val = document.characterSet; // UTF-8
val = document.contentType; // text/html
//forms
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

//links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].classList;
val = document.links[0].classList[0];

// images
val = document.images;
// secript
val = document.scripts;
val = document.scripts[2].getAttribute('src');


// we cann't loop through the dom collection. althrough they behave as an array we access through the index value but we can't loop through it
// we need to convert it into array to Array.from()

let links = document.links;
let linksArr = Array.from(links);
linksArr.forEach(function(link){
    console.log(link)
})

console.log(val)