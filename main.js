todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('you have no todos!')
    } else {
      console.log('My todos: ')
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === false) {
          console.log('( )',this.todos[i].todoText)
        } else {
          console.log('(x)',this.todos[i].todoText) 
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
}  