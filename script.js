const body = document.body;
const dashboard = document.querySelector(".dashboard");
const nav = document.querySelector("nav");
const todoBtn = document.querySelector("#todo-card button");
const todoPage = document.querySelector("#todo-page");
const todoClose = document.querySelector("#todo-page button");
const plannerBtn = document.querySelector("#planner-card button");
const plannerPage = document.querySelector("#planner-page");
const plannerClose = document.querySelector("#planner-page button");
const goalBtn = document.querySelector("#goal-card button");
const goalPage = document.querySelector("#goal-page");
const goalClose = document.querySelector("#goal-page button");
const pomodomoBtn = document.querySelector("#pomodomo-card button");
const pomodomoPage = document.querySelector("#pomodomo-page");
const pomodomoClose = document.querySelector("#pomodomo-page button");
const quoteBtn = document.querySelector("#quote-card button");
const quotePage = document.querySelector("#quote-page");
const quoteClose = document.querySelector("#quote-page button");
const date = document.querySelector("#date h3");
const time = document.querySelector("#time h3");
const themeBtn = document.querySelector("nav i");

const todoForm = document.querySelector(".todo-form");
const todoContainer = document.querySelector(".todo-list");

// Open Page and Close Page
function toggelPage(openBtn, page, closeBtn) {
  openBtn.addEventListener("click", () => {
    page.style.display = "flex";
    dashboard.style.display = "none";
  });
  closeBtn.addEventListener("click", () => {
    page.style.display = "none";
    dashboard.style.display = "block";
  });
}
toggelPage(todoBtn, todoPage, todoClose);
toggelPage(plannerBtn, plannerPage, plannerClose);
toggelPage(goalBtn, goalPage, goalClose);
toggelPage(pomodomoBtn, pomodomoPage, pomodomoClose);
toggelPage(quoteBtn, quotePage, quoteClose);

// Date and Time Implementaion
const now = new Date();
function updateTime() {
  const now = new Date();
  time.textContent = now.toLocaleTimeString();
}
updateTime();
date.textContent = now.toDateString();
setInterval(updateTime, 1000);

// Theme Implementation
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// To-do Application
const todoData = [];
const ui = () => {
  todoContainer.innerHTML = "";
  todoData.forEach((task, i) => {
    todoContainer.innerHTML += `<div class="todo-works">
              <h3> ${task.task} </h3>
              <div>
                <label> 
                  <input type="checkbox" name="Complete" > Complete
                </label>
                <i onclick="deleteTask(${i})" class="fa-solid fa-trash"></i>
                <i onclick="impTask(${i})" class="fa-solid fa-star ${task.important ? "important" : ''}"></i>
              </div>
            </div>`;
  });
};
ui()

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = e.target[0].value;
  todoData.push({
    task: taskValue,
    completed: false,
    important: false,
  });
  console.log(todoData);
  ui();
  todoForm.reset();
});
const deleteTask = (idx) => {
  todoData.splice(idx, 1);
  console.log(todoData);
  ui();
};
const impTask = (i) => {
  todoData[i].important = !todoData[i].important;
      console.log(todoData[i]);  

  ui();
};
