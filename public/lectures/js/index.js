import { add, substract } from "./math.js";

console.log(add(2,5));
document.getElementById('hello').innerHTML = substract(5 , 3);

function renderTodos(todos){
    document.write("<ul>");
    todos.forEach((todo) => {
        document.write(`<li>${todo.text}</li>`);
    });
    document.write("</ul>"); 
}

const todos =[

    { id: 1, text: "learn Javascript", isCompleted: false },
    { id: 2, text: "learn React", isCompleted: false },
    { id: 3, text: "learn Node", isCompleted: false },
];

renderTodos(todos);

const todos2 = [
    { id: 1, text: "Pick up kids", isCompleted: false },
    { id: 2, text: "Grocery shopping", isCompleted: false },
    { id: 3, text: "Do laundry", isCompleted: false },
]

renderTodos(todos2);