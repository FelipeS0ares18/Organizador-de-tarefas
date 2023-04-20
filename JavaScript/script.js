const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoLista = document.querySelector("#todo-lista");
const editarForm = document.querySelector("#editar-form");
const editaInput = document.querySelector("#editar-input");
const CancelarEdit = document.querySelector("#cancelar-edit");

let antigoInputValue;

const saveTodo = (Text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = Text;
    todo.appendChild(todoTitle);

    const feito = document.createElement("button");
    feito.classList.add("terminados");
    feito.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(feito);

    const editar = document.createElement("button");
    editar.classList.add("editar-pendencia");
    editar.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editar);

    const remover = document.createElement("button");
    remover.classList.add("remover-pendencia");
    remover.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(remover);

    todoLista.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
};

const toggleForms = () => {
    editarForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoLista.classList.toggle("hide");
};

const uptadeTodo = (Text) => {

const todos = document.querySelectorAll(".todo");

todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");
    if(todoTitle.innerText === antigoInputValue) {
        todoTitle.innerText = Text;
    }
});

}

todoForm.addEventListener ("submit", (e) => { 
 e.preventDefault();

 const inputValue = todoInput.value;


 if(inputValue) {
    saveTodo(inputValue);
 }
});

document.addEventListener("click", (e) => {

const targetEl = e.target;
const parantEl = targetEl.closest("div");


let todoTitle;

if(parantEl && parantEl.querySelector("h3")){
    todoTitle = parantEl.querySelector("h3").innerText;
}

if(targetEl.classList.contains("terminados")){
    parantEl.classList.toggle("feito");

}

if(targetEl.classList.contains("remover-pendencia")){
    parantEl.remove();
}

if(targetEl.classList.contains("editar-pendencia")){
    toggleForms();

    editaInput.value = todoTitle;
    antigoInputValue = todoTitle;
}

});

CancelarEdit.addEventListener("click", (e) => {
e.preventDefault();

toggleForms();

});

editarForm.addEventListener("submit", (e) => {

e.preventDefault()

const editaInputValue = editaInput.value

if(editaInputValue){
   uptadeTodo(editaInputValue)
}

toggleForms()

})