// -------View Objectives Form

const formToggle = document.querySelector(".form-toggle")
const formContent = document.querySelector(".container-form")

formToggle.addEventListener("click", () => {
    formContent.classList.toggle("open")
});

// -------Add New Objective

const form = document.querySelector(".obj-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const objective = document.querySelector(".objective");
    const objList = document.querySelector(".container"); // For appending HTMl
    const deadlineObj = document.querySelector(".deadline");
    const today = new Date();
    const deadline = new Date(deadlineObj.value);
    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    let countdown = (deadline.getTime() - today.getTime()) / msPerDay;
    countdown = Math.round(countdown); //returns days left to deadline
    console.log(countdown)
// -----Insert html template for objectives list
    objList.insertAdjacentHTML("beforeend",`
    <button class="task-drop">Tasks</button>
    <h4>${objective.value}</h4>
    <span>${countdown} Days Left</span>
    <div class="dash-tasks"></div>
    `);
    console.log(objective.value);
    objective.value = ""; // Reset Input
});

// -------Complete Objective/Update Milestone

const doneObjBtns = document.querySelectorAll(".complete-obj");

for(let doneObjBtn of doneObjBtns){
    doneObjBtn.addEventListener("click", () => {
        doneObjBtn.classList.toggle("done");
        console.log("finito");
    })
}

// -------Toggle Objectives Tasks

const tasksBtns = document.querySelectorAll(".task-drop");

for(let tasksBtn of tasksBtns) {
    tasksBtn.addEventListener("click", () => {
        tasksBtn.parentElement.lastElementChild
        .classList.toggle("open")
    })
};


// --------Check Off Task

const inputs = document.querySelectorAll(".checkbox")

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
