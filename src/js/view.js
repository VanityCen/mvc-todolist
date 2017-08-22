import emitter from './emitter'
import template from '../template/list.ejs'

export default function View (el, todo, controller) {
  this.todo = todo
  this.el = el
  this.controller = controller
  this.build()
}

View.prototype.build = function () {
  this.compile()
  this.initAddTodo()
  this.initListener()
  this.initToggleCheck()
  this.initRemoveTodo()
}

View.prototype.compile = function () {
  this.el.innerHTML = template({todos:this.todo.get()})
}

View.prototype.initAddTodo = function () {
  this.$addInput = document.querySelector('.newTodo')
  this.$addButton = document.querySelector('.add')
  this.$addButton.addEventListener('click', this.addTodo.bind(this), false)
}

View.prototype.initToggleCheck = function () {
  this.el.addEventListener('change', this.toggleCheckTodo.bind(this))
}

View.prototype.initRemoveTodo = function () {
  this.el.addEventListener('click', this.removeTodo.bind(this))
}

View.prototype.removeTodo = function (event) {
  const target = event.target
  if (target.className === 'btn-delete') {
    const $li = target.parentNode
    this.controller.remove($li.getAttribute('data-index'))
  }
}

View.prototype.toggleCheckTodo = function (event) {
  const target = event.target
  if (target.className === 'checkbox') {
    const $li = target.parentNode
    this.controller.toggleCheck($li.getAttribute('data-index'))
  }
}

View.prototype.addTodo = function () {
  let title = this.$addInput.value
  this.controller.add({
    title,
    checked: false
  })
  this.$addInput.value = ''
}

View.prototype.initListener = function () {
  emitter.on('update', this.compile.bind(this))
}
