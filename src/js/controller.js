export default function Controller (todo) {
  this.todo = todo
}

Controller.prototype.add = function (title) {
  if (title && typeof title === 'string') {
    this.todo.add({
      title,
      checked: false
    })
  }
}

Controller.prototype.remove = function (index) {
  this.todo.remove(index)
}

Controller.prototype.toggleCheck = function (index) {
  this.todo.toggleCheck(index)
}