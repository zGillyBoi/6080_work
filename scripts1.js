const grandparent = document.querySelector(".red")
const parent = document.querySelector(".blue")
const child = document.querySelector(".green")

// event handler
// grandparent.onclick = function() {
//     console.log("I am the grandparent")
// }

function grandparentClick() {
    console.log("I am the grandparent")
}

function parentClick() {
    console.log("I am the parent")
}

function childClick(e) {
    console.log("I am the child"),
    e.stopPropagation() // stops the event from bubbling up to the parent and grandparent
}
// need the e parameter for stoppropagation to work, otherwise it won't work. e is the event object that 
// is passed to the event handler function when the event is triggered. It contains information about the event, 
// such as the target element, the type of event, and other properties. By calling e.stopPropagation(), we can 
// prevent the event from bubbling up to the parent and grandparent elements, which would trigger their event handlers as well.

// grandparent.addEventListener("click", function() {
//     console.log("I am the grandparent")
// })

// or:
// grandparent.addEventListener("click", e => {
//     console.log("I am the grandparent")
// }) // this works cos no parameters so when clicked, it still activates.

// parent.removeEventListener("click", (e) => {
//     console.log("testing"),
//     {capture: true}
// }) // this removes the event listener from the parent element, so when clicked, it won't activate.


// grandparent.addEventListener("click", grandparentClick)
// parent.addEventListener("click", parentClick, {capture: true})
// child.addEventListener("click", childClick)

// parent.removeEventListener("click", parentClick, {capture: true}) // this removes the event listener from the parent element, so when clicked, it won't activate.

// Remember, addEventListener() doesn't execute the function. It just registers it for future events.

// this wouldnt work with newly added elements at the bottom cos addeventlistener registers before anything else is done
// document.addEventListener("click", e => {
//     console.log("hi")
// })

// this would work cos it dynamicallky gets the target matches
document.addEventListener("click", e => {
    if(e.target.matches('div')) {
        console.log("hi")
    }
    
})

const newDiv = document.createElement("div")
newDiv.style.width = "280px"
newDiv.style.height = "280px"
newDiv.style.backgroundColor = "purple"
// can also do this

document.body.appendChild(newDiv)
// theroetically this works but is clunky. but lowk i cant get it to work lol
// newDiv.addEventlistener("click", () => {
//     console.log("I am the new div")
// })

grandparent.addEventListener("click", (e) => {
    console.log(e)
})
