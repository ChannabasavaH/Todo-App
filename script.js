const todo = document.querySelector("#todo_input");
const task = document.querySelector(".create_task");
const show_todo = document.querySelector(".show_todo");


let todos = [];

task.addEventListener("click",() => {
    const add_todo = todo.value.trim();
    todos.push(add_todo);
    todo.value = "";
    display_todos(todos);
})

const display_todos = (todos) => {
    show_todo.innerHTML = "";
    todos.map( (task, id) => {
        const li = document.createElement("li");
        li.classList.add("list")
        const button = document.createElement("button");
        button.innerHTML = "delete"
        button.classList.add("button")
        li.innerHTML = task;
        show_todo.appendChild(li);
        li.append(button);
        delete_todo(id,button,todos);
    });
}

const delete_todo = (id,button,todos) => {
    button.addEventListener("click",() => {
        todos = todos.filter((task,index) => index !== id);
        display_todos(todos);
    })
}