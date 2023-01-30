// -------Toggle Objectives Form

const formToggle = document.querySelector(".form-toggle")
const formContent = document.querySelector(".container-form")

formToggle.addEventListener("click", () => {
    formContent.classList.toggle("open")
});

// -------Toggle Objectives Tasks

const tasksBtns = document.querySelectorAll(".task-drop");

for(let tasksBtn of tasksBtns) {
    tasksBtn.addEventListener("click", () => {
        tasksBtn.parentElement.lastElementChild
        .classList.toggle("open")
    })
};


// --------Check Off Task

const inputs = document.querySelectorAll("input")

for(let input of inputs) {
        input.addEventListener("click", () => {
            if(!input.checked) {
                console.log("Do It")
                input.nextElementSibling.style.textDecoration = ""
            } else {
                console.log("Completed")
                input.nextElementSibling.style.textDecoration = "line-through"
            }
        })
    };
