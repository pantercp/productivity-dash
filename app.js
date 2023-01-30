// -------Toggle Objectives Tasks

const tasksBtn = document.querySelector("#task");
const tasksList = document.querySelector(".dash-tasks");

tasksBtn.addEventListener("click", () => {
    tasksList.classList.toggle("open")
});

// --------Check Off Task

const checkBtn = document.querySelector("#check");
const taskItem = document.querySelector(".task-item");
let taskComplete = false

checkBtn.addEventListener("click", () => {
    if (!taskComplete) {
    taskItem.style.textDecoration = "line-through"
    taskComplete = true;
    } else {
    taskItem.style.textDecoration = ""
    taskComplete = false
    }
})

// text-decoration: line-through;
