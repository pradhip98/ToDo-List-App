let inputVal = document.getElementById(`input`);
let btn = document.getElementById(`add`);
let todoList = document.getElementById(`todoList`);

//to store & maintain many datas array is usefull with localstorage
let todos =[]

window.onload=()=>{
    todos = JSON.parse(localStorage.getItem(`todos`)) ||[]
    todos.forEach(todo=>addTodo(todo));
}

btn.addEventListener(`click`,()=>{
    todos.push(inputVal.value)
    addTodo(inputVal.value);
    inputVal.value=``
    localStorage.setItem(`todos`,JSON.stringify(todos))

})

function addTodo(todo){
    let para = document.createElement(`p`);
    para.innerText=todo;
    todoList.appendChild(para);

    para.addEventListener(`click`,()=>{
        para.style.textDecoration=`line-through`
        remove(todo)
    })

    para.addEventListener(`dblclick`,()=>{
        remove(todo);
        todoList.removeChild(para)
    })
}

function remove(todo){
   let index= todos.indexOf(todo);
   if(index>-1)
    todos.splice(index,1)
    localStorage.setItem(`todos`,JSON.stringify(todos))
}


