//Local storage and session storage
// local storage will stay until you manually clear it out.
// when you leave from browser then that session is closed, and the data is automatically clear.

//set local storage items
//-----------------------
// localStorage.setItem("name", "john");
// localStorage.setItem("age", "30");

//set session storage items
//-----------------------
// sessionStorage.setItem("name", "beth");

//remove from storage
// localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//clear local storage
// localStorage.clear()
// console.log(name, age);


document.querySelector('form').addEventListener('submit', function(e){
    
   const task = document.getElementById('task').value ;

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

   localStorage.setItem('tasks', JSON.stringify(tasks));
   alert('Task Saved')
    e.preventDefault()
});


// pull from local storage

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEeach(function(task){
    console.log(task);
})