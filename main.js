todoList = {
  todos: [],
  displayTodos: function() {
    console.log('my todos: ' + this.todos)
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
  }
}