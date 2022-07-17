/* START OF JAVASCRIPT TO CREATE AND ASS CLASS TO A TABLE*/
const submitBtn = document.querySelector("#submitBtn")
const classes = document.querySelector("#classes")
const classInput = document.querySelector("#classInput")

// array of className input
let classNameArray = [];

// functions to save classes in session storage
const saveClass = (classNames) => {
    classNameArray.push(classNames)
    sessionStorage.setItem("classNames", JSON.stringify(classNameArray))
}

// Function todisplay classes
const displayClasses = (classNameArray) => {
    const ul = document.createElement("ul")

    classes.textContent = ""

    for (let i = 0; i < classNameArray.length; i++) {
        const li = document.createElement("li")
        li.textContent = classNameArray[i]

        ul.appendChild(li)
        console.log(classNameArray[i])
    }

    classes.appendChild(ul)

    classInput.value = ""
}

// function to add classes in to array
const addElementToArray = (classNames) =>{
    saveClass(classNames)
    foods = JSON.parse(sessionStorage.getItem("classNames"));
    displayClasses(classNameArray)
}

// event to submit button and display 
submitBtn.addEventListener("click", () => {

    const classNames = classInput.value

    if (classNameArray.indexOf(classNames) !== -1) {
        alert("class is exist!")
        classInput.value = ""
    } else {
        addElementToArray(classNames)
    }
})