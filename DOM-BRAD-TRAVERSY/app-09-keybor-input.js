//keybord and input events
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
taskInput.value = '';
// form.addEventListener('submit', runEvent);
//keydown
// taskInput.addEventListener('keydown', runEvent);
//keyUp
// taskInput.addEventListener('keyup', runEvent);

//keypress
// taskInput.addEventListener('keypress', runEvent);
//foucs
// taskInput.addEventListener('focus', runEvent)
//blur
// taskInput.addEventListener('blur', runEvent)
//cut
// taskInput.addEventListener('cut', runEvent);
// pest 
// taskInput.addEventListener("paste", runEvent);
//input
taskInput.addEventListener('input', runEvent)


function runEvent(e){
    console.log(`events type : ${e.type}`);
    // console.log(e.target.value);
    // heading.innerText = e.target.value;
    //get input value
    // console.log(taskInput.value);
    // e.preventDefault();
}