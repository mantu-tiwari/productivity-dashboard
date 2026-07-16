const dashboard = document.querySelector('.dashboard')
const todoBtn = document.querySelector('#todo-card button')
const todoPage = document.querySelector('#todo-page')
const todoClose = document.querySelector('#todo-page button')
const plannerBtn = document.querySelector('#planner-card button')
const plannerPage = document.querySelector('#planner-page')
const plannerClose = document.querySelector('#planner-page button')
const goalBtn = document.querySelector('#goal-card button')
const goalPage = document.querySelector('#goal-page')
const goalClose = document.querySelector('#goal-page button')
const pomodomoBtn = document.querySelector('#pomodomo-card button')
const pomodomoPage = document.querySelector('#pomodomo-page')
const pomodomoClose = document.querySelector('#pomodomo-page button')
const quoteBtn = document.querySelector('#quote-card button')
const quotePage = document.querySelector('#quote-page')
const quoteClose = document.querySelector('#quote-page button')


function toggelPage (openBtn, page, closeBtn) {
    openBtn.addEventListener('click', () => {
        page.style.display = 'block'
        dashboard.style.display= 'none'
    })
    closeBtn.addEventListener('click', () => {
        page.style.display = 'none'
        dashboard.style.display= 'block'
    })
}
toggelPage(todoBtn, todoPage, todoClose)
toggelPage(plannerBtn, plannerPage, plannerClose)
toggelPage(goalBtn, goalPage, goalClose)
toggelPage(pomodomoBtn, pomodomoPage, pomodomoClose)
toggelPage(quoteBtn, quotePage, quoteClose)