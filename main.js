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
    
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++
      }
    })
    
    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false
      } else {
        todo.completed = true
      }
    })

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
    todoList.todos.forEach(function(todo, position) {
      todoLi = document.createElement('li')
      todoTextWithCompletion = ''

      if (todo.completed === true) {
        todoTextWithCompletion = '(X) ' + todo.todoText
      } else {
       todoTextWithCompletion = '( ) ' + todo.todoText 
      }
       todoLi.id = position
       todoLi.textContent = todoTextWithCompletion
       todoLi.appendChild(this.createDeleteButton())
       todosUl.appendChild(todoLi)
    }, this)
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