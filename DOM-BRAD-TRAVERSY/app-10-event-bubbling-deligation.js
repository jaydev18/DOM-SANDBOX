//Event Bubbling : The bubbles read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card-title');
// });

// document.querySelector('.item-one').addEventListener('click', function(){
//     console.log('list one')
// });
// document.querySelector('.main').addEventListener('click', function(){
//     console.log('main')
// });
// document.querySelector('.collection').addEventListener('click', function(){
//     console.log('collection')
// });

// EVENT DELGATION

const delItem = document.querySelector('.item-one');

delItem.addEventListener("click", function (e) {
  if(e.target.parentElement.classList == 'div'){
    e.target.parentElement.remove()
  };
});