let greetingHeader = document.getElementById('greeting');
let msgP = document.getElementById('briefMessage');
const nameInput = document.getElementById('nameInput');
const msgInput = document.getElementById('messageInput');
const bgColorSelect = document.getElementById('bgColorSelect');
const submitBtn = document.getElementById('submitBtn');
const body = document.body;
const mainContent = document.querySelector('main');

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

submitBtn.addEventListener('click', function() {
    const userName = nameInput.value;
    if (userName.trim() !== "") {
        greetingHeader.textContent = `Hello ${userName}`;
    } else {
        greetingHeader.textContent = 'Hello User';
    }

    const briefMessage = msgInput.value;
    if (briefMessage.trim() !== "") {
        msgP.textContent = briefMessage;
    } else {
        msgP.textContent = 'This is a default message.';
    }

    const selectedColor = bgColorSelect.value;
    body.style.backgroundColor = selectedColor;

    if(selectedColor === "#333333"){
        body.style.color = "white";
        mainContent.style.color = "black";
    } else {
        body.style.color = "black";
        mainContent.style.color = "black";
    }
});

function addTodoItem() {
    const todoText = todoInput.value;
    if (todoText.trim() !== "") {
        const listItem = document.createElement('li');
        
        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        
        deleteButton.onclick = function() {
            todoList.removeChild(listItem);
        };
        
        listItem.appendChild(textSpan);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
};

addTodoBtn.addEventListener('click', addTodoItem);

todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodoItem();
    }
});

