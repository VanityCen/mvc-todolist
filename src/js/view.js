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
}

View.prototype.compile = function () {
  this.el.innerHTML = template({todos:this.todo.get()})
}

View.prototype.initAddTodo = function () {
  this.$addInput = document.querySelector('.newTodo')
  this.$addButton = document.querySelector('.add')
  this.$addButton.addEventListener('click', this.addTodo.bind(this))
}

View.prototype.addTodo = function () {
  let title = this.$addInput.value
  this.controller.add({
    title,
    checked: false
  })
}

View.prototype.initListener = function () {
  emitter.on('update', this.compile.bind(this))
}