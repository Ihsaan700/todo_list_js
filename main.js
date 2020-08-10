todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('you have no todos!')
    } else {
      console.log('My todos: ')
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)',this.todos[i].todoText) 
        } else {
          console.log('( )',this.todos[i].todoText)
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodos()
  },
  changeTodo: function(index, newText) {  
    this.todos[index].todoText = newText
    this.displayTodos()
  },
  deleteTodo: function(index, range = 1) {
    this.todos.splice(index, range)
    this.displayTodos()
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
      this.displayTodos()
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true
      }
      this.displayTodos()
    }
  }
}  