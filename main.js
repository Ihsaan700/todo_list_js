todoList = {
  todos: [],

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
  },
  changeTodo: function(index, newText) {  
    this.todos[index].todoText = newText
  },
  deleteTodo: function(index, range = 1) {
    this.todos.splice(index, range)
  },
  toggleCompleted: function(index) {
    todo = this.todos[index]
    todo.completed = !todo.completed
  },
  toggleAll: function() {
    totalTodos = this.todos.length
    completedTodos = 0
    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++
      }
    }
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true
      }
    }
  }
}

handlers = {
  addTodo: function() {
    addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value)
    addTodoTextInput.value = ''
    view.displayTodos()
  },
  changeTodo: function() {
    changeTodoPositionInput = document.getElementById('ChangeTodoPosition')
    changeTodoInputText = document.getElementById('ChangeTodoTextInput')
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoInputText.value)
    changeTodoPositionInput.value = ''
    changeTodoInputText.value = ''
    view.displayTodos()
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position)
    // deleteTodoPositionInput.value = ''
    view.displayTodos()
  },
  toggleTodo: function() {
    toggledTodo = document.getElementById('toggleTodoInput')
    todoList.toggleCompleted(toggledTodo.valueAsNumber)
    toggleTodo = ''
    view.displayTodos()
  },
  toggleAllTodos: function() {
    todoList.toggleAll()
    view.displayTodos()
  }
}

view = {
  displayTodos: function() {
    todosUl = document.querySelector('ul')
    todosUl.innerHTML = ''
    for (i = 0; i < todoList.todos.length; i++) {
      todoLi = document.createElement('li')
      todo = todoList.todos[i]
      todoTextWithCompletion = ''
      if (todo.completed === true) {
        todoTextWithCompletion = '(X) ' + todo.todoText
      } else {
       todoTextWithCompletion = '( ) ' + todo.todoText 
      }
      
      todoLi.id = i
      todoLi.textContent = todoTextWithCompletion
      todoLi.appendChild(this.createDeleteButton())
      todosUl.appendChild(todoLi)
    }
  },
  createDeleteButton: function() {
    deleteButton = document.createElement('button')
    deleteButton.textContent = ('Delete')
    deleteButton.className = 'deleteButton'
    return deleteButton

  },
  setUpEventListener: function() {
    todosUl = document.querySelector('ul')
    
    todosUl.addEventListener('click', function(event) {
      elementClicked = event.target
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
      }
    })
  }
}

view.setUpEventListener()