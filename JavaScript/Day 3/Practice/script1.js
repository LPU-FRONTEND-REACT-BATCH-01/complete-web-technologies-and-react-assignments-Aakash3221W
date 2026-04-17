// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()

let paragraph = document.getElementsByTagName("p");
paragraph[0].innerHTML = "New Content using JavaScript";
// paragraph[0] because getElementsByTagName() returns HTML collection

let heading = document.getElementById("heading");
console.log(heading.classList.contains("heading-1")) // false
heading.classList.add("heading-1") // added
console.log(heading.classList.contains("heading-1")) // true

// ------------------------------------------------------

// append()
// remove()
// createElement()
// before/after => on same level insertion
// append => inside insertion

let li = document.createElement("li")
li.textContent = "New Item";

ul.append(li)
let ul = document.getElementsByClassName("fruits")[0];


let button = document.querySelector("button")
button.addEventListener('click', ()=>{
    console.log("button got clicked")
})

button.addEventListener('mouseover', ()=>{
    console.log("Mouse Over")
})

//----------------------------------------------------------

let to_do_list = document.querySelector(".to-do-list");
let input = document.querySelector("#text-btn")
let list_btn = document.getElementById("list-btn");

list_btn.addEventListener('click', ()=>{
    let li = document.createElement("li");
    li.textContent = input.value;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete'
    li.append(deleteButton);

    
    deleteButton.addEventListener('click', ()=>{
        li.remove();
    })

    let strikeButton = document.createElement("button");
    strikeButton.textContent = 'Done'
    li.append(strikeButton);

    strikeButton.addEventListener('click', ()=>{
        li.classList.add("striked");
    })

    to_do_list.append(li);
})