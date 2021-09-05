const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];
// local storage에 저장 
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  
  
}

// todo 삭제
function deleteToDo(event){
  const deleteTarget = event.target.parentElement;
  deleteTarget.remove();
  toDos = toDos.filter(item => item.id !== parseInt(deleteTarget.id));
  saveToDos();
}

// todo 생성
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo.text;
  li.id = newTodo.id;
  // todo 삭제버튼 
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  toDoList.appendChild(li);

}


function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; 
  toDoInput.value = "";
  
  if(!newTodo){
    alert('Please enter value');
  }else{
    const newTodoObj = {
      id: Date.now(),
      text: newTodo
    };
    toDos.push(newTodoObj); // toDos 배열에 newTodo 전달 
    paintToDo(newTodoObj);
    saveToDos();
  
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}