// mouse event

const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
// clearBtn.addEventListener('click', runEvent);

//Double Click
// clearBtn.addEventListener('dblclick', runEvent);

//mouse down
// clearBtn.addEventListener('mousedown', runEvent)

//moseup
// clearBtn.addEventListener('mouseup', runEvent)

//mouseenter
// card.addEventListener("mouseenter", runEvent);

//mouseleave
// card.addEventListener("mouseleave", runEvent);

//mouseOver
// card.addEventListener('mouseover', runEvent);
//mouseout
// card.addEventListener('mouseout', runEvent);

//mouse move
card.addEventListener('mousemove', runEvent);



//Event handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `mouseX: ${e.offsetX} Mouse:${e.offsetY}`
    document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 40 )`;
}