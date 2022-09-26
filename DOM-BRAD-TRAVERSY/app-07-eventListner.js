//Event listner

//click
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('hello world');
//     e.preventDefault()
// });

/*
why the hell word flashes in console ?.
It flashes real quick down here on the console when I click.
The reason that that's happening is some elements have default behaviors.
For instance, a form will submit to a page.

A link will try to  redirect somewhere else.
What's happening is if we look at the link here, it doesn't have any href link, meaning that it's just going to link to the same page.

Now if we put a hash(#) symbol in href, that's going to stop it from actually making the browser redirect.
now we can see hello world it stays.

Now to stop that default behaviour, we can pass into our function a parameter which is going to be the event object.
and we need to call method e.preventDefault();

if the href have # or any link then we don't need to add preventDefault()
*/

// --------------------------------------------------------------
//onlick
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e){
    let val;
    val = e;
    //Event target element
    val = e.target;
    val = e.target.className;
    val = e.target.id;
    val = e.target.classList;

    // e.target.innerText = 'Hello';
    //Event type
    val = e.type;
    //TimeStamp
    val = e.timeStamp;
    //Coordinate event relative to the window
    val = e.clientY;
    val = e.clientX;

    //Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
}