import emitter from './emitter'

export default function Todo () {
  this.todos = [{
    title: 'Get High',
    checked: true
  }]
}

Todo.prototype.get = function () {
  return this.todos
}

Todo.prototype.add = function (todo) {
  this.todos.push(todo)
  emitter.emit('update')
}

Todo.prototype.remove = function (index) {
  this.todos.splice(index, 1)
  emitter.emit('update')
}

Todo.prototype.toggleCheck = function (index) {
  let target = this.todos[index]
  target.checked = !target.checked
  emitter.emit('update')
}