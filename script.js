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
// Pages Selections
const todoForm = document.querySelector(".todo-form");
const todoContainer = document.querySelector(".todo-list");
const plannerContainer = document.querySelector(".planner-cards");
const goalContainer = document.querySelector(".goal-list");
const goalForm = document.querySelector(".goal-form");
const playBtn = document.querySelector("#play-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");
const timer = document.querySelector("#pomodomo-container h1");
const newQuoteBtn = document.querySelector("#quote-container button");
const quoteTxt = document.querySelector(".quote-area h1");
const quoteAuthor = document.querySelector(".quote-area p");
const dashboardQuote = document.querySelector(".summary-dsb p");
const weather = document.querySelector("#weather p");
const tempe = document.querySelector("#weather h3");
const city = document.querySelector("#weather h2");

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
const renderTodo = () => {
  todoContainer.innerHTML = "";
  todoData.forEach((task, i) => {
    todoContainer.innerHTML += `<div class="todo-works">
              <h3 class='${task.completed ? "completed" : ""} ' > ${task.task} </h3>
              <div>
                <label> 
                  <input onclick="completedTask(${i})" type="checkbox" ${task.completed ? "checked" : ""} name="Complete" > Complete
                </label>
                <i onclick="deleteTask(${i})" class="fa-solid fa-trash"></i>
                <i onclick="impTask(${i})" class="fa-solid fa-star ${task.important ? "important" : ""}"></i>
              </div>
            </div>`;
  });
};
renderTodo();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = e.target[0].value;
  todoData.push({
    task: taskValue,
    completed: false,
    important: false,
  });
  console.log(todoData);
  renderTodo();
  todoForm.reset();
});
const deleteTask = (idx) => {
  todoData.splice(idx, 1);
  console.log(todoData);
  renderTodo();
};
const impTask = (i) => {
  todoData[i].important = !todoData[i].important;
  console.log(todoData[i]);
  renderTodo();
};
const completedTask = (i) => {
  todoData[i].completed = !todoData[i].completed;
  console.log(todoData[i]);
  renderTodo();
};

// Daily Planner Application
for (let i = 0; i < 24; i++) {
  plannerContainer.innerHTML += `<div class="planner-form">
  <h3>${i}:00</h3>
  <textarea name="" id=""></textarea>
  <button class='clear-btn' >Reset</button>
  </div>`;
}
const clearBtns = document.querySelectorAll(".clear-btn");
clearBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const plannerForm = btn.closest(".planner-form");
    plannerForm.querySelector("textarea").value = "";
  });
});

// Daily Goals Application
const goalData = [];
const renderGoal = () => {
  goalContainer.innerHTML = "";
  goalData.forEach((task, i) => {
    goalContainer.innerHTML += `<div class="todo-works">
              <h3 class='${task.completed ? "completed" : ""} ' > ${task.task} </h3>
              <div>
                <label> 
                  <input onclick="completedGoal(${i})" type="checkbox" ${task.completed ? "checked" : ""} name="Complete" > Complete
                </label>
                <i onclick="deleteGoal(${i})" class="fa-solid fa-trash"></i>
              </div>
            </div>`;
  });
};
renderGoal();
goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = e.target[0].value;
  goalData.push({
    task: taskValue,
    completed: false,
  });
  console.log(goalData);
  renderGoal();
  goalForm.reset();
});
const deleteGoal = (idx) => {
  goalData.splice(idx, 1);
  console.log(goalData);
  renderGoal();
};
const completedGoal = (i) => {
  goalData[i].completed = !goalData[i].completed;
  console.log(goalData[i]);
  renderGoal();
};

// Pomodomo Application
let timeleft = 25 * 60;
let timeInterval = null;
playBtn.addEventListener("click", () => {
  if (timeInterval) return;
  timeInterval = setInterval(() => {
    timeleft--;
    const minute = Math.floor(timeleft / 60);
    const second = timeleft % 60;
    if (second < 10) {
      timer.innerHTML = `${minute}:0${second}`;
    } else if (minute < 10) {
      timer.innerHTML = `0${minute}:${second}`;
    } else {
      timer.innerHTML = `${minute}:${second}`;
    }
  }, 1000);

  if (timeleft === 0) {
    clearInterval(timeInterval);
    alert("Times Up...");
  }
});
pauseBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  timeInterval = null;
  console.log(timeInterval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  timeInterval = null;
  timeleft = 25 * 60;
  timer.innerHTML = "25:00";
});

// Quote Implementation
newQuoteBtn.addEventListener("click", () => {
  console.log("new quote");
  newQuote();
});
async function newQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  quoteTxt.textContent = data.quote;
  quoteAuthor.textContent = data.author;
  dashboardQuote.textContent = data.quote;
}
newQuote();

// weather Implementation
const apiKey = "739c3f2fa3733eef18802930b18ad22c";
navigator.geolocation.getCurrentPosition(currentTemp);
async function currentTemp(position) {
  try {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    );
    if (!response.ok) {
      throw new Error("Weather API Error");
    }
    const data = await response.json();
    console.log(data);
    city.textContent = data.name;
    tempe.textContent = `${Math.round(data.main.temp)}°C`;
    weather.textContent = data.weather[0].main;
  } catch (err) {
    console.log(err);
    city.textContent = "Unavailable";
    tempe.textContent = "--°C";
    weather.textContent = "Weather unavailable";
  }
}
