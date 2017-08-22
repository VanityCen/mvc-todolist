export default function Controller (todo) {
  this.todo = todo
}

Controller.prototype.add = function (todo) {
  if (typeof todo === 'object') {
    this.todo.add(todo)
  }
}

Controller.prototype.remove = function (index) {
  this.todo.remove(index)
}

Controller.prototype.toggleCheck = function (index) {
  this.todo.toggleCheck(index)
}