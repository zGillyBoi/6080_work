// console.log(document)
// console.dir(document.title)
// document.title = "Testing"
// console.dir(document.title)
// console.log(document.doctype.name)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.links)
// console.log(document.forms)

// // get element by id
// // console.log(document.header-title) // this does nothiung lmao
// console.log(document.querySelector("#header-title"))

// const headerTitle = document.getElementById("header-title")

// console.log(headerTitle.textContent)

// // headerTitle.textContent = "Hello Guys!"

// console.log(headerTitle.textContent)

// // headerTitle.innerText = "Hello Guys! Inner Text"

// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)

// headerTitle.style.borderBottom = 'solid 3px #000'

// headerTitle.innerHTML = "<h3>Hello Guys! Inner HTML</h3>"


// get element by class name
// var items = document.getElementsByClassName("list-group-item")
// console.log(items)
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "yellow"

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4"
// }
// cant call everything at once cos it's an array, need to loop thru it

// get elements by tag name
// var items = document.getElementsByTagName("li")
// console.log(items)
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "yellow"

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4"
// }

// query selector
// var header = document.querySelector("#main-header")
// header.style.borderBottom = "solid 4px black"

// var input = document.querySelector("input")
// input.value = "Hello World"

// var item = document.querySelector(".list-group-item") // only gets the first one
// item.style.color = "red"

// var lastItem = document.querySelector(".list-group-item:last-child")
// lastItem.style.color = "blue"