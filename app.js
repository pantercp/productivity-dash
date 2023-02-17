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
    const objList = document.querySelector(".container");
// -----Insert html template for objectives list
    objList.insertAdjacentHTML("beforeend",`
    <button>Toggle</button>
    <h4>${objective.value}</h4>
    <span>4 Days Left</span>
    <div class="dash-tasks"></div>
    `);
    console.log(objective.value);
    objective.value = "";
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
