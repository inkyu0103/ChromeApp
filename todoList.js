const todoListFormContainer = document.querySelector(".todoList-container");
const todoListItem = todoListFormContainer.querySelector("input");
const todoListUl = document.querySelector(".todoListUl");

let todoArr = [];
const TODOS_LS = "todo";


const delTodo = (obj) =>{
    console.log(obj);
    const newTodoArr = todoArr.filter((item)=>{
        return String(item.id) !== obj.id;
    });
    todoArr=newTodoArr;

    todoListUl.removeChild(obj);
    saveTodo();
}


const handleDelTodo = (event) => {
    const delobj = event.target.parentNode;
    delTodo(delobj);
}


const paintTodo = (todoitem) =>{
    const span = document.createElement("span");
    const li = document.createElement("li");
    const delBtn =document.createElement("button");
    const doneBtn =document.createElement("button");
    const newTodoId = todoArr.length +1 ;

    delBtn.innerText = "❌";
    span.innerText = todoitem;

    li.id = newTodoId;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    todoListUl.appendChild(li);

    delBtn.addEventListener("click",handleDelTodo);


    todoArr.push({
        id : newTodoId,
        text : todoitem
    });
    saveTodo();
    
}

const saveTodo = () =>{
    localStorage.setItem("todo",JSON.stringify(todoArr));
}


const handleTodoSubmit = (event) =>{
    event.preventDefault();
    const todoitem = todoListItem.value;
    paintTodo(todoitem);
    todoListItem.value ="";
}

const loadTodoList = () =>{
    const todoItem = localStorage.getItem(TODOS_LS);
    if (todoItem !== null){
        const parsedTodos = JSON.parse(todoItem);
        parsedTodos.forEach((todo)=>{
            paintTodo(todo.text);
        })
    }
}



const todoListEvent = () =>{
    loadTodoList();
    const todoItemList = todoListFormContainer.addEventListener("submit",handleTodoSubmit);
    
}

todoListEvent();